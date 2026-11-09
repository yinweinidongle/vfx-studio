import{n as e,t,u as n}from"./index-Dgrgv_6h.js";import{a as r,c as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./kit-TXKnCP5u.js";import{i as f,r as p}from"./geometry-ZkWW22uO.js";import{$ as m,An as h,Mn as g,V as _,_ as v,dn as y,dt as b,et as x,j as S,kn as C,lt as w,n as T,r as E,s as D,ut as O,y as k,yn as A}from"./textures-DdZe6I7R.js";var j=`import indexSource from './index.ts?raw'
import shaderSource from './effect.glsl?raw'
import waterSource from '../../vendor/Water.js?raw'
import { meta } from './meta'
import { assemblePrograms } from '../../shaders/assemble'
import { buildSources } from '../../engine/sources'
import { glow, mist, shade, solid } from '../../engine/materials'
import { createSeedPoints, createStreaks } from '../../engine/geometry'
import { createWaterNormals, frameCamera } from '../../engine/textures'
import { readNumber } from '../../engine/params'
import { createRoot, publish, visualUniforms } from '../kit'
import { scaledCount } from '../../engine/quality'
import { Water } from '../../vendor/Water.js'
import type { EffectContext, EffectModule } from '../../engine/types'
import { CircleGeometry, DirectionalLight, DoubleSide, Mesh, NormalBlending, PlaneGeometry, Vector3 } from 'three'

const programs = assemblePrograms(shaderSource)

export function createEffect(ctx: EffectContext) {
  const root = createRoot(ctx)
  const uniforms = {
    ...visualUniforms(meta.loop, '#d9fff8', '#7ee0ff'),
    uFlow: { value: 1 },
    uMist: { value: 1 },
    uSheet: { value: 0 },
  }
  frameCamera(ctx.camera, [0.35, 2.35, 7.1], [0, 2.55, 0], 42)
  const rock = new Mesh(new PlaneGeometry(8, 7, 1, 1), shade('fall-rock', programs.rock, uniforms, solid))
  rock.position.set(0, 3.2, -1.4)
  root.add(rock)
  const sheets = [
    { x: -1.45, z: 0.05, w: 1.35, h: 5.2, id: 0.2 },
    { x: 0.05, z: 0.42, w: 1.05, h: 4.8, id: 1.7 },
    { x: 1.4, z: 0.12, w: 1.15, h: 4.5, id: 3.1 },
  ]
  for (const sheet of sheets) {
    const material = shade('fall-sheet', programs.sheet, { ...uniforms, uSheet: { value: sheet.id } }, {
      blending: NormalBlending,
      side: DoubleSide,
      depthWrite: false,
      transparent: true,
    })
    const mesh = new Mesh(new PlaneGeometry(sheet.w, sheet.h, 1, 48), material)
    mesh.position.set(sheet.x, sheet.h * 0.5 + 0.15, sheet.z)
    root.add(mesh)
  }
  root.add(createSeedPoints(scaledCount(180, ctx.quality, 20), shade('fall-foam', programs.foam, uniforms, glow)))
  root.add(createSeedPoints(scaledCount(70, ctx.quality, 10), shade('fall-mist', programs.mist, uniforms, mist)))
  root.add(createStreaks(scaledCount(90, ctx.quality, 12), shade('fall-spray', programs.spray, uniforms, glow)))
  const caustic = new Mesh(new CircleGeometry(3.2, 48), shade('fall-caustic', programs.caustic, uniforms, glow))
  caustic.rotation.x = -Math.PI / 2
  caustic.position.y = 0.08
  root.add(caustic)

  const normals = ctx.disposer.texture(createWaterNormals())
  const water = new Water(new PlaneGeometry(14, 14), {
    textureWidth: ctx.quality.water,
    textureHeight: ctx.quality.water,
    waterNormals: normals,
    sunDirection: new Vector3(0.25, 0.85, 0.15),
    sunColor: 0xd8f6ff,
    waterColor: 0x0b3c46,
    distortionScale: 2.4,
    alpha: 0.92,
  })
  water.rotation.x = -Math.PI / 2
  water.position.y = 0
  root.add(water)
  ctx.disposer.add(() => water.dispose())
  const sun = new DirectionalLight(0xe7f7ff, 1.2)
  sun.position.set(2, 6, 3)
  root.add(sun)

  const effect = publish(ctx, root, uniforms, meta.bloom, (time) => {
    const material = water.material
    const timeUniform = material.uniforms.time
    if (timeUniform) timeUniform.value = time
  })
  const applyBase = effect.apply.bind(effect)
  effect.apply = (values) => {
    applyBase(values)
    uniforms.uFlow.value = readNumber(values, 'flow') * readNumber(values, 'speed')
    uniforms.uMist.value = readNumber(values, 'mist')
  }
  return effect
}

export const effectModule: EffectModule = {
  meta,
  createEffect,
  sources: buildSources({
    implementationName: 'index.ts',
    implementation: indexSource,
    shaderName: 'effect.glsl',
    shader: shaderSource,
    programs,
    notes: meta.notes,
    upstream: [{ filename: 'Water.js', language: 'javascript', role: 'upstream', contents: waterSource }],
  }),
}
`,M=`// @program rock
// --- vertex ---
varying vec2 vUv;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vec3 pos = position;
  vWorld = (modelMatrix * vec4(pos, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
varying vec3 vWorld;
uniform float uTime;
void main() {
  float n = fbm(vec3(vWorld.xz * 0.35, vWorld.y * 0.2));
  float strata = smoothstep(0.2, 0.8, fract(vWorld.y * 0.35 + n));
  vec3 col = mix(vec3(0.02, 0.025, 0.03), vec3(0.07, 0.08, 0.09), n * 0.5 + 0.5);
  col += vec3(0.03, 0.05, 0.055) * strata;
  gl_FragColor = vec4(col, 1.0);
}

// @program sheet
// --- vertex ---
// @include noise
// @include common
varying vec2 vUv;
uniform float uTime;
uniform float uFlow;
uniform float uSheet;

void main() {
  vUv = uv;
  vec3 pos = position;
  float n = snoise(vec3(pos.x * 0.85, pos.y * 0.45 - uTime * uFlow, uSheet));
  pos.z += n * 0.16;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
uniform float uTime;
uniform float uFlow;
uniform float uIntensity;
uniform float uSheet;
uniform vec3 uColor;
uniform vec3 uColorB;

void main() {
  float x = vUv.x * 2.0 - 1.0;
  float body = smoothstep(1.0, 0.55, abs(x));
  float n = fbm(vec3(vUv.x * 3.0 + uSheet, vUv.y * 1.4 - uTime * uFlow, uSheet * 0.7));
  float thread = smoothstep(0.2, 0.85, fbm(vec3(vUv.x * 9.0, vUv.y * 0.35 - uTime * uFlow * 1.6, uSheet)));
  float bead = smoothstep(0.82, 1.0, fract(vUv.y * 2.2 - uTime * uFlow * 1.2));
  float lip = smoothstep(0.14, 0.0, vUv.y);
  vec3 water = mix(uColorB * 0.35, vec3(0.82, 0.94, 1.0), 0.35 + thread * 0.65);
  water = mix(water, vec3(1.0), bead * thread * 0.55 + lip * 0.75);
  float alpha = body * (0.28 + thread * 0.45 + lip * 0.35) * (0.65 + 0.35 * n) * uIntensity;
  gl_FragColor = vec4(water, clamp(alpha, 0.0, 0.88));
}

// @program foam
// --- vertex ---
attribute vec3 aSeed;
uniform float uTime;
uniform float uFlow;
varying float vFade;

void main() {
  float x = (aSeed.x - 0.5) * 3.4;
  float z = (aSeed.y - 0.5) * 1.4;
  float bob = sin(uTime * 2.2 * uFlow + aSeed.z * 12.0) * 0.05;
  vec3 pos = vec3(x, 0.18 + bob + aSeed.z * 0.2, z + 0.4);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp((10.0 + aSeed.z * 18.0) * (2.8 / max(0.4, -mv.z)), 2.0, 32.0);
  vFade = 0.45 + 0.55 * (0.5 + 0.5 * sin(uTime * 3.0 + aSeed.x * 20.0));
}
// --- fragment ---
varying float vFade;
uniform float uIntensity;
void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float glow = exp(-dot(pc, pc) * 3.2);
  if (glow < 0.05) discard;
  gl_FragColor = vec4(vec3(0.92, 0.98, 1.0) * uIntensity, glow * vFade * 0.85);
}

// @program mist
// --- vertex ---
attribute vec3 aSeed;
uniform float uTime;
uniform float uMist;
varying float vFade;

void main() {
  float rise = fract(aSeed.z + uTime * 0.08);
  vec3 pos = vec3((aSeed.x - 0.5) * 4.2, 0.2 + rise * 2.8 * uMist, (aSeed.y - 0.5) * 2.2 + 0.3);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(40.0 * uMist * (3.0 / max(0.5, -mv.z)), 8.0, 72.0);
  vFade = smoothstep(0.0, 0.15, rise) * (1.0 - smoothstep(0.65, 1.0, rise));
}
// --- fragment ---
varying float vFade;
uniform float uIntensity;
uniform float uMist;
void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float d = dot(pc, pc);
  float soft = smoothstep(1.0, 0.1, d);
  gl_FragColor = vec4(vec3(0.82, 0.9, 0.92), soft * vFade * 0.18 * uMist * uIntensity);
}

// @program spray
// --- vertex ---
// @include noise
// @include common
attribute float aSeed;
attribute float aSeed2;
uniform float uTime;
uniform float uFlow;
varying float vAlpha;
varying float vAcross;

void main() {
  float life = fract(uTime * 0.8 * uFlow + aSeed);
  vec3 dir = normalize(vec3(aSeed - 0.5, 0.65 + aSeed2, aSeed2 - 0.2));
  vec3 head = vec3((aSeed - 0.5) * 2.4, 0.15, 0.5) + dir * life * 0.9 + vec3(0.0, -life * life * 0.8, 0.0);
  vec3 tail = head - dir * 0.18;
  vec3 pos = streakBillboard(tail, head, uv, 0.02);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vAlpha = (1.0 - life) * step(life, 0.85);
  vAcross = abs(uv.x - 0.5) * 2.0;
}
// --- fragment ---
varying float vAlpha;
varying float vAcross;
uniform float uIntensity;
void main() {
  float core = exp(-vAcross * vAcross * 8.0);
  float alpha = core * vAlpha * uIntensity;
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(vec3(0.95, 0.99, 1.0) * uIntensity, alpha);
}

// @program caustic
// --- vertex ---
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
// --- fragment ---
// @include noise
// @include common
varying vec2 vUv;
uniform float uTime;
uniform float uFlow;
uniform vec3 uColor;
void main() {
  vec2 p = vUv * 6.0;
  float a = fbm(vec3(p + uTime * uFlow * 0.15, 1.0));
  float b = fbm(vec3(p * 1.4 - uTime * uFlow * 0.1, 3.0));
  float line = pow(abs(a - b), 0.45);
  float caustic = smoothstep(0.55, 0.95, 1.0 - line);
  gl_FragColor = vec4(uColor * caustic * 0.45, caustic * 0.35);
}
`,N=`import {
	Color,
	FrontSide,
	HalfFloatType,
	Matrix4,
	Mesh,
	PerspectiveCamera,
	Plane,
	ShaderMaterial,
	UniformsLib,
	UniformsUtils,
	Vector3,
	Vector4,
	WebGLRenderTarget
} from 'three';

/**
 * A basic flat, reflective water effect.
 *
 * Note that this class can only be used with {@link WebGLRenderer}.
 * When using {@link WebGPURenderer}, use {@link WaterMesh}.
 *
 * References:
 *
 * - [Flat mirror for three.js](https://github.com/Slayvin)
 * - [An implementation of water shader based on the flat mirror](https://home.adelphi.edu/~stemkoski/)
 * - [Water shader explanations in WebGL](http://29a.ch/slides/2012/webglwater/ )
 *
 * @augments Mesh
 * @three_import import { Water } from 'three/addons/objects/Water.js';
 */
/**
 * ADAPTATION of three.js r187 Water.
 * Upstream (MIT, Copyright 2010-2026 three.js authors):
 * https://github.com/mrdoob/three.js/blob/r187/examples/jsm/objects/Water.js
 * https://github.com/mrdoob/three.js/blob/r187/LICENSE
 *
 * three.js documents this effect as based on Slayvin's flat mirror,
 * Stemkoski's mirror water, and the WebGL water notes at 29a.ch.
 * Those references are citations inside the upstream file. This project
 * does not copy additional code from those sites.
 *
 * Local changes:
 * - expose renderTarget and dispose() so switching demos releases the reflection target
 * - remove tonemapping_fragment and colorspace_fragment from the mirror shader
 *   so the shared EffectComposer OutputPass can tonemap a linear HDR color.
 *   Upstream applies those chunks inside the material, which double-encodes
 *   when a later OutputPass also encodes to sRGB.
 * The mirror pass, noise sampling, and reflectance math are the upstream shader.
 */
class Water extends Mesh {

	/**
	 * Constructs a new water instance.
	 *
	 * @param {BufferGeometry} geometry - The water's geometry.
	 * @param {Water~Options} [options] - The configuration options.
	 */
	constructor( geometry, options = {} ) {

		super( geometry );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isWater = true;

		const scope = this;

		const textureWidth = options.textureWidth !== undefined ? options.textureWidth : 512;
		const textureHeight = options.textureHeight !== undefined ? options.textureHeight : 512;

		const clipBias = options.clipBias !== undefined ? options.clipBias : 0.0;
		const alpha = options.alpha !== undefined ? options.alpha : 1.0;
		const time = options.time !== undefined ? options.time : 0.0;
		const normalSampler = options.waterNormals !== undefined ? options.waterNormals : null;
		const sunDirection = options.sunDirection !== undefined ? options.sunDirection : new Vector3( 0.70707, 0.70707, 0.0 );
		const sunColor = new Color( options.sunColor !== undefined ? options.sunColor : 0xffffff );
		const waterColor = new Color( options.waterColor !== undefined ? options.waterColor : 0x7F7F7F );
		const eye = options.eye !== undefined ? options.eye : new Vector3( 0, 0, 0 );
		const distortionScale = options.distortionScale !== undefined ? options.distortionScale : 20.0;
		const side = options.side !== undefined ? options.side : FrontSide;
		const fog = options.fog !== undefined ? options.fog : false;

		//

		const mirrorPlane = new Plane();
		const normal = new Vector3();
		const mirrorWorldPosition = new Vector3();
		const cameraWorldPosition = new Vector3();
		const rotationMatrix = new Matrix4();
		const lookAtPosition = new Vector3( 0, 0, - 1 );
		const clipPlane = new Vector4();

		const view = new Vector3();
		const target = new Vector3();
		const q = new Vector4();

		const textureMatrix = new Matrix4();

		const mirrorCamera = new PerspectiveCamera();

		const renderTarget = new WebGLRenderTarget( textureWidth, textureHeight, { type: HalfFloatType } );

		const mirrorShader = {

			name: 'MirrorShader',

			uniforms: UniformsUtils.merge( [
				UniformsLib[ 'fog' ],
				UniformsLib[ 'lights' ],
				{
					'normalSampler': { value: null },
					'mirrorSampler': { value: null },
					'alpha': { value: 1.0 },
					'time': { value: 0.0 },
					'size': { value: 1.0 },
					'distortionScale': { value: 20.0 },
					'textureMatrix': { value: new Matrix4() },
					'sunColor': { value: new Color( 0x7F7F7F ) },
					'sunDirection': { value: new Vector3( 0.70707, 0.70707, 0 ) },
					'eye': { value: new Vector3() },
					'waterColor': { value: new Color( 0x555555 ) }
				}
			] ),

			vertexShader: /* glsl */\`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}\`,

			fragmentShader: /* glsl */\`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <fog_fragment>	
				}\`

		};

		const material = new ShaderMaterial( {
			name: mirrorShader.name,
			uniforms: UniformsUtils.clone( mirrorShader.uniforms ),
			vertexShader: mirrorShader.vertexShader,
			fragmentShader: mirrorShader.fragmentShader,
			lights: true,
			side: side,
			fog: fog
		} );

		material.uniforms[ 'mirrorSampler' ].value = renderTarget.texture;
		material.uniforms[ 'textureMatrix' ].value = textureMatrix;
		material.uniforms[ 'alpha' ].value = alpha;
		material.uniforms[ 'time' ].value = time;
		material.uniforms[ 'normalSampler' ].value = normalSampler;
		material.uniforms[ 'sunColor' ].value = sunColor;
		material.uniforms[ 'waterColor' ].value = waterColor;
		material.uniforms[ 'sunDirection' ].value = sunDirection;
		material.uniforms[ 'distortionScale' ].value = distortionScale;

		material.uniforms[ 'eye' ].value = eye;

		scope.material = material;

		scope.onBeforeRender = function ( renderer, scene, camera ) {

			mirrorWorldPosition.setFromMatrixPosition( scope.matrixWorld );
			cameraWorldPosition.setFromMatrixPosition( camera.matrixWorld );

			rotationMatrix.extractRotation( scope.matrixWorld );

			normal.set( 0, 0, 1 );
			normal.applyMatrix4( rotationMatrix );

			view.subVectors( mirrorWorldPosition, cameraWorldPosition );

			// Avoid rendering when mirror is facing away

			if ( view.dot( normal ) > 0 ) return;

			view.reflect( normal ).negate();
			view.add( mirrorWorldPosition );

			rotationMatrix.extractRotation( camera.matrixWorld );

			lookAtPosition.set( 0, 0, - 1 );
			lookAtPosition.applyMatrix4( rotationMatrix );
			lookAtPosition.add( cameraWorldPosition );

			target.subVectors( mirrorWorldPosition, lookAtPosition );
			target.reflect( normal ).negate();
			target.add( mirrorWorldPosition );

			mirrorCamera.position.copy( view );
			mirrorCamera.up.set( 0, 1, 0 );
			mirrorCamera.up.applyMatrix4( rotationMatrix );
			mirrorCamera.up.reflect( normal );
			mirrorCamera.lookAt( target );

			mirrorCamera.far = camera.far; // Used in WebGLBackground

			mirrorCamera.updateMatrixWorld();
			mirrorCamera.projectionMatrix.copy( camera.projectionMatrix );

			// Update the texture matrix
			textureMatrix.set(
				0.5, 0.0, 0.0, 0.5,
				0.0, 0.5, 0.0, 0.5,
				0.0, 0.0, 0.5, 0.5,
				0.0, 0.0, 0.0, 1.0
			);
			textureMatrix.multiply( mirrorCamera.projectionMatrix );
			textureMatrix.multiply( mirrorCamera.matrixWorldInverse );

			// Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
			// Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
			mirrorPlane.setFromNormalAndCoplanarPoint( normal, mirrorWorldPosition );
			mirrorPlane.applyMatrix4( mirrorCamera.matrixWorldInverse );

			clipPlane.set( mirrorPlane.normal.x, mirrorPlane.normal.y, mirrorPlane.normal.z, mirrorPlane.constant );

			const projectionMatrix = mirrorCamera.projectionMatrix;

			q.x = ( Math.sign( clipPlane.x ) + projectionMatrix.elements[ 8 ] ) / projectionMatrix.elements[ 0 ];
			q.y = ( Math.sign( clipPlane.y ) + projectionMatrix.elements[ 9 ] ) / projectionMatrix.elements[ 5 ];
			q.z = - 1.0;
			q.w = ( 1.0 + projectionMatrix.elements[ 10 ] ) / projectionMatrix.elements[ 14 ];

			// Calculate the scaled plane vector
			clipPlane.multiplyScalar( 2.0 / clipPlane.dot( q ) );

			// Replacing the third row of the projection matrix
			projectionMatrix.elements[ 2 ] = clipPlane.x;
			projectionMatrix.elements[ 6 ] = clipPlane.y;
			projectionMatrix.elements[ 10 ] = clipPlane.z + 1.0 - clipBias;
			projectionMatrix.elements[ 14 ] = clipPlane.w;

			eye.setFromMatrixPosition( camera.matrixWorld );

			// Render

			const currentRenderTarget = renderer.getRenderTarget();

			const currentXrEnabled = renderer.xr.enabled;
			const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;

			scope.visible = false;

			renderer.xr.enabled = false; // Avoid camera modification and recursion
			renderer.shadowMap.autoUpdate = false; // Avoid re-computing shadows

			renderer.setRenderTarget( renderTarget );

			renderer.state.buffers.depth.setMask( true ); // make sure the depth buffer is writable so it can be properly cleared, see #18897

			if ( renderer.autoClear === false ) renderer.clear();
			renderer.render( scene, mirrorCamera );

			scope.visible = true;

			renderer.xr.enabled = currentXrEnabled;
			renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;

			renderer.setRenderTarget( currentRenderTarget );

			// Restore viewport

			const viewport = camera.viewport;

			if ( viewport !== undefined ) {

				renderer.state.viewport( viewport );

			}

		};

		this.renderTarget = renderTarget;

		this.dispose = function () {

			renderTarget.dispose();
			material.dispose();

		};

	}

}

/**
 * Constructor options of \`Water\`.
 *
 * @typedef {Object} Water~Options
 * @property {number} [textureWidth=512] - The texture width. A higher value results in more clear reflections but is also more expensive.
 * @property {number} [textureHeight=512] - The texture height. A higher value results in more clear reflections but is also more expensive.
 * @property {number} [clipBias=0] - The clip bias.
 * @property {number} [alpha=1] - The alpha value.
 * @property {number} [time=0] - The time value.
 * @property {?Texture} [waterNormals=null] - The water's normal map.
 * @property {Vector3} [sunDirection=(0.70707,0.70707,0.0)] - The sun direction.
 * @property {number|Color|string} [sunColor=0xffffff] - The sun color.
 * @property {number|Color|string} [waterColor=0x7F7F7F] - The water color.
 * @property {Vector3} [eye] - The eye vector.
 * @property {number} [distortionScale=20] - The distortion scale.
 * @property {(FrontSide|BackSide|DoubleSide)} [side=FrontSide] - The water material's \`side\` property.
 * @property {boolean} [fog=false] - Whether the water should be affected by fog or not.
 **/

export { Water };
`,P=class extends x{constructor(t,n={}){super(t),this.isWater=!0;let r=this,i=n.textureWidth===void 0?512:n.textureWidth,a=n.textureHeight===void 0?512:n.textureHeight,o=n.clipBias===void 0?0:n.clipBias,s=n.alpha===void 0?1:n.alpha,c=n.time===void 0?0:n.time,l=n.waterNormals===void 0?null:n.waterNormals,u=n.sunDirection===void 0?new C(.70707,.70707,0):n.sunDirection,d=new k(n.sunColor===void 0?16777215:n.sunColor),f=new k(n.waterColor===void 0?8355711:n.waterColor),p=n.eye===void 0?new C(0,0,0):n.eye,v=n.distortionScale===void 0?20:n.distortionScale,b=n.side===void 0?0:n.side,x=n.fog!==void 0&&n.fog,S=new O,T=new C,E=new C,D=new C,j=new m,M=new C(0,0,-1),N=new h,P=new C,F=new C,I=new h,L=new m,R=new w,z=new g(i,a,{type:_}),B={name:`MirrorShader`,uniforms:A.merge([e.fog,e.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new m},sunColor:{value:new k(8355711)},sunDirection:{value:new C(.70707,.70707,0)},eye:{value:new C},waterColor:{value:new k(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <fog_fragment>	
				}`},V=new y({name:B.name,uniforms:A.clone(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader,lights:!0,side:b,fog:x});V.uniforms.mirrorSampler.value=z.texture,V.uniforms.textureMatrix.value=L,V.uniforms.alpha.value=s,V.uniforms.time.value=c,V.uniforms.normalSampler.value=l,V.uniforms.sunColor.value=d,V.uniforms.waterColor.value=f,V.uniforms.sunDirection.value=u,V.uniforms.distortionScale.value=v,V.uniforms.eye.value=p,r.material=V,r.onBeforeRender=function(e,t,n){if(E.setFromMatrixPosition(r.matrixWorld),D.setFromMatrixPosition(n.matrixWorld),j.extractRotation(r.matrixWorld),T.set(0,0,1),T.applyMatrix4(j),P.subVectors(E,D),P.dot(T)>0)return;P.reflect(T).negate(),P.add(E),j.extractRotation(n.matrixWorld),M.set(0,0,-1),M.applyMatrix4(j),M.add(D),F.subVectors(E,M),F.reflect(T).negate(),F.add(E),R.position.copy(P),R.up.set(0,1,0),R.up.applyMatrix4(j),R.up.reflect(T),R.lookAt(F),R.far=n.far,R.updateMatrixWorld(),R.projectionMatrix.copy(n.projectionMatrix),L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),L.multiply(R.projectionMatrix),L.multiply(R.matrixWorldInverse),S.setFromNormalAndCoplanarPoint(T,E),S.applyMatrix4(R.matrixWorldInverse),N.set(S.normal.x,S.normal.y,S.normal.z,S.constant);let i=R.projectionMatrix;I.x=(Math.sign(N.x)+i.elements[8])/i.elements[0],I.y=(Math.sign(N.y)+i.elements[9])/i.elements[5],I.z=-1,I.w=(1+i.elements[10])/i.elements[14],N.multiplyScalar(2/N.dot(I)),i.elements[2]=N.x,i.elements[6]=N.y,i.elements[10]=N.z+1-o,i.elements[14]=N.w,p.setFromMatrixPosition(n.matrixWorld);let a=e.getRenderTarget(),s=e.xr.enabled,c=e.shadowMap.autoUpdate;r.visible=!1,e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(z),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,R),r.visible=!0,e.xr.enabled=s,e.shadowMap.autoUpdate=c,e.setRenderTarget(a);let l=n.viewport;l!==void 0&&e.state.viewport(l)},this.renderTarget=z,this.dispose=function(){z.dispose(),V.dispose()}}},F=o(M);function I(e){let i=d(e),o={...l(n.loop,`#d9fff8`,`#7ee0ff`),uFlow:{value:1},uMist:{value:1},uSheet:{value:0}};E(e.camera,[.35,2.35,7.1],[0,2.55,0],42);let m=new x(new b(8,7,1,1),c(`fall-rock`,F.rock,o,u));m.position.set(0,3.2,-1.4),i.add(m);for(let e of[{x:-1.45,z:.05,w:1.35,h:5.2,id:.2},{x:.05,z:.42,w:1.05,h:4.8,id:1.7},{x:1.4,z:.12,w:1.15,h:4.5,id:3.1}]){let t=c(`fall-sheet`,F.sheet,{...o,uSheet:{value:e.id}},{blending:1,side:2,depthWrite:!1,transparent:!0}),n=new x(new b(e.w,e.h,1,48),t);n.position.set(e.x,e.h*.5+.15,e.z),i.add(n)}i.add(p(t(180,e.quality,20),c(`fall-foam`,F.foam,o,a))),i.add(p(t(70,e.quality,10),c(`fall-mist`,F.mist,o,r))),i.add(f(t(90,e.quality,12),c(`fall-spray`,F.spray,o,a)));let h=new x(new v(3.2,48),c(`fall-caustic`,F.caustic,o,a));h.rotation.x=-Math.PI/2,h.position.y=.08,i.add(h);let g=e.disposer.texture(T()),_=new P(new b(14,14),{textureWidth:e.quality.water,textureHeight:e.quality.water,waterNormals:g,sunDirection:new C(.25,.85,.15),sunColor:14219007,waterColor:736326,distortionScale:2.4,alpha:.92});_.rotation.x=-Math.PI/2,_.position.y=0,i.add(_),e.disposer.add(()=>_.dispose());let y=new S(15202303,1.2);y.position.set(2,6,3),i.add(y);let w=s(e,i,o,n.bloom,e=>{let t=_.material.uniforms.time;t&&(t.value=e)}),O=w.apply.bind(w);return w.apply=e=>{O(e),o.uFlow.value=D(e,`flow`)*D(e,`speed`),o.uMist.value=D(e,`mist`)},w}var L={meta:n,createEffect:I,sources:i({implementationName:`index.ts`,implementation:j,shaderName:`effect.glsl`,shader:M,programs:F,notes:n.notes,upstream:[{filename:`Water.js`,language:`javascript`,role:`upstream`,contents:N}]})};export{L as effectModule};
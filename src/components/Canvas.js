import React, { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';
//import firebase from '../firebase';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette, SSAO } from '@react-three/postprocessing';
/* import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass' */

import Tree from './Tree';
/* import InputComment from './InputComment'; */

/* extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass, FilmPass }) */

function ThreeCanvas(props) {

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mouse = useRef([0, 0]);
    //const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), []);

    //EFFECTS
    /* function Effect() {
        const composer = useRef()
        const { scene, gl, size, camera } = useThree()
        const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size])
        useEffect(() => void composer.current.setSize(size.width, size.height), [size])
        useFrame(() => composer.current.render(), 1)

        //PARAMS FOR BLOOM
        const params = {resolution: aspect, strength: 1, radius: 1, threshold: 0};

        return (
          <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" scene={scene} camera={camera} />
            <unrealBloomPass attachArray="passes" args={[params.resolution, params.strength, params.radius, params.threshold]} />
          </effectComposer>
        )
    } */

    function Swarm({ count, mouse }) {
        const mesh = useRef()
        const light = useRef()
        const { size, viewport } = useThree()
        const aspect = size.width / viewport.width
        
        const dummy = useMemo(() => new THREE.Object3D(), [])
        // Generate some random positions, speed factors and timings
        const particles = useMemo(() => {
            const temp = []
            for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
            }
            return temp
        }, [count])
        // The innards of this hook will run every frame
        useFrame(state => {
            // Makes the light follow the mouse
            light.current.position.set(mouse.current[0] / aspect, -mouse.current[1] / aspect, 0)
            // Run through the randomized data to calculate some movement
            particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle
            // There is no sense or reason to any of this, just messing around with trigonometric functions
            t = particle.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)
            particle.mx += (mouse.current[0] - particle.mx) * 0.01
            particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
            // Update the dummy object
            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )
            dummy.scale.set(s, s, s)
            dummy.rotation.set(s * 5, s * 5, s * 5)
            dummy.updateMatrix()
            // And apply the matrix to the instanced item
            mesh.current.setMatrixAt(i, dummy.matrix)
            })
            mesh.current.instanceMatrix.needsUpdate = true
        })
        return (
            <>
            <pointLight ref={light} distance={10} intensity={2} color="lightblue" />
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <dodecahedronBufferGeometry attach="geometry" args={[0.1, 0]} />
                <meshBasicMaterial attach="material" color="white" />
            </instancedMesh>
            </>
        )
    }

    /* const [comments, setComments] = useState([]);

    useEffect(() => {
        const projectsRef = firebase.database().ref('tree-comments');
        projectsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            Object.values(items).forEach(item => newState.push(item));
            setComments(newState);
        })
    }, []); */

    /* pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)} */

    return (
        <div className="canvas-cont">
            <Canvas
                camera={{position: [0, 2, 7]}}
                gl={{ powerPreference: "high-performance", alpha: false, antialias: false, stencil: false, depth: false }}>
                <color attach="background" args={["Brown"]} />
                {/* <fog color="#212121" attach="fog" near={8} far={30} /> */}
                {/* <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh> */}
                {/* <fog attach="fog" args={['white', 50, 190]} /> */}
                <Suspense fallback={null}>
                    <Tree comments={props.comments}/>
                </Suspense>
                <Swarm count={isMobile ? 5000 : 10000} mouse={mouse} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} target={[0, 2, 0]} />
                {/* <Effect /> */}
                <EffectComposer smma>
                    {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.99} intensity={0.5} />
                    <Noise opacity={0.02} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    <SSAO />
                </EffectComposer>
                
            </Canvas>
            {/* <InputComment /> */}
        </div>
    );
}

export default ThreeCanvas;
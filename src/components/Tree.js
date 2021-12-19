import React, { Suspense, Component, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useGLTF, Text } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';
import logoPath from '../assets/rareaLogo.glb';
import treePath from '../assets/rarea_ChristmasTree.glb';

import { useSpring, animated } from '@react-spring/three';

import Comment from './Comment.js';

//Extend contents from THREE to make them available as JSX elements
extend({ MeshSurfaceSampler });

function Tree(props) {
    //'../../public/assets/rarea_ChristmasTree.glb'
    const { nodes } = useGLTF(treePath);

    const logo = useGLTF(logoPath);


    const amountLogo = 20;
    const amountText = props.comments.length;


    const textArray = ['Hi there!', 'Merry Christmas everyone!', 'I wish you were here', "What's this and how can it be so cool? lol", 'Dani hemos entrado y escrito pero no sabemos qué hacer', 'Patricia, muy chulo'];

    const textArray2 = new Array(amountText).fill(textArray).flat();


    const logoPosArray = [];
    sampleLogo(nodes.Scene.children[0]);
    

    function sampleLogo(model){

        const sampler = new MeshSurfaceSampler(model).build();
        const tempPosition = new THREE.Vector3();
        for (let i = 0; i < amountLogo; i ++) {
            const tempObject = new THREE.Object3D();
            sampler.sample(tempPosition);
            tempObject.position.set(tempPosition.x, tempPosition.y, tempPosition.z);
            tempObject.scale.setScalar(Math.random() * 0.1 + 0.5);
            tempObject.rotation.x = Math.PI/2;
            tempObject.lookAt(new THREE.Vector3(0, tempPosition.y, 0));
            tempObject.updateMatrix();
            logoPosArray.push({position: tempObject.position, rotation: tempObject.rotation});
            //console.log(tempObject.position)
        }
        //console.log(logoPosArray)

    }

    const textPosArray = [];
    sampleText(nodes.Scene.children[0]);

    function sampleText(model){

        const sampler = new MeshSurfaceSampler(model).build();
        const tempPosition = new THREE.Vector3();
        for (let i = 0; i < amountText; i ++) {
            const tempObject = new THREE.Object3D();
            sampler.sample(tempPosition);
            tempObject.position.set(tempPosition.x, tempPosition.y, tempPosition.z);
            tempObject.scale.setScalar(Math.random() * 0.1 + 0.5);
            tempObject.rotation.x = Math.PI/2;
            tempObject.lookAt(new THREE.Vector3(0, tempPosition.y, 0));
            tempObject.rotation.z = i % 2 == 0 ? Math.PI/2 : 0;
            tempObject.updateMatrix();
            textPosArray.push(tempObject);
            //textPosArray.push({position: tempObject.position, rotation: tempObject.rotation});
        }
        //console.log(logoPosArray)

    }


    const [hovered, setHovered] = useState(false);

    const {scale} = useSpring({ scale: hovered ? [2, 2, 2] : [1, 1, 1] });
  
    const handleHover = (e) => {
        e.stopPropagation();
        
        if (!hovered){
            setHovered(true);
            document.body.style.cursor = "pointer";
        }else {
            setHovered(false);
            document.body.style.cursor = "default";
        }
        
    };
    
    const AnimatedText = animated(Text);

    const colors = ['Chartreuse', 'GreenYellow', 'PaleGreen'];

    return (
        <group>
            {/* {LOGOS} */}
            {logoPosArray.map(vertex => (
                <mesh
                    castShadow
                    receiveShadow
                    geometry={logo.nodes.Scene.children[0].geometry}
                    position={[vertex.position.x, vertex.position.y, vertex.position.z]}
                    rotation={[vertex.rotation.x, vertex.rotation.y, vertex.rotation.z]}
                    key={Math.random()}
                    scale={Math.random() * 0.1 + 0.5}
                >
                    <meshBasicMaterial attach="material" color={colors[Math.floor(Math.random()*colors.length)]} wireframe></meshBasicMaterial>
                    {/* {console.log(vertex.position.x)} */}
                </mesh>
                
            ))}
            {/* {TEXT} */}
            {textPosArray.map(vertex => (
                
                <Comment
                    value={props.comments[textPosArray.indexOf(vertex)]}
                    position={[vertex.position.x, vertex.position.y, vertex.position.z]}
                    rotation={[0, vertex.rotation.y + Math.PI, vertex.rotation.z]}
                    key={Math.random()} />             
            ))}
            {/* {textPosArray.map(vertex => (
                
                <AnimatedText
                    color="LightSlateGrey" // default
                    anchorX="center" // default
                    anchorY="middle" // default
                    position={[vertex.position.x, vertex.position.y, vertex.position.z]}
                    rotation={[vertex.rotation.x, vertex.rotation.y + Math.PI, vertex.rotation.z]}
                    key={Math.random()}
                    onPointerEnter={handleHover}
                    onPointerLeave={handleHover}
                >
                    {textArray2[textPosArray.indexOf(vertex)]}
                </AnimatedText>              
            ))} */}
            {/* {LOGO TOP} */}
            <mesh
                castShadow
                receiveShadow
                geometry={logo.nodes.Scene.children[0].geometry}
                position={[0, 5.1, 0]}
                scale={0.8}
            >
                <meshBasicMaterial attach="material" color='GreenYellow' wireframe></meshBasicMaterial>
            </mesh>

        </group>
    );
}

export default Tree;
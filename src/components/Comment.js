import React, { useState } from 'react';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
/* import { applyProps, extend, useFrame } from '@react-three/fiber';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';
import logoPath from '../assets/rareaLogo.glb';
import treePath from '../assets/rarea_ChristmasTree.glb'; */
import Alata from '../assets/Nunito-SemiBold.ttf';

import { useSpring, animated } from '@react-spring/three';



function Comment(props) {
    

    const [hovered, setHovered] = useState(false);

    const {scale} = useSpring({ scale: hovered ? [1.1, 1.1, 1.1] : [1, 1, 1] });
    const {outlineOpacity} = useSpring({ outlineOpacity: hovered ? 0.8 : 0 });
    

    const handleHover = (e) => {
        e.stopPropagation();
        
        if (!hovered){
            setHovered(true);
            document.body.style.cursor = "pointer";
            e.object.color = "white";
        }else {
            setHovered(false);
            document.body.style.cursor = "default";
            e.object.color = "Black";
        }
        
    };

    

    const minWidth = 2;
    const maxWidth = 4;

    // Clamp number between two values with the following line:
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    const textWidth = clamp((8 / props.position[1]), minWidth, maxWidth);
    //console.log(props.position[1]);
    //console.log(textWidth);
    
    //const AnimatedText = animated(Text);

    return (
        <animated.group scale={scale}>
            
            {/* {TEXT} */}
                
            <Text
                color="Black"
                anchorX="center" // default
                anchorY="middle" // default
                textAlign='center'
                maxWidth={textWidth}
                outlineBlur={'50%'}
                outlineColor={"White"}
                outlineWidth={"20%"}
                font={Alata}
                outlineOpacity={outlineOpacity}
                onPointerEnter={handleHover}
                onPointerLeave={handleHover}
                position={props.position}
                rotation={props.rotation}
                text={props.value}
            >
                <meshBasicMaterial attach="material" side={THREE.DoubleSide}/>
            </Text>
            

        </animated.group>
    );
}

export default Comment;
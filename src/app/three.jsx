'use client'
import * as THREE from 'three';
import React, {useEffect} from 'react';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';


export default function Three(){

    useEffect(() => {
        // Instantiate scene
        const scene = new THREE.Scene();
        // Initalize and position camera
        const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
        camera.position.z = 5;
        
        // Set Canvas
        const canvas = document.getElementById("ThreeContainer");
        const renderer = new THREE.WebGLRenderer({antialias: true, canvas, alpha: true});
        renderer.setSize( 500, 500 );

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        // Load Model
        const loader = new GLTFLoader();
        var loadedmodel = null;

        loader.load('/3D/Laptop.glb', function(model){
            scene.add(model.scene);
            model.scene.position.y = -1;
            loadedmodel = model;
            console.log(model);

        }, undefined, function(error){
            console.log(error);

        });

        // Light
        const lightColor = 0xFFFFFF;
        const lightIntensity = 5;
        const light = new THREE.AmbientLight(lightColor, lightIntensity);
        scene.add(light);

        // Raycast
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        // renderer.domElement.addEventListener('mousemove', mouseMove, false);
        renderer.domElement.addEventListener('click', mouseClick, false);
        function mouseMove(event){
            const rect = canvas.getBoundingClientRect();
        }

        function boundingRect(event){
            const rect = canvas.getBoundingClientRect();
            return{
                x: (event.clientX - rect.left) * canvas.width / rect.width,
                y: (event.clientY - rect.top) * canvas.height / rect.height
            }
        }
        function mouseClick(event){
            if (loadedmodel != null){
                const pos = boundingRect(event);
                mouse.x = (pos.x / canvas.width) * 2 - 1;
                mouse.y = (pos.y / canvas.height) * -2 + 1;

                raycaster.setFromCamera(mouse, camera);
            
                const intersects = raycaster.intersectObjects(loadedmodel.scene.children)[0];
                if(intersects != undefined && intersects.object.name === "About_me"){
                    console.log("About Me");
                }
                
            }
        }

        // Animation Loop
        function animate() {
            controls.update();
            renderer.render(scene, camera);
        }
        renderer.setAnimationLoop(animate);
    }, []);

    return(
        <canvas id="ThreeContainer">

        </canvas>
    )
}
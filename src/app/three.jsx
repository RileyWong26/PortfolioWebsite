'use client'
import * as THREE from 'three';
import React, {useEffect} from 'react';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

export default function Three(){
    const resizeCanvas = () => {
        // Reset the size of the canvas to fit the screen 
        const heroSection = document.getElementById("HeroSection")
        if(heroSection !== null){
            return heroSection.clientWidth;
        }
        return 0;
    }

    useEffect(() => {
        

        // Instantiate scene
        const scene = new THREE.Scene();
        // Initalize and position camera
        const fov = 75;
        const aspect = 1;
        const near = 0.1;
        const far = 1000;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 5;
        camera.position.y = 2;
        
        // Set Canvas
        const canvas = document.getElementById("ThreeContainer");
        const renderer = new THREE.WebGLRenderer({antialias: true, canvas, alpha: true});

        // Set size
        var canvasWidth = resizeCanvas();
        renderer.setSize( canvasWidth, canvasWidth );

        // Resize the canvas on window resizes
        window.addEventListener("resize", () => {
            canvasWidth = resizeCanvas();
            renderer.setSize(canvasWidth, canvasWidth);
        });

        // Orbit
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        // Load Model
        const loader = new GLTFLoader();
        var person;
        var mixer;

        loader.load('/HeroAsset/Coding.glb', function(model){
            person = model.scene;
            scene.add(person);
            person.position.y = -3;
            person.position.x = -1.5;
            person.scale.set(.6, .6, .6);
            person.rotation.set(0, 3 *Math.PI / 4, 0);
            // Animation MIxer
            mixer = new THREE.AnimationMixer(person);
            const clips = model.animations;
            mixer.clipAction(clips[0]).play();
            mixer.update(deltaTime);

        }, undefined, function(error){
            console.log(error);

        });

        // Light
        const lightColor = 0xFFFFFF;
        const lightIntensity = 5;
        // const light = new THREE.AmbientLight(lightColor, lightIntensity);
        const light = new THREE.DirectionalLight(lightColor, lightIntensity);
        light.position.y = 5;
        if(person !== undefined){
            light.target = person;
        }
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
            return;
        }
        
        // Animation Loop
        function animate() {
            controls.update();
            renderer.render(scene, camera);
            if( mixer){
                mixer.update(0.02);
            }
        }
        renderer.setAnimationLoop(animate);
    }, []);

    return(
        <canvas id="ThreeContainer" className="overflow-hidden w-full">

        </canvas>
    )
}
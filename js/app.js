import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { cubo , plano} from "./components/figuras.js";
let scene = new THREE.Scene();

let camara = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 0.1, 1000);
camara.position.z = 5;
camara.position.y = -20;

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

let luz = new THREE.DirectionalLight(0xffffff, 1, 10);
luz.position.set(-0, 0, 5);
luz.castShadow = true;

const controls = new OrbitControls(camara, renderer.domElement);

scene.add(cubo,luz,plano);




function render() {
   /* cube.rotation.x += 0.01
	cube.rotation.y += 0.01*/
	requestAnimationFrame(render);
	renderer.render(scene, camara);
}
render();
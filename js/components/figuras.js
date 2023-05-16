import * as THREE from 'three';
////////    Plano   /////////
let planoGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
let planoMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
export let plano = new THREE.Mesh(planoGeometry, planoMaterial);
plano.receiveShadow = true;
plano.position.set(0, 0, 0);
////////    Plano   /////////

////////    Cubo   /////////
let cuboGeometry = new THREE.BoxGeometry(1, 1, 1);
let cuboMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
export let cubo = new THREE.Mesh(cuboGeometry, cuboMaterial);
cubo.position.set(0,0,2);
cubo.castShadow = true;
////////    Cubo   /////////
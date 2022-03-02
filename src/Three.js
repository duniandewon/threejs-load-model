import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Model from './Model'

class Three {
  constructor(width, height) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#scene"),
      alpha: true,
    });

    this.camera.position.set(0, -0.5, 3.5);
    this.scene.background = new THREE.Color(0x595959);

    this.hemisphereLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    this.scene.add(this.hemisphereLight);

    this.spotLight = new THREE.SpotLight(0xffa95c, 4);
    this.spotLight.castShadow = true;
  
    this.scene.add(this.spotLight);

    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.shadowMap.enabled = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.model = new Model(this.scene)

    this.draw();
    this.helpers();
  }

  draw = () => {
    requestAnimationFrame(this.draw);
    this.spotLight.position.set(
      this.camera.position.x + 10,
      this.camera.position.y + 10,
      this.camera.position.z + 10
    );
    this.renderer.render(this.scene, this.camera);
  };

  helpers = () => {
    this.scene.add(new THREE.AxesHelper(500));
  };
}

export default Three;

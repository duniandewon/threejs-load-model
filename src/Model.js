import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class Model {
  constructor(scene) {
    this.scene = scene;

    this.loader = new GLTFLoader();
    this.loader.setPath("../assets/demon_head/");

    this.loader.load("scene.gltf", (gltf) => {
      this.model = gltf.scene.children[0];

      console.log(this.model);

      this.model.castShadow = true;
      this.model.receiveShadow = true;
      this.model.traverse((n) => {
        if (n.isMesh) {
          n.castShadow = true;
          n.receiveShadow = true;
          if (n.material.map) n.material.map.anisotropy = 16;
        }
      });

      scene.add(this.model);
    });
  }
}

export default Model;

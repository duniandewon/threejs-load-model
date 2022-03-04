import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class Model {
  constructor(scene, model) {
    this.scene = scene;

    this.loader = new GLTFLoader();

    this.loader.load(model, (gltf) => {
      this.model = gltf.scene;

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

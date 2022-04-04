import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

class SceneInit {
  constructor(canvasId) {

    /// NOTE: Camera params;
    this.fov = 45;
    this.canvasId = canvasId;

    //// NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // NOTE : additional components
    this.clock = undefined;
    this.controls = undefined;
    this.stats = undefined;

    // NOTE: Lighting is basically required.
    this.ambientLight = undefined;
    this.spotLight = undefined;
  }

  initialize() {
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 96;

    
    this.scene = new THREE.Scene();

    //canvas
    const canvas = document.getElementById("myThreeJsCanvas");
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.clock = new THREE.Clock();
    this.stats = Stats();
    document.body.appendChild(this.stats.dom);

    //lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    this.scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    this.scene.add(spotLight);

    window.addEventListener('resize', () => this.onWindowResize(), false);

  }

  animate(){
    //boxMesh.rotation.x += 0.01;
    //boxMesh.rotation.y += 0.01;
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.stats.update();
    this.controls.update();
    
  }

  render() {
    // NOTE: Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

}

export default SceneInit;

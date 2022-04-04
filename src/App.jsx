import './App.css';
import { useEffect } from 'react';
import * as THREE from 'three';

import SceneInit from './SceneInit';

function App() {
  useEffect(()=> {

    const test = new SceneInit('myThreeJsCanvas');

    test.initialize();
    test.animate();
    //Geometry
    const boxGeometry = new THREE.BoxGeometry(16,16,16);

    //material
    const boxMaterial = new THREE.MeshNormalMaterial();

    //Mesh
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    test.scene.add(boxMesh);

   
  }, []);
  return (
    <div className="App">
      <canvas id="myThreeJsCanvas"/>
    </div>
  )
}

export default App

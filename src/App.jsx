import "./App.css";
import { useEffect } from "react";
import * as THREE from "three";
import { GUI } from 'dat.gui';

import { TeapotGeometry } from "three/examples/jsm/geometries/TeapotGeometry.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import SceneInit from "./SceneInit";

function App() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");

    test.initialize();
    test.animate();

    //Geometry
    const boxGeometry = new THREE.BoxGeometry(24, 24, 24);
    const boxMaterial = new THREE.MeshPhongMaterial({ color : 0xff0000 });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.x = -1;
    test.scene.add(boxMesh);

    const gui = new GUI();

    gui.add(boxMesh.rotation, 'x', 0, Math.PI).name('Rotate X Axis');
    gui.add(boxMesh.rotation, 'x', 0, Math.PI).name('Rotate Y Axis');
    gui.add(boxMesh.rotation, 'z', 0, Math.PI).name('Rotate Z Axis');
    gui.add(boxMesh.scale, 'x', 0, 2).name('Scale X Axis');
    gui.add(boxMesh.scale, 'y', 0, 2).name('Scale Y Axis');
    gui.add(boxMesh.scale, 'z', 0, 2).name('Scale Z Axis');

    //Upadating Material (color, wireframe)

    const materialParams = {
      boxMeshColor: boxMesh.material.color.getHex()
    };
    gui.add(boxMesh.material, 'wireframe');
    gui.addColor(materialParams, 'boxMeshColor')
    .onChange((value) =>boxMesh.material.color.set(value) );


    // Refactor GUI with folders 

    // const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 16, 16);
    // const cylinderMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    // const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    // cylinderMesh.position.x = 1;
    // test.scene.add(cylinderMesh);

    // const teapotGeometry = new TeapotGeometry(0.5, 8);
    // const teaportMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    // const teapotMesh = new THREE.Mesh(teapotGeometry, teaportMaterial);
    // teapotMesh.position.x = 3;
    // test.scene.add(teapotMesh);

    // const roundedBox = new RoundedBoxGeometry(1, 1, 3, 5, 0.1);
    // const roundMaterial = new THREE.MeshNormalMaterial({wireframe: true});
    // const roundedMesh = new THREE.Mesh(roundedBox, roundMaterial);
    // roundedMesh.position.x = -3;
    // test.scene.add(roundedMesh);


    
  }, []);
  return (
    <div className="App">
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;

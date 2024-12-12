// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";
import {
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    MeshBuilder,
    Mesh,
    Light,
    Camera,
    Engine,
    StandardMaterial,
    Texture,
    Color3
  } from "@babylonjs/core";
  
  function createBox(scene: Scene) 
  {
    let box1 = MeshBuilder.CreateBox("box",{size: 1}, scene);
    box1.position.y = 3;
    var texture = new StandardMaterial("reflective", scene);
    texture.ambientTexture = new Texture("./assets/reflectivity.png", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    box1.material = texture;
    return box1;

    
  }

  function createCylinder(scene: Scene) 
  {
    let cylinder = MeshBuilder.CreateCylinder(
      "cylinder",
      { height: 1, diameter: 0.7 },
      scene
    );
    cylinder.position.x = 1;
    cylinder.position.y = 1;
    cylinder.position.z = 1;
  
    var texture = new StandardMaterial("reflective", scene);
    texture.ambientTexture = new Texture("./assets/reflectivity.png", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    cylinder.material = texture;
    return cylinder;
  }

  
  function createLight(scene: Scene) {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    return light;
  }
  
  function createHemisphericLight(scene: Scene ){
    const light:HemisphericLight = new HemisphericLight("light", new Vector3(1, 10, 0),scene);
    light.intensity = 1;
    light.diffuse = new Color3(0, 1, 0);
    light.specular = new Color3(0, 1, 0);
    light.groundColor = new Color3(0, 0, 1);
    return light;
}

  function createSphere(scene: Scene) 
  {
    let sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 2, segments: 32 },
      scene,
    );
    sphere.position.y = 1;
    return sphere;

  }
  
  function createGround(scene: Scene) 
  {
    let ground = MeshBuilder.CreateGround(
      "ground",
      { width: 6, height: 6 },
      scene,
    );
    return ground;

  }
  
  function createArcRotateCamera(scene: Scene) 
  {
    let camAlpha = -Math.PI / 2,
      camBeta = Math.PI / 2.5,
      camDist = 10,
      camTarget = new Vector3(0, 0, 0);
    let camera = new ArcRotateCamera(
      "camera1",
      camAlpha,
      camBeta,
      camDist,
      camTarget,
      scene,
    );
    camera.attachControl(true);
    return camera;
  }
  
  export default function createStartScene(engine: Engine) 
  {
    interface SceneData {
      scene: Scene;
      cylinder?: Mesh ;
      lightHemispheric?: HemisphericLight,
      light?: Light ;
      sphere?: Mesh;
      ground?: Mesh;
      camera?: Camera ;
      box? : Mesh; 
    }
  
    let that: SceneData = { scene: new Scene(engine) };
    // that.scene.debugLayer.show();
  
    that.cylinder = createCylinder(that.scene);
    that.box = createBox(that.scene);
    that.light = createLight(that.scene) ;
    that.sphere = createSphere(that.scene) ;
    that.ground = createGround(that.scene);
    that.camera = createArcRotateCamera(that.scene);
    that.lightHemispheric = createHemisphericLight(that.scene);
    return that;
  }
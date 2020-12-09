const canvas = document.getElementById('renderCanvas') // Get the canvas element
const engine = new BABYLON.Engine(canvas, true) // Generate the BABYLON 3D engine
// Add your code here matching the playground format
const createScene = () => {
  const scene = new BABYLON.Scene(engine)
  console.log('hello ji')

  /**** Set camera and light *****/
  const camera = new BABYLON.ArcRotateCamera(
    'camera',
    -Math.PI / 2,
    Math.PI / 2.5,
    10,
    new BABYLON.Vector3(0, 0, 0)
  )
  camera.attachControl(canvas, true)
  const light = new BABYLON.HemisphericLight(
    'light',
    new BABYLON.Vector3(1, 1, 0)
  )
  const ground = createGround()
  const box = createBox()
  const roof = createRoof()
  return scene
}

const createBox = () => {
  const boxMat = new BABYLON.StandardMaterial('boxMat')
  boxMat.diffuseTexture = new BABYLON.Texture('./texture/wall.jpg')

  const box = BABYLON.MeshBuilder.CreateBox('box', {})
  box.position.y = 0.5
  box.material = boxMat
}
const createRoof = () => {
  const roofMat = new BABYLON.StandardMaterial('roofMat')
  roofMat.diffuseTexture = new BABYLON.Texture('./texture/roof.jpg')

  const roof = BABYLON.MeshBuilder.CreateCylinder('roof', {
    diameter: 1.3,
    height: 1.2,
    tessellation: 3,
  })
  roof.material = roofMat
  roof.scaling.x = 0.75
  roof.rotation.z = Math.PI / 2
  roof.position.y = 1.22
}

const createGround = () => {
  const groundMat = new BABYLON.StandardMaterial('groundMat')
  groundMat.diffuseTexture = new BABYLON.Texture('./texture/ground.jpg')

  const ground = BABYLON.MeshBuilder.CreateGround('ground', {
    width: 10,
    height: 10,
  })
  ground.material = groundMat
}

const scene = createScene() //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
  scene.render()
})

// Watch for browser/canvas resize events
window.addEventListener('resize', function () {
  engine.resize()
})

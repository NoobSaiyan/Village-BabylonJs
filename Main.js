const canvas = document.getElementById('renderCanvas') // Get the canvas element
const engine = new BABYLON.Engine(canvas, true) // Generate the BABYLON 3D engine
// Add your code here matching the playground format
const createScene = () => {
  const scene = new BABYLON.Scene(engine)

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

  const box = BABYLON.MeshBuilder.CreateBox('box', {})
  box.position.y = 0.5
  const ground = BABYLON.MeshBuilder.CreateGround('ground', {
    width: 10,
    height: 10,
  })

  return scene
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

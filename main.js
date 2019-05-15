// Check Three.js Documentation

// Declare global variables
let scene, camera, renderer, cube;

// Create a function to initialize the variables inside, without having to use 'const', but only for variables declared above. 
function init() {
  // Initialize the scene, use the keyword 'THREE'
  scene = new THREE.Scene();
  // Can edit the background colour
  scene.background = new THREE.Color('skyblue');

  // Create a camera, this is the 'Perspective projection (P)' camera. Another camera type is the 'Orthographic projection(O)'.
  // It takes in 4 arguments: Field of View(FOV), Aspect, Near (plane) & Far (plane).
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Initialize Renderer using WebGL, a powerful API for 2d and 3d graphics
  // Add anti aliasing to render the object from jagged edges
  renderer = new THREE.WebGLRenderer({ antialias: true });

  // Set size of the renderer to the window
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Render inside HTML
  document.body.appendChild(renderer.domElement);

  // Geometry Object
  // Using the geometry class of BoxGeometry
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  // Drawing of the geometry object in a simple way, comes with a default colour. Lighting will not affect the material.
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  // Can also use an image for the texture on the object. Use the '.load' method on the method '.TextureLoader' to import the image file from the folder source
  const texture = new THREE.TextureLoader().load('textures/Spongebob-SquarePants-Face.jpg');
  // Use MeshBasicMaterial to map and call the variable 'texture'
  const material = new THREE.MeshBasicMaterial({ map: texture });
  // Mesh method takes in the BoxGeometry and the MeshBasicMaterial as arguments
  cube = new THREE.Mesh(geometry, material);
  // Add cube to the scene
  scene.add(cube);

  // Set the camera position
  camera.position.z = 5;
}


// To display the object, this will create a loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the object 
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// Like media queries/ responsive web
function onWindowResize() {
  // Aspect
  camera.aspect = window.innerWidth / window.innerHeight;
  // Update the camera position
  camera.updateProjectionMatrix();
  // Set the render size to the window again just like the one inside the function init
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Create Event Listener to call the onWindowResize function, set to false
window.addEventListener('resize', onWindowResize, false);

// Call the functions
init();
animate();
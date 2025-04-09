
import * as THREE from 'three';

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let particles: THREE.Points;
let raycaster: THREE.Raycaster;
let mouse: THREE.Vector2;
let animationFrameId: number;

// Track mouse position for interactive effects
const mousePosition = {
  x: 0,
  y: 0
};

export const init = (canvas: HTMLCanvasElement, container: HTMLDivElement) => {
  // Scene setup
  scene = new THREE.Scene();
  
  // Camera setup
  const { width, height } = container.getBoundingClientRect();
  const aspectRatio = width / height;
  camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.z = 30;
  
  // Renderer setup
  renderer = new THREE.WebGLRenderer({ 
    canvas, 
    alpha: true,
    antialias: true 
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Raycaster for mouse interaction
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  
  // Create particle system
  createParticles();
  
  // Event listeners
  window.addEventListener('resize', onWindowResize);
  window.addEventListener('mousemove', onMouseMove);
  
  return () => {
    window.removeEventListener('resize', onWindowResize);
    window.removeEventListener('mousemove', onMouseMove);
    cancelAnimationFrame(animationFrameId);
    
    // Dispose resources
    if (particles) {
      if (particles.geometry) particles.geometry.dispose();
      if (particles.material instanceof THREE.Material) particles.material.dispose();
      scene.remove(particles);
    }
    
    renderer.dispose();
  };
};

const createParticles = () => {
  // Particle geometry
  const particleCount = 1000;
  const geometry = new THREE.BufferGeometry();
  
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);
  
  const colorChoices = [
    new THREE.Color('#9b87f5'), // neon purple
    new THREE.Color('#0ea5e9'), // neon cyan
    new THREE.Color('#f97316')  // neon orange
  ];
  
  for (let i = 0; i < particleCount; i++) {
    // Position
    const x = (Math.random() - 0.5) * 50;
    const y = (Math.random() - 0.5) * 50;
    const z = (Math.random() - 0.5) * 50;
    
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    
    // Color
    const colorIndex = Math.floor(Math.random() * 3);
    const color = colorChoices[colorIndex];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
    
    // Size
    sizes[i] = Math.random() * 0.2;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  
  // Particle material
  const material = new THREE.PointsMaterial({
    size: 0.2,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  
  // Create points
  particles = new THREE.Points(geometry, material);
  scene.add(particles);
};

export const animate = () => {
  animationFrameId = requestAnimationFrame(animate);
  
  if (particles) {
    // Rotate particles slowly
    particles.rotation.x += 0.0005;
    particles.rotation.y += 0.0008;
    
    // Interactive movement based on mouse position
    particles.rotation.x += (mousePosition.y * 0.0002);
    particles.rotation.y += (mousePosition.x * 0.0002);
    
    // Update particle positions
    const positions = particles.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      // Subtle oscillation for particles
      positions[i + 1] += Math.sin(Date.now() * 0.001 + positions[i]) * 0.003;
    }
    particles.geometry.attributes.position.needsUpdate = true;
  }
  
  renderer.render(scene, camera);
};

const onWindowResize = () => {
  if (camera && renderer && scene) {
    const container = renderer.domElement.parentElement;
    if (!container) return;
    
    const { width, height } = container.getBoundingClientRect();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
};

const onMouseMove = (event: MouseEvent) => {
  // Calculate normalized mouse coordinates
  mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
};

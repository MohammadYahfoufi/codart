'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

const PlanetModel = () => {
  const { scene } = useGLTF('/stylized_planet.glb');

  return (
    <primitive
      object={scene}
      scale={[2, 2, 2]}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const PlanetCanvas = () => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[31rem] aspect-square mx-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight
          position={[-10, -10, -5]}
          intensity={0.5}
          color="#b49bff"
        />
        <PlanetModel />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
};

export default PlanetCanvas;


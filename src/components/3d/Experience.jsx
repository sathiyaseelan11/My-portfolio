import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, OrbitControls } from '@react-three/drei';
import Stars from './Stars';
import HeroPlanet from './HeroPlanet';
import ShootingStars from './ShootingStars';
import Nebula from './Nebula';

export default function Experience() {
    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

                <Suspense fallback={null}>
                    <Stars />
                    <Nebula />
                    <ShootingStars />
                    <HeroPlanet />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
}

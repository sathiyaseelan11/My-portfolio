import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

export default function HeroPlanet() {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.y = time * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
                <MeshDistortMaterial
                    color="#3d1c56"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

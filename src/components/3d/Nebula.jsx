import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Nebula() {
    const group = useRef();

    // Create soft gaseous blobs
    const blobs = useMemo(() => {
        const temp = [];
        const colors = ['#4400ff', '#00ffff', '#ff00ff', '#4400aa'];
        for (let i = 0; i < 4; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 15,
                    -10 - Math.random() * 5
                ],
                color: colors[i],
                size: 5 + Math.random() * 5,
                speed: 0.1 + Math.random() * 0.2
            });
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (!group.current) return;
        group.current.children.forEach((mesh, i) => {
            mesh.position.x += Math.sin(state.clock.elapsedTime * blobs[i].speed) * 0.002;
            mesh.position.y += Math.cos(state.clock.elapsedTime * blobs[i].speed) * 0.002;
        });
    });

    return (
        <group ref={group}>
            {blobs.map((blob, i) => (
                <mesh key={i} position={blob.position}>
                    <sphereGeometry args={[blob.size, 32, 32]} />
                    <meshBasicMaterial
                        color={blob.color}
                        transparent
                        opacity={0.03}
                        blending={THREE.AdditiveBlending}
                        side={THREE.BackSide}
                    />
                </mesh>
            ))}
        </group>
    );
}

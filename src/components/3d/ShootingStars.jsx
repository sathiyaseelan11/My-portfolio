import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ShootingStars() {
    const ref = useRef();

    const count = 15;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 6); // 2 points per line (start and end)
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = -5 - Math.random() * 10;

            // Start point
            pos[i * 6] = x;
            pos[i * 6 + 1] = y;
            pos[i * 6 + 2] = z;

            // End point (tail)
            pos[i * 6 + 3] = x + 0.5;
            pos[i * 6 + 4] = y + 0.5;
            pos[i * 6 + 5] = z;
        }
        return pos;
    }, []);

    const velocities = useMemo(() => {
        const vel = new Float32Array(count * 2);
        for (let i = 0; i < count; i++) {
            vel[i * 2] = -0.15 - Math.random() * 0.2; // x speed
            vel[i * 2 + 1] = -0.15 - Math.random() * 0.2; // y speed
        }
        return vel;
    }, []);

    useFrame(() => {
        if (!ref.current) return;
        const array = ref.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            const vx = velocities[i * 2];
            const vy = velocities[i * 2 + 1];

            // Update both head and tail
            array[i * 6] += vx;
            array[i * 6 + 1] += vy;
            array[i * 6 + 3] += vx;
            array[i * 6 + 4] += vy;

            // Reset when off screen
            if (array[i * 6] < -15 || array[i * 6 + 1] < -15) {
                const x = 15 + Math.random() * 10;
                const y = 15 + Math.random() * 10;
                array[i * 6] = x;
                array[i * 6 + 1] = y;
                array[i * 6 + 3] = x + 0.5;
                array[i * 6 + 4] = y + 0.5;
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <lineSegments ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count * 2}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.4}
                blending={THREE.AdditiveBlending}
            />
        </lineSegments>
    );
}

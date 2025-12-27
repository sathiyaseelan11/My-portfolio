import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 400, mass: 0.1 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const mouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', mouseMove);
        return () => window.removeEventListener('mousemove', mouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-cyan-500 rounded-full pointer-events-none z-[999]"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%'
            }}
        />
    );
}

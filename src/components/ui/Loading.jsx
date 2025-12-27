import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
            <div className="relative w-32 h-32">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t-4 border-cyan-500 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border-b-4 border-purple-500 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white]" />
                </div>
            </div>
            <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mt-8 text-cyan-400 font-mono tracking-[0.3em] uppercase text-sm"
            >
                Initializing Multiverse...
            </motion.p>
        </motion.div>
    );
}

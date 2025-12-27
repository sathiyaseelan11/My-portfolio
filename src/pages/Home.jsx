import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl w-full px-8 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
            {/* Photo Frame */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative group shrink-0"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                    <img
                        src="/logo.png"
                        alt="Sathiyaseelan"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center md:text-center flex-1">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="text-white/60 text-xl md:text-2xl font-medium mb-2"
                >
                    Hyy! i'm
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 whitespace-nowrap tracking-tight"
                >
                    SATHIYASEELAN S
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0"
                >
                    Computer Science student passionate about coding, web development, and building meaningful software solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <button
                        onClick={() => navigate('/about')}
                        className="px-10 py-4 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 font-medium transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.1)] active:scale-95 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                    >
                        Explore Universe
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

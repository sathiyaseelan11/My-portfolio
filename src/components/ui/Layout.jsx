import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Experience from '../3d/Experience';

export default function Layout({ children }) {
    const location = useLocation();

    return (
        <div className="min-h-screen text-white relative">
            <Experience />
            {location.pathname !== '/' && <Navbar />}

            <main className="relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}

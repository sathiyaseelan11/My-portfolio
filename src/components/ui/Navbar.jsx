import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Skills', path: '/skills', icon: Code },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl">
                {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = location.pathname === link.path;

                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="relative group p-2 transition-all duration-300"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-active"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            <Icon
                                size={20}
                                className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-white/60 group-hover:text-white'
                                    }`}
                            />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-md rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {link.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

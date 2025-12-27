import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'NOTINIX',
        desc: 'An AI-powered note management platform designed to centralize your knowledge and visualize connections between your ideas.',
        tags: ['React', 'AI', 'Node.js', 'Visualization'],
        link: 'https://github.com/sathiyaseelan11/NOTINIX',
        repo: 'https://github.com/sathiyaseelan11/NOTINIX'
    },
    {
        title: 'Smart Waste Management',
        desc: 'Automates waste classification using Deep Neural Networks (DNN) for efficient recycling and disposal solutions.',
        tags: ['DNN', 'AI', 'Python', 'Image Recognition'],
        link: 'https://github.com/sathiyaseelan11/smart-waste-management',
        repo: 'https://github.com/sathiyaseelan11/smart-waste-management'
    },
    {
        title: 'Skywings – E-Commerce',
        desc: 'A full-stack fashion hub platform with comprehensive features for seamless online shopping experiences.',
        tags: ['React', 'E-Commerce', 'Node.js', 'Tailwind'],
        link: 'https://github.com/sathiyaseelan11/skywings-fashion-hub',
        repo: 'https://github.com/sathiyaseelan11/skywings-fashion-hub'
    },
    {
        title: 'Skywings Frontend',
        desc: 'Modern web frontend development for the Skywings e-commerce platform, focusing on performance and user experience.',
        tags: ['Web Dev', 'Frontend', 'React', 'UI/UX'],
        link: 'https://github.com/sathiyaseelan11/Skywings',
        repo: 'https://github.com/sathiyaseelan11/Skywings'
    },
    {
        title: 'Smart Traffic & Vehicle Detection',
        desc: 'Advanced vehicle detection and traffic management system leveraging Deep Neural Networks for real-time analysis.',
        tags: ['DNN', 'Python', 'Computer Vision', 'AI'],
        link: 'https://github.com/sathiyaseelan11/DNN',
        repo: 'https://github.com/sathiyaseelan11/DNN'
    },
    {
        title: 'Competitive Programming',
        desc: 'Achieved 1200+ rating on CodeChef, solving 500+ problems with consistent participation.',
        tags: ['DSA', 'C++', 'Python', 'CodeChef'],
        link: 'https://www.codechef.com/users/sathiyaseelan5',
        repo: 'https://leetcode.com/u/sathiya_seelan-77/'
    }
];

export default function Projects() {
    return (
        <div className="max-w-6xl w-full">
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                Recent Expeditions
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="p-1 rounded-3xl bg-gradient-to-b from-white/20 to-transparent"
                    >
                        <div className="h-full p-8 bg-[#05060a] rounded-3xl flex flex-col">
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-white/60 mb-6 flex-grow">{project.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-cyan-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-cyan-400"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

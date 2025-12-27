import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import codechefImg from '../assets/codechef.png';
import leetcodeImg from '../assets/leetcode.png';

export default function About() {
    const socials = [
        { icon: Github, href: "https://github.com/sathiyaseelan11/", isLucide: true },
        { icon: Linkedin, href: "https://www.linkedin.com/in/sathiyaseelan-s-9300b12a7", isLucide: true },
        { icon: codechefImg, href: "https://www.codechef.com/users/sathiyaseelan5", isLucide: false, alt: 'CodeChef' },
        { icon: leetcodeImg, href: "https://leetcode.com/u/sathiya_seelan-77/", isLucide: false, alt: 'LeetCode' }
    ];

    return (
        <div className="max-w-3xl w-full">
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-8 text-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                Origin Story
            </motion.h2>

            <motion.div
                className="flex justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {socials.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white transition-colors flex items-center justify-center shadow-lg"
                    >
                        {social.isLucide ? (
                            <social.icon size={24} />
                        ) : (
                            <img src={social.icon} alt={social.alt} className="w-6 h-6 object-contain invert" />
                        )}
                    </motion.a>
                ))}
            </motion.div>

            <div className="grid gap-8">
                <motion.div
                    className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl"
                    whileHover={{ scale: 1.01 }}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Education</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-lg">B.E in Computer Science and Engineering</p>
                            <p className="text-white/60">KIT | 2023 - 2026</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg">Higher Secondary</p>
                            <p className="text-white/60">Periyar Matriculation Hr. Sec School | 2021 - 2023 (80%)</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl"
                    whileHover={{ scale: 1.01 }}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-purple-400">Passion & Objectives</h3>
                    <p className="text-lg leading-relaxed text-white/80">
                        I am Sathiyaseelan S, a Computer Science student with a deep passion for coding and web development. I thrive on hands-on learning, enjoy tackling challenging problems, and continuously seek to expand my technical skills to build real-world solutions that make a meaningful impact.
                    </p>
                    <div className="mt-8 flex items-center justify-end">
                        <p className="text-white/40 italic text-sm">Languages: English, Tamil</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

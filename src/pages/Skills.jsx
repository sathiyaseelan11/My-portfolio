import { motion } from 'framer-motion';
import { ExternalLink, Code2, Database, GitBranch, FileSpreadsheet, Cpu, Globe } from 'lucide-react';

const skills = [
    { name: 'Python & Java', level: 90, color: 'text-cyan-400', icon: Code2 },
    { name: 'Data Structures (DSA)', level: 85, color: 'text-white', icon: Cpu },
    { name: 'React & Web Dev', level: 95, color: 'text-blue-400', icon: Globe },
    { name: 'SQL & Databases', level: 80, color: 'text-green-400', icon: Database },
    { name: 'Git & GitHub', level: 90, color: 'text-blue-500', icon: GitBranch },
    { name: 'Excel & Data Analysis', level: 85, color: 'text-green-500', icon: FileSpreadsheet },
];

const certifications = [
    { name: 'Getting Started with Linux Fundamentals', issuer: 'RedHat', link: 'https://drive.google.com/file/d/1AjwTaq7JDRpSQ1KW600KTbIPmhYE9ghx/view?usp=drive_link' },
    { name: 'Foundation of Deep Learning', issuer: 'NVIDIA', link: 'https://drive.google.com/file/d/1fW-f18kOCBdxaHitwkEvby45YaPJqISw/view?usp=drive_link' },
    { name: 'Open Learning', issuer: 'Juniper', link: 'https://drive.google.com/file/d/1woIwzJe1mvkpUMR9cyo4fxHS2tOp_4XE/view?usp=drive_link' },
    { name: 'Java Foundation', issuer: 'Infosys', link: 'https://drive.google.com/file/d/1BCLmETghWc7a7N-bj9vzqTJIZ7HvWJBk/view?usp=drive_link' },
    { name: 'Getting Started with Artificial Intelligence', issuer: 'IBM', link: 'https://drive.google.com/file/d/1OGavEcks4Qh_tc7BMvj6wsIRy2_dRTLd/view?usp=drive_link' },
    { name: 'Cyber Security', issuer: 'Cisco', link: 'https://drive.google.com/file/d/1mumHK94LyRMnQUDwQyegeQQ38ERq6sAb/view?usp=drive_link' },
    { name: 'Web Development', issuer: 'Infosys', link: 'https://drive.google.com/file/d/1BOfNlzCFcmr4z8xKb4i-KOEgTP4mYI4z/view?usp=drive_link' },
];

export default function Skills() {
    return (
        <div className="max-w-4xl w-full">
            <motion.h2
                className="text-4xl md:text-5xl font-bold mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                Tech Arsenal
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="flex justify-between mb-2 items-center">
                            <span className={`text-xl font-medium ${skill.color} flex items-center gap-2`}>
                                <skill.icon size={20} className="opacity-70" />
                                {skill.name}
                            </span>
                            <span className="text-white/40">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full bg-gradient-to-r ${skill.color === 'text-cyan-400' ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl"
            >
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 text-center">Certifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certifications.map((cert) => (
                        <motion.a
                            key={cert.name}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
                                <div className="flex flex-col">
                                    <span className="text-white/80 font-medium leading-tight">{cert.name}</span>
                                    <span className="text-white/40 text-sm">{cert.issuer}</span>
                                </div>
                            </div>
                            <ExternalLink size={16} className="text-white/20 group-hover:text-cyan-400 transition-colors" />
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

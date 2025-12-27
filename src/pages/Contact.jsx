import React from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Phone, MapPin, Code2, Globe } from 'lucide-react';

export default function Contact() {
    const [result, setResult] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending transmission...");
        const formData = new FormData(event.target);

        // Append the existing access key
        formData.append("access_key", "64ebc3d3-99d5-4367-8047-2f50a7336c53");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Transmission Received Successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
        setIsSubmitting(false);

        // Clear success message after 5 seconds
        setTimeout(() => {
            setResult("");
        }, 5000);
    };

    return (
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
                <div className="space-y-4 mb-8 text-white/70">
                    <p className="flex items-center gap-3"><Mail size={18} className="text-cyan-400" /> <a href="mailto:sathiyaseelan7082@gmail.com" className="text-cyan-400 underline">sathiyaseelan7082@gmail.com</a></p>
                    <p className="flex items-center gap-3"><Phone size={18} className="text-cyan-400" /> +91-7845053463</p>
                    <p className="flex items-center gap-3"><MapPin size={18} className="text-cyan-400" /> Ariyalur, Tamilnadu</p>
                </div>

                <div className="flex flex-wrap gap-4">
                    {[
                        { Icon: Github, href: "https://github.com/sathiyaseelan11/" },
                        { Icon: Linkedin, href: "https://www.linkedin.com/in/sathiyaseelan-s-9300b12a7" },
                        {
                            img: "/codechef.png",
                            href: "https://www.codechef.com/users/sathiyaseelan5",
                            alt: "CodeChef"
                        },
                        {
                            img: "/leetcode.png",
                            href: "https://leetcode.com/u/sathiya_seelan-77/",
                            alt: "LeetCode"
                        }
                    ].map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white/60 transition-colors flex items-center justify-center"
                        >
                            {item.Icon ? (
                                <item.Icon size={24} />
                            ) : (
                                <img src={item.img} alt={item.alt} className="w-6 h-6 object-contain invert" />
                            )}
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            <motion.form
                onSubmit={onSubmit}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl space-y-6"
            >
                <input type="hidden" name="subject" value="New Portfolio Message from Sathiyaseelan S" />
                <input type="hidden" name="from_name" value="Sathiyaseelan Portfolio" />
                <input type="hidden" name="replyto" value="sathiyaseelan7082@gmail.com" />

                <div>
                    <label className="block text-sm font-medium text-white/40 mb-2 uppercase tracking-widest">Identification</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-cyan-500/50 outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white/40 mb-2 uppercase tracking-widest">Return Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-cyan-500/50 outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white/40 mb-2 uppercase tracking-widest">Transmission</label>
                    <textarea
                        rows="4"
                        name="message"
                        required
                        placeholder="Beam your message..."
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-cyan-500/50 outline-none transition-colors resize-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Transmitting..." : "Send Transmission"} <Send size={18} />
                </button>

                {result && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-center font-medium ${result.includes("Success") ? "text-green-400" : "text-cyan-400"}`}
                    >
                        {result}
                    </motion.div>
                )}
            </motion.form>
        </div>
    );
}

import profilePic from "../assets/download.webp"
import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"
import resumeFile from "../assets/Fahad Aslam (Software Engineer).pdf";

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}
const childVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}


const Hero = () => {
    return (
        <div className="pb-4 lg:mb-24">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img src={profilePic}
                            alt="Fahad Aslam"
                            className="border border-stone-900 rounded-3xl"
                            width={500}
                            height={650}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }} />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start mt-10">
                        <motion.h3
                            variants={childVariants}
                            className="pb-2 text-2xl tracking-tighter lg:text-6xl"> Rao Fahad Aslam</motion.h3>
                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl
                 tracking-tighter text-transparent">Full Stack Developer</motion.span>
                        <motion.p
                            variants={childVariants}
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"> {HERO_CONTENT}</motion.p>
                        <motion.div
                            variants={childVariants}
                            className="flex gap-4"
                            >
                            <motion.a
                                href={resumeFile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-full p-4 text-sm text-stone-800"
                            >
                                View Resume
                            </motion.a>
                            <motion.a
                                href={resumeFile} 
                                download="Fahad_Aslam_Software_Engineer.pdf" 
                                className="bg-white rounded-full p-4 text-sm text-stone-800"
                            >
                                Download Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
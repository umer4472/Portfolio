import { PiAngularLogo } from "react-icons/pi"
import { RiBootstrapLine, RiCss3Line, RiHtml5Line, RiJavascriptLine, RiNodejsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb, SiTypescript } from "react-icons/si"
import { TbSql } from "react-icons/tb"
import { motion } from "framer-motion"
import { BsUbuntu } from "react-icons/bs"
import { FaAws } from "react-icons/fa6"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"> Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transistion={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                 
                 <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}>
                    <PiAngularLogo className="text-7xl text-custom-purple-600" />
                </motion.div> 

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(8)}
                    className="p-4">
                    <RiCss3Line className="text-7xl text-red-500" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(8)}
                    className="p-4">
                    <RiHtml5Line className="text-7xl text-red-500" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(8)}
                    className="p-4">
                    <RiJavascriptLine className="text-7xl text-red-500" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(8)}
                    className="p-4">
                    <SiTypescript className="text-7xl text-red-500" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}>
                    <RiTailwindCssFill className="text-7xl text-sky-400" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className="p-4">
                    <RiBootstrapLine className="text-7xl  text-blue-600" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}
                    className="p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className="p-4">
                    <RiNodejsLine className="text-7xl text-green-500" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(7)}
                    className="p-4">
                    <TbSql className="text-7xl text-yellow-500" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(8)}
                    className="p-4">
                    <BsUbuntu className="text-7xl text-red-500" />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(8)}
                    className="p-4">
                    <FaAws className="text-7xl text-red-500" />
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies
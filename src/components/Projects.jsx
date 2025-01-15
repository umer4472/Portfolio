import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
    };

    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">
                Projects
            </motion.h2>
            <div className="space-y-16">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center gap-8"
                    >
                        {/* Project Images */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            {project.images.length > 1 ? (
                                <Slider {...settings}>
                                    {project.images.map((image, idx) => (
                                        <div key={idx}>
                                            <img
                                                src={image}
                                                alt={`Screenshot ${idx}`}
                                                className="rounded shadow-lg w-full h-64 object-cover"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="rounded shadow-lg w-full h-64 object-cover"
                                />
                            )}
                        </motion.div>

                        {/* Project Details */}
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h3 className="mb-2 font-semibold text-2xl">
                                {project.title}
                            </h3>
                            <p className="mb-4 text-stone-400">
                                {project.description}
                            </p>

                            {/* Technologies Section */}
                            <div className="grid grid-cols-3 gap-4">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="rounded bg-stone-900 py-2 px-3 text-center text-sm font-medium text-stone-300 shadow-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

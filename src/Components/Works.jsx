import React from 'react'
import {motion} from 'framer-motion'
import projPic1 from '../assets/updateRec.jpg'
import projPic2 from '../assets/updateRes.jpg'
import projPic3 from '../assets/IMG_1281.PNG'
import projPic4 from '../assets/IMG_1279.PNG'
import projPic5 from '../assets/IMG_1225.JPG'
import projPic6 from '../assets/weather.jpg'

const Works = () => {

    const textVariant = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    }
    const boxVariant1 = {
        initial: {
            opacity: 0,
            x: "-100%"
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 1,
                delay: 0.5
            }
        }
    }
    const boxVariant2 = {
        initial: {
            opacity: 0,
            x: "100%"
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 1.1,
                delay: 1
            }
        }
    }
    const boxVariant3 = {
        initial: {
            opacity: 0,
            x: "-100%"
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 1.3,
                delay: 1.5
            }
        }
    }
    const boxVariant4 = {
        initial: {
            opacity: 0,
            x: "100%"
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 1.5,
                delay: 2
            }
        }
    }
    const boxVariant5 = {
        initial: {
            opacity: 0,
            x: "-100%"
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 1.5,
                delay: 2.5
            }
        }
    }
    const boxVariant6 = {
        initial: {
            opacity: 0,
            x: "100%"
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 1.5,
                delay: 3
            }
        }
    }
  return (
    <div id="work" className="mt-[20px] w-[90vw] md:w-[70vw]">
        <motion.div 
        variants = {textVariant}
        initial = "initial"
        whileInView = "animate"
        viewport = {{
            once: true
        }}
        className="flex flex-col items-start justify-center h-max py-[10px]">
            <h1 className="text-[2.4em] text-white">My <span>Projects</span></h1>
            <p className=" text-gray-500 texxt-[1.5em]">These are my latest projects.</p>
        </motion.div>
        <div className="flex flex-col gap-[20px] justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-[90vw] md:w-[70vw]">
                <motion.div 
                variants = {boxVariant1}
                initial = "initial"
                whileInView = "animate"
                viewport = {{
                    once: true
                }}
                className=" overflow-hidden md:col-span-1 h-[350px] rounded-lg">
                    <a href="https://u22099.github.io/RecipeApp/">
                        <img src={projPic1} alt="" className="rounded-lg img transition transform duration-500 ease-in-out hover:scale-105"/>
                        <div className="relative top-[-30%] w-[200px] bg-black rounded-xl p-[10px]">
                            <h1 className="primary-color text-bold">Recipe Application</h1>
                            <p className="text-white text-semibold">Javascript-React-Tailwindcss</p>
                        </div>
                    </a>
                </motion.div>
                <motion.div 
                variants = {boxVariant2}
                initial = "initial"
                whileInView = "animate"
                viewport = {{
                    once: true
                }}
                className=" overflow-hidden md:col-span-2 h-[350px] rounded-lg">
                    <a href="https://u22099.github.io/Sage-Salt/">
                        <img src={projPic2} alt="" className="rounded-lg img transition transform duration-500 ease-in-out hover:scale-105"/>
                        <div className="relative top-[-30%] w-[200px] bg-black rounded-xl p-[10px]">
                            <h1 className="primary-color text-bold">Restaurant Website</h1>
                            <p className="text-white text-semibold">javascript-React-Tailwindcss</p>
                        </div>
                    </a>
                </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-[90vw] md:w-[70vw]">
                <motion.div 
                variants = {boxVariant3}
                initial = "initial"
                whileInView = "animate"
                viewport = {{
                    once: true
                }}
                className=" overflow-hidden md:col-span-2 h-[350px] rounded-lg">
                    <a href="https://u22099.github.io/HTML-CSS-Projects/NetflixClone">
                        <img src={projPic3} alt="" className="rounded-lg img transition transform duration-500 ease-in-out hover:scale-105"/>
                        <div className="relative top-[-30%] w-[200px] bg-black rounded-xl p-[10px]">
                            <h1 className="primary-color text-bold">Netflix Clone</h1>
                            <p className="text-white text-semibold">HTML-CSS</p>
                        </div>
                    </a>
                </motion.div>
                <motion.div 
                variants = {boxVariant4}
                initial = "initial"
                whileInView = "animate"
                viewport = {{
                    once: true
                }}
                className=" overflow-hidden md:col-span-1 h-[350px] rounded-lg">
                    <a href="https://u22099.github.io/Javascript-Projects/GamesAndUtilities/">
                        <img src={projPic4} alt="" className="rounded-lg img transition transform duration-500 ease-in-out hover:scale-105"/>
                        <div className="relative top-[-30%] w-[200px] bg-black rounded-xl p-[10px]">
                            <h1 className="primary-color text-bold">Games And Utilities Application</h1>
                            <p className="text-white text-semibold">HTML-CSS-JAVASCRIPT</p>
                        </div>
                    </a>
                </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-[90vw] md:w-[70vw]">
                <motion.div 
                variants = {boxVariant5}
                initial = "initial"
                whileInView = "animate"
                viewport = {{
                    once: true
                }}
                className=" overflow-hidden md:col-span-1 h-[350px] rounded-lg">
                    <a href="https://u22099.github.io/Javascript-Projects/BrainTypeCalculator">
                        <img src={projPic5} alt="" className="rounded-lg img transition transform duration-500 ease-in-out hover:scale-105"/>
                        <div className="relative top-[-30%] w-[200px] bg-black rounded-xl p-[10px]">
                            <h1 className="primary-color text-bold">Brain Type Calculator</h1>
                            <p className="text-white text-semibold">HTML-CSS-JAVASCRIPT</p>
                        </div>
                    </a>
                </motion.div>
                <motion.div 
                variants = {boxVariant4}
                initial = "initial"
                whileInView = "animate"
                viewport = {{
                    once: true
                }}
                className=" overflow-hidden md:col-span-2 h-[350px] rounded-lg">
                    <a href="https://u22099.github.io/Javascript-Projects/WeatherApp/">
                        <img src={projPic6} alt="" className="rounded-lg img transition transform duration-500 ease-in-out hover:scale-105"/>
                        <div className="relative top-[-30%] w-[200px] bg-black rounded-xl p-[10px]">
                            <h1 className="primary-color text-bold">Weather App</h1>
                            <p className="text-white text-semibold">HTML-CSS-JAVASCRIPT[API]</p>
                        </div>
                    </a>
                </motion.div>
            </div>
        </div>
    </div>
    )
}

export default Works
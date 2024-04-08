import React from 'react'
import {motion} from 'framer-motion'
import {FaHtml5, FaCss3, FaReact} from 'react-icons/fa6'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss} from 'react-icons/si'

const Exp = () => {
    const boxLeftVariant = {
        initial: {
            opacity: 0,
            x: "-100%"
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 2,
                delay: 0.5
            }
        }
    }
    const boxRightVariant = {
        initial: {
            opacity: 0,
            x: "100%"
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 2,
                delay: 1
            }
        }
    }
    const lineVariant = {
        initial: {
            opacity: 0
        },
        animate : {
            opacity: 1,
            transition : {
                duration: 1,
            }
        }
    }
  return (
    <div id="exp" className="flex justify-center items-center bg-black w-[100vw] py-[40px] mt-[40px]">
        <div className="w-max flex flex-col items-center justify-center text-white">
            <motion.div 
            variants={boxLeftVariant}
            initial="initial"
            whileInView="animate"
            viewport = {{
                once: true
            }}
            className="flex flex-col justify-center items-center text-center bg-gray-900 shadow-[inset_10px_10px_70px_0px_rgba(0,0,0,0.8)] opacity-[0.8] rounded w-[300px] md:w-[500px] h-[120px] md:h-[150px]] p-[20px]">
                <h1 className="flex justify-start items-center w-[100%] text-[1.5em] md:text-[2.5em]"><FaHtml5 className="text-[#6b2b72] text-[1.2em] md:text-[2em] mr-[10px]"/>HTML</h1>
                <div className="flex justify-start items-center w-[90%] bg-black rounded-lg h-[15px] md:h-[20px]">
                    <motion.div 
                    initial={{
                        width: "0%"
                    }}
                    whileInView={{
                        width: "95%"
                    }}
                    transition={{
                        duration: 3,
                        delay: 0.5
                    }}
                    className="bg-primary-color rounded-lg h-[15px] md:h-[20px] transition ease-in-out">
                    </motion.div>
                </div>
            </motion.div>
            <motion.div 
            variants={lineVariant}
            initial="initial"
            whileInView="animate"
            className="w-[3px] h-[75px] bg-white"></motion.div>
            <motion.div 
            variants={boxRightVariant}
            initial="initial"
            whileInView="animate"
            viewport = {{
                once: true
            }}
            className="flex flex-col justify-center bg-gray-900 shadow-[inset_10px_10px_70px_0px_rgba(0,0,0,0.7)] opacity-[0.8] rounded items-center text-center w-[300px] md:w-[500px] h-[120px] md:h-[150px] p-[20px]">
                <h1 className="flex justify-start items-center w-[100%] text-[1.5em] md:text-[2.5em]"><FaCss3 className="text-[#6b2b72] text-[1.2em] md:text-[2em] mr-[10px]"/>CSS</h1>
                <div className="flex justify-start items-center w-[90%] bg-black rounded-lg h-[15px] md:h-[20px]">
                    <motion.div 
                    initial={{
                        width: "0%"
                    }}
                    whileInView={{
                        width: "95%"
                    }}
                    transition={{
                        duration: 3,
                        delay: 1
                    }}
                    className="bg-primary-color rounded-lg h-[15px] md:h-[20px] transition ease-in-out">
                    </motion.div>
                </div>
            </motion.div>
            <motion.div 
            variants={lineVariant}
            initial="initial"
            whileInView="animate"
            className="w-[3px] h-[75px] bg-white"></motion.div>
            <motion.div 
            variants={boxLeftVariant}
            initial="initial"
            whileInView="animate"
            viewport = {{
                once: true
            }}
            className="flex flex-col justify-center bg-gray-900 shadow-[inset_10px_10px_70px_0px_rgba(0,0,0,0.7)] opacity-[0.8] rounded items-center text-center w-[300px] md:w-[500px] h-[120px] md:h-[150px] p-[20px]">
                <h1 className="flex justify-start items-center w-[100%] text-[1.5em] md:text-[2.5em]"><SiTailwindcss className="text-[#6b2b72] text-[1.2em] md:text-[2em] mr-[10px]"/>TAILWIND-CSS</h1>
                <div className="flex justify-start items-center w-[90%] bg-black rounded-lg h-[15px] md:h-[20px]">
                    <motion.div 
                    initial={{
                        width: "0%"
                    }}
                    whileInView={{
                        width: "80%"
                    }}
                    transition={{
                        duration: 3,
                        delay: 1.5
                    }}
                    className="bg-primary-color rounded-lg h-[15px] md:h-[20px] transition ease-in-out">
                    </motion.div>
                </div>
            </motion.div>
            <motion.div 
            variants={lineVariant}
            initial="initial"
            whileInView="animate"
            className="w-[3px] h-[75px] bg-white"></motion.div>
            <motion.div 
            variants={boxRightVariant}
            initial="initial"
            whileInView="animate"
            viewport = {{
                once: true
            }}
            className="flex flex-col justify-center bg-gray-900 shadow-[inset_10px_10px_70px_0px_rgba(0,0,0,0.7)] opacity-[0.8] rounded items-center text-center w-[300px] md:w-[500px] h-[120px] md:h-[150px] p-[20px]">
                <h1 className="flex justify-start items-center w-[100%] text-[1.5em] md:text-[2.5em]"><IoLogoJavascript className="text-[#6b2b72] text-[1.2em] md:text-[2em] mr-[10px]" />JAVASCRIPT</h1>
                <div className="flex justify-start items-center w-[90%] bg-black rounded-lg h-[15px] md:h-[20px]">
                    <motion.div 
                    initial={{
                        width: "0%"
                    }}
                    whileInView={{
                        width: "88%"
                    }}
                    transition={{
                        duration: 3,
                        delay: 0.5
                    }}
                    className="bg-primary-color rounded-lg h-[15px] md:h-[20px] transition ease-in-out">
                    </motion.div>
                </div>
            </motion.div>
            <motion.div 
            variants={lineVariant}
            initial="initial"
            whileInView="animate"
            className="w-[3px] h-[75px] bg-white"></motion.div>
            <motion.div 
            variants={boxLeftVariant}
            initial="initial"
            whileInView="animate"
            viewport = {{
                once: true
            }}
            className="flex flex-col justify-center bg-gray-900 shadow-[inset_10px_10px_70px_0px_rgba(0,0,0,0.7)] opacity-[0.8] rounded items-center text-center w-[300px] md:w-[500px] h-[120px] md:h-[150px] p-[20px]">
                <h1 className="flex justify-start items-center w-[100%] text-[1.5em] md:text-[2.5em]"><FaReact className="text-[#6b2b72] text-[1.2em] md:text-[2em] mr-[10px]"/>REACT</h1>
                <div className="flex justify-start items-center w-[90%] bg-black rounded-lg h-[15px] md:h-[20px]">
                    <motion.div 
                    initial={{
                        width: "0%"
                    }}
                    whileInView={{
                        width: "65%"
                    }}
                    transition={{
                        duration: 3,
                        delay: 2
                    }}
                    className="bg-primary-color rounded-lg h-[15px] md:h-[20px] transition ease-in-out">
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Exp
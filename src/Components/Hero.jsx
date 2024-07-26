import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaGithub, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {motion} from 'framer-motion'
import pic from '../assets/IMG_1272.JPG'

const Hero = () => {
    const textVariant = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 1,
            }
        }
    }
    const imageVariant = {
        initial: {
            opacity: 0,
            x: "100%"
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                type: "tween",
                duration: 2,
                delay: 2
            }
        }
    }

    return (
        <div id="home" className="md:w-[80%]  flex flex-col-reverse md:justify-between md:flex-row mt-[40px]">
            <motion.div 
            variants={textVariant}
            initial="initial"
            whileInView="animate"
            className="flex flex-col justify-end mt-[20px] gap-[2px] ml-[8px] sm:ml-[0px]">
                <h1 className="text-white text-[2em] md:text-[3.2em] text-start">Hi! I am Daniel</h1>
                <h1 className="text-[2em] sm:text-[2.8em] md:text-[3em] lg:text-[4.3em] w-max md:max-w-[60vw]">
                    <TypeAnimation
                        sequence={[
                            "Fullstack Dev",
                            1000,
                            "Graphics Designer",
                            1000,
                            "UI/UX Designer",
                            1000,
                            "Pianist",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-gray-500 text-[1.8em] md:text-[2.5em] text-start">with a 2+ years experience</p>
                <div className="flex w-max gap-[20px] text-[3em] md:text-[4em] text-purple-700">
                    <a href="https://github.com/u22099"><FaGithub/></a>
                    <a href="https://www.facebook.com/profile.php?id=100075353746324"><FaFacebook/></a>
                    <a href="https://instagram.com"><FaInstagram/></a>
                    <a href="https://youtube.com"><FaYoutube/></a>
                </div>
                <a className="flex justify-center items-center text-[1.5em] w-max h-[60px] px-[40px] ml-[10px] mt-[10px] rounded-2xl bg-primary-color text-white shadow-purple-900 shadow-lg active:shadow-none" href="#work">View Works
                </a>
            </motion.div>
            <motion.div 
            variants={imageVariant}
            initial="initial"
            whileInView="animate"
            viewport = {{
                once: true
            }}
            className="flex justify-center md:justify-right items-center md:w-[400px] w-[80vw] mx-auto">
                <div className=" w-[80vw] mx-auto md:ml-[30px] md:w-[300px] overflow-hidden h-[400px] rounded-lg text-center">
                    <img src={pic} alt="  " className="rounded-lg"/>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero

import {motion} from 'framer-motion'
import pic from '../assets/IMG_1265.JPG'

const About = () => {
    const animVariantsImage = {
        initial: {
            opacity: 0,
            x: "-100%"
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                type: "tween",
                duration: 2,
                delay: 0.5
            }
        }
    }
    const animVariantsText = {
        initial: {
            opacity: 0,
            x: "100%"
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                type: "tween",
                delay: 1,
                when: "beforeChildren"
            }
        }
    }
    const animVariantsBox = {
        initial: {
            opacity: 0,
            x: 50,
            y: 70
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "tween",
                staggerChildren: 1,
            }
        }
    }
    return(
        <div id="about" className="flex  justify-center items-center w-[100vw] bg-black text-white mt-[30px] py-[40px]">
            <div className="flex items-center justify-between w-[90vw] md:w-[70vw] mx-auto flex-col-reverse md:flex-row">
                <motion.div
                variants={animVariantsImage}
                initial="initial"
                whileInView="animate"
                transition="transition"
                viewport={{
                    once: true,
                }}
                 className="flex justify-center items-center mx-[auto]">
                    <div className="w-[90vw] md:w-[430px]  h-[400px] rounded-lg text-center mt-[40px] md:mt-[0px] overflow-hidden">
                        <img src={pic} alt="  " className="rounded-lg img"/>
                    </div>
                </motion.div>
                <motion.div 
                variants={animVariantsText}
                initial="initial"
                whileInView="animate"
                transition="transition"
                className="md:p-[20px] flex w-[90vw] justify-center items-center flex-col">
                    <h1 className="flex w-[100%] justify-start items-center text-[2.8em] md:text-[4em]">About <span>Me</span></h1>
                    <p className="flex justify-end items-center text-justify text-[1.1em] md:text-[1.2em] ml-[8px] md:w-[40vw] md:ml-[30px] max-w-[90vw]"> I begin my programming journey at the age of 14 and since then i have been passionate about my work creating responsive and engaging website with high speed making sure to satisfy my cutomers and employers with my multiplatform support and visual appealing website </p>
                    <motion.div 
                    variants={animVariantsBox}
                    className="md:grid md:grid-cols-2 flex lg:flex justify-start lg:justify-start items-center  mt-[45px] w-[100%] px-[20px] md:w-max">
                        <div className="flex justify-center flex-col bg-gray-900 p-[5px] rounded-md m-[5px]">
                            <h1 className="text-[2em] md:text-[2.2em] text-start m-[0px]">11<span className="m-[0px]">+</span></h1>
                            <span className="primary-color block text-[1em] md:text-[1.3em]">Projects</span>
                        </div>
                        <div className="flex flex-col justify-center bg-gray-900 p-[5px] mx-[5px] rounded-md">
                            <h1 className="text-[2em] md:text-[2.2em] text-start m-[0px]">2<span className="m-[0px]">+</span></h1>
                            <span className="primary-color block text-[1em] md:text-[1.3em]">years experience</span>
                        </div>
                        <div className="flex flex-col justify-center bg-gray-900 p-[5px] mx-[5px] rounded-md">
                            <h1 className="text-[2em] md:text-[2.2em] text-start m-[0px]">30<span className="m-[0px]">+</span></h1>
                            <span className="primary-color block text-[1em] md:text-[1.3em]">happy customers</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
export default About
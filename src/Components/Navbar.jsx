import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {motion} from 'framer-motion'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const nameVariants = {
        initial: {
            opacity: 0,
            x: -80
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            duration: 1
        }
    }
    const listVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        transition: {
            duration: 1,
            delay: 0.5
        }
    }
    let changeIcon = ()=>{
        setNav(!nav);
    }
    return (
        <div>
            <div className="h-[50px] w-[90vw] md:w-[80vw] flex justify-between mt-[20px]">
                <motion.h1 
                variants={nameVariants}
                initial="initial"
                whileInView="animate"
                className="primary-color flex items-center pl-[3px] text-[30px] cursor-pointer"><a href="#about">DANIEL</a>
                </motion.h1>
                <motion.ul 
                variants={listVariants}
                initial="initial"
                whileInView="animate"
                className="text-gray-500 hidden md:flex items-center gap-[25px] text-[1.1em] cursor-pointer">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#exp">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </motion.ul>
                <div className="flex justify-end items-center md:hidden mr-[30px] text-[30px] text-gray-500 cursor-pointer" onClick={changeIcon}>
                    {nav ? <AiOutlineClose/> : <AiOutlineMenu/>}
                </div>
                <div className={nav ? "fixed z-[3] top-0 left-0 bg-black h-full w-[60%] border-r border-gray-900 text-gray-500 transition duration-500 ease-in-out text-start":"fixed left-[-100%]"}>
                    <motion.h1 
                    variants={nameVariants}
                    initial="initial"
                    whileInView="animate"
                    className="primary-color text-3xl m-4">DANIEL
                    </motion.h1>
                    <motion.ul 
                    variants={listVariants}
                    initial="initial"
                    whileInView="animate"
                    className="ml-[10px] gap-[20px] p-[15px] text-xl">
                        <li><a href="#home" onClick={changeIcon}>Home</a></li>
                        <li><a href="#about" onClick={changeIcon}>About</a></li>
                        <li><a href="#work" onClick={changeIcon}>Work</a></li>
                        <li><a href="#exp" onClick={changeIcon}>Experience</a></li>
                        <li><a href="#contact" onClick={changeIcon}>Contact</a></li>
                    </motion.ul>
                </div>
            </div>
            
        </div>
    );
}

export default Navbar
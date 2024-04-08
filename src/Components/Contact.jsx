import React from 'react'
import {MdOutlineAlternateEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:w-[70vw] text-white py-[40px]">
        <div className="bg-gray-900 p-[20px] w-[300px] md:w-[400px] flex flex-col justify-center">
            <h1 className="text-[2em] flex justify-start">Contact <span> Me</span></h1>
            <p className="text-gray-500">Let's work together, reach out to on my email below or use the form</p>
            <a className=" px-[20px] md:px-[40px] ml-[10px] mt-[10px] rounded-2xl bg-primary-color text-white shadow-purple-900 shadow-lg active:shadow-none flex justify-center items-center text-[1.2em]" href="mailto:nifemiolaniyi4@gmail.com"><MdOutlineAlternateEmail className="text-[1.2em] mr-[10px]"/> Daniel WebDev</a>
        </div>
        <form className="bg-gray-900 p-[20px] w-[300px] md:w-[350px] flex flex-col justify-center gap-[15px]" action="https://formsubmit.co/7cb8eae1ddf4e71a02dbf20c7eecde43" method="POST">
            <input type="hidden" name='_next' value="https://u22099.github.io/React-Projects/"/>
            <input type="hidden" name="_captcha" value="false"/>
            <input className="bg-gray-800 shadow-[inset_10px_10px_70px_0px_rgba(0,0,0,0.8)] w-[260px] md:w-[300px] h-[60px] text-white rounded-lg p-[10px]" name="Name" type="text" placeholder='Name' required/>
            <input className="bg-gray-800 shadow-[inset_10px_10px_70px_0px_rgba(0,0,0,0.8)] w-260px] md:w-[300px] h-[60px] text-white rounded-lg p-[10px]" type="mail" name="Email Address" placeholder='Email' required/>
            <textarea className="bg-gray-800 shadow-[inset_10px_10px_70px_0px_rgba(0,0,0,0.8)]  text-white rounded-lg p-[10px] resize-none" name="Message" placeholder='Message...' id="" cols="30" rows="10" required></textarea>
            <button className="w-[200px] h-[60px] px-[40px] ml-[10px] mt-[10px] rounded-2xl bg-primary-color text-white shadow-purple-900 shadow-lg active:shadow-none"  type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Contact
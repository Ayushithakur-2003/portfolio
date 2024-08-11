import React from 'react'
import ayushi from './Ayushiii.png'

export const Intro = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row gap-16'>
        <h6 className='font-medium text-7xl text-justify lg:text-left'>Hello, I'm <br/><span className='text-purple-700'> Ayushi Thakur!</span> <br/>  <p className='text-xl font-normal text-gray-300'>A Fresher in the tech industry seeking an entry level position or internship to enhance and explore my technical knowledge. I am currently in the third year of my bachelor’s degree in computer application and want to gain some work experience. I am absolutely passionate and a fast learner. I tend to stick to a task until I finish it and I don't hesitate taking help of others and learning from them and improving my skills.</p>
        <span><a href='#contact'><button className='w-fit p-4 bg-purple-700 text-lg hover:bg-purple-900'>Get in touch</button></a></span>
        </h6> 
        <img className='rounded-tl-3xl rounded-br-3xl w-96 h-72 border-b-8 border-r-8 border-b-purple-700 border-r-purple-700' src={ayushi} alt='profile picture'></img>
    </div>
  )
}

export default Intro;
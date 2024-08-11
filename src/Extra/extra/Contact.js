import React from 'react'

export const Contact = () => {

  const heartforyou =()=>{
    <div className='animate-ping'>
    <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/pink_webpict35_1484337168-1.png" width={300}/>
    </div>
  }

  return (
    <div className='flex flex-col gap-16 items-center lg:flex-row'>
    <div id='contact' className='flex flex-col text-left mt-14'>
    <div className='mb-8'>
    <h6 className='font-medium text-7xl lg:text-9xl text-left'>Get in touch.</h6>
    <p className='font-normal text-xl lg:text-2xl text-left text-gray-300'>If you would like to contact me,
     you can just ping me on LinkedIn or <br/> Email me. 
     I would be more than happy to talk.</p>
     </div>
    <h6 className='font-medium text-xl lg:text-5xl text-left'><a href='mailto:thakurayushi696@gmail.com'>thakurayushi696@gmail.com</a> </h6>
    <ul className='flex gap-4 mt-4'>
      <li><a href="https://www.linkedin.com/in/ayushithakurhere123/"><img className='rounded-full' src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-um6pcf27.png" width={35}/></a></li>
      <li><a href="https://github.com/Ayushithakur-2003"><img className='rounded-full' src="https://static-00.iconduck.com/assets.00/github-icon-512x512-mk2oxk8c.png" width={35}/></a></li>
    </ul>
    </div>
    <div onClick={heartforyou} className='transform transition duration-500 animate-bounce hover:animate-ping'>
    <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/pink_webpict35_1484337168-1.png" width={300}/>
    </div>
    </div>
  )
}

export default Contact;
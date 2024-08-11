import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Virtualmuseum from './VM.png'
import portfolio from './Myportfolio.png'
import TOFD from './TOFDE.png'
import Analysisapi from './FA.png'
import Datavisualizer from './DV.png'
import wireframe from './wireframe2.png'
import design from './wireframe1.png'
import dashboard from './PowerBI.png'


export const Index = () => {
  AOS.init();
  return (
    <div>
        <h6 className='font-medium text-3xl text-center mt-16'>Project categories</h6>
        <div>
            <ul className='flex flex-col lg:flex-row items-center justify-center gap-12 mt-8'>
                <li className='font-normal text-2xl transform transition duration-500 hover:text-purple-400 hover:scale-125 p-4'><a href='#FTP'>Frontend <span className='text-purple-700 text-3xl font-extrabold'>↓</span></a></li>
                <li className='font-normal text-2xl transform transition duration-500 hover:text-purple-400 hover:scale-125'><a href='#design'>UI/UX <span className='text-purple-700 text-3xl font-extrabold'>↓</span></a></li>
                <li className='font-normal text-2xl transform transition duration-500 hover:text-purple-400 hover:scale-125'><a href='#FSW'>Full stack <span className='text-purple-700 text-3xl font-extrabold'>↓</span></a></li>
                <li className='font-normal text-2xl transform transition duration-500 hover:text-purple-400 hover:scale-125'><a href='#api'>REST API<span className='text-purple-700 text-3xl font-extrabold'>↓</span></a></li>
                <li className='font-normal text-2xl transform transition duration-500 hover:text-purple-400 hover:scale-125'><a href='#data'>Data analytics and interpretation <span className='text-purple-700 text-3xl font-extrabold'>↓</span></a></li>
            </ul>
        </div>
        <h6 className='font-medium text-8xl text-left mt-32 mb-8'>My Projects</h6>
        <hr className=' border-2 border-purple-700'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 place-items-center gap-16'>

        <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col'>
            <div className='flex flex-col lg:flex-row gap-16'>
            <div>
            <a href='https://master.d1yav8zpiaglpx.amplifyapp.com/charts/' target='blank'><img id='data' className='transform transition duration-500 hover:scale-90 mt-8' src={Datavisualizer} width={800} /></a>
            
            <div className='flex items-center justify-center gap-4'>
            <p className='text-sm lg:text-xl font-medium text-gray-200'>BI data visualizer  <span className='text-purple-400'>|</span></p>
            <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width={20}/>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width={20}/>
            <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" width={20}/>
            
            {/* <p className='text-base text-right'>A data visualizer using Mongo DB charts for the data processed by feedback analysis API</p> */}
            </div>
            </div>
            <div>
            <a href="https://app.powerbi.com/links/ilvlGMSL0T?ctid=ac214be4-d213-4968-9867-b72c25a8aab3&pbi_source=linkShare&bookmarkGuid=400552c9-7ecb-45df-9594-d1168e84b903" target='blank'><img className='transform transition duration-500 hover:scale-90 mt-8' src={dashboard} width={800} height={600}/></a>
            <div className='flex items-center justify-center gap-4'>
            <p className='text-sm lg:text-xl font-medium text-gray-200'>Power BI dashboard on online retail data  <span className='text-purple-400'>|</span></p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/630px-New_Power_BI_Logo.svg.png" width={20}/>
            </div>
            </div>
            </div>
        </div>


            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col'>
            <div className='flex flex-col lg:flex-row gap-16'>
            <div>
            <a href="https://main.d3ik08pxl6af54.amplifyapp.com/" target='blank'><img id='FTP' className='transform transition duration-500 hover:scale-90 mt-8' src={Virtualmuseum} width={800} /></a>
            <div className='flex items-center justify-center gap-4'>
            <p className='text-sm lg:text-xl font-medium text-gray-200'>Virtual Museum on space exploration  <span className='text-purple-400'>|</span></p>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width={20}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" width={20} />
            <img src="https://api.nasa.gov/assets/footer/img/favicon-192.png" width={20}/>
            </div>
            </div>
            <div>
            <a href="https://ayushi-thakur-portfolio.netlify.app/" target='blank'><img className='transform transition duration-500 hover:scale-90 mt-8' src={portfolio} width={800}/></a>
            <div className='flex items-center justify-center gap-4'>
            <p className='v font-medium text-gray-200'>My portfolio  <span className='text-purple-400'>|</span></p>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width={20}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" width={20} />
            </div>
            </div>
            </div>
            </div>


            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col'>
            <a href="https://ayushithakur-2003.github.io/" target='blank'><img id='FSW' className='transform transition duration-500 hover:scale-90 mt-8' src={TOFD} width={800}/></a>
            <div className='flex items-center justify-center gap-4'>
            <p className='text-sm lg:text-xl font-medium text-gray-200'>A serverless web application to post & share stuff  <span className='text-purple-400'>|</span></p>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width={20}/>
            <img className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxn-0Kp4Qgppjz51V6gjqMpW0OeBP3mmfwA&s" width={30}/>
            <img src="https://cdn.worldvectorlogo.com/logos/aws-api-gateway.svg" width={20}/>
            <img src='https://cdn.worldvectorlogo.com/logos/aws-lambda-1.svg' width={20}/>
            <img src='https://static-00.iconduck.com/assets.00/aws-dynamodb-icon-1817x2048-1gi0rqbm.png' width={20}/>
            
            </div>
            </div>
            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col'>
            <a href="https://ay-us-hi-apitest2.hf.space/docs" target='blank'><img id='api' className='transform transition duration-500 hover:scale-90 mt-8' src={Analysisapi} width={800}/></a>
            <div className='flex items-center justify-center gap-4'>
            <p className='text-sm lg:text-xl font-medium text-gray-200'>Feedback Analysis API for general classification<span className='text-purple-400'>|</span></p>
            <img src="https://seeklogo.com/images/F/fastapi-logo-541BAA112F-seeklogo.com.png" width={20}/>
            <img src="https://chunte-hfba.static.hf.space/images/Brand%20Logos/Hugging%20Face.png" width={20}/>
            <img src="https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png" width={20}/>
            <img src="https://seeklogo.com/images/A/aws-amplify-logo-D68DDB5AB1-seeklogo.com.png" width={20}/>
            </div>
            </div>

            <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='flex flex-col'>
            <div className='flex flex-col lg:flex-row gap-16'>
            <div>
            <a href="https://www.figma.com/proto/evrBvLFDMjXfvwoenpxJgR/sattv-life-wireframe?node-id=1-3&t=98aWgUxX45pzzq83-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1" target='blank'><img id='design' className='transform transition duration-500 hover:scale-90 mt-8' src={wireframe} width={800} /></a>
            <div className='flex items-center justify-center gap-4'>
            <p className='text-sm lg:text-xl font-medium text-gray-200'>Wireframe designs for a health and wellness website  <span className='text-purple-400'>|</span></p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" width={20}/>
            </div>
            </div>
            <div>
            <a href="https://www.figma.com/proto/Hhd0XmLf2Blffq6zq7bGSQ/demo_homepage?node-id=1-2&t=udomTqB8jWkXOd6L-1&scaling=contain&content-scaling=responsive&page-id=0%3A1" target='blank'><img className='transform transition duration-500 hover:scale-90 mt-8' src={design} width={800} height={600}/></a>
            <div className='flex items-center justify-center gap-4'>
            <p className='text-sm lg:text-xl font-medium text-gray-200'>Hero page for a home decor website  <span className='text-purple-400'>|</span></p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" width={20}/>
            </div>
            </div>
            
            </div>
            </div>
        </div>
    </div>
  )
}

export default Index;
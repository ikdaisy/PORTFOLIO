
import './App.css'
import './styles.scss'
import Type from './Type.jsx'
import { Link } from 'react-router-dom'

function App() {
 

  return (
    <>
    <div className='main'> 
        <div className="navbar">
        <nav>
            <ul className='text-xl  md:text-2xl lg:text-2xl '>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>

   {/* --------------------------------------------------------------------------------- */}
      <div id='home' className='flex items-center    w-full h-screen   p-5  '>
        <div className='font-bold p-8 '>
        <h1 className='font-mono text-3xl md:text-5xl sm:text-4xl lg:text-7xl'> HI
        <span className="wave " role="img" aria-labelledby="wave">
                  👋🏻
                </span>
          , IM SAFA KALLIANTHODI </h1>
        <h1 className='  text-xl md:text-4xl sm:text-3xl lg:text-7xl  bg-gradient-to-r from-orange-500 to-white
      bg-clip-text text-transparent '> 
        <Type />
        </h1>
        </div>
        <div className=' w-1/2'>
          <img  className="w-96 md:w-96 sm:w-96 lg:w-96  ring-orange-500 border p-2   rounded-xl" src="./giphy.webp" alt="" />
        </div>
      </div>
      {/* ----------------------- ABOUT ME STARTS HERE----------------- */}
      <div className="flex justify-center gap-12" >
          <div className='bg-orange-500 rounded-full text-sm text-orange-500 animate-bounce'>01</div>
          <div className='bg-orange-500 rounded-full text-sm text-orange-500 animate-bounce'>03</div>
          <div className='bg-orange-500 rounded-full text-sm text-orange-500 animate-bounce'>02</div>
    </div>
    <div className='h-full' id='about'>
      <h2 className='text-5xl  text-center font-mono mt-12 font-bold    text-6xl font-bold tracking-widest '>ABOUT ME</h2>
     <div className='grid  w-30 h-30 lg:grid-cols-3  md:grid-cols-3    sm:grid-cols-2 sm:w-70 sm:w-30   items-center   gap-8 p-12 '>
     <p className=' h-60  sm:w-30    shadow-md shadow-orange-500 p-4  '> <span className='font-bold '>I'm Safa Kallianthodi</span> , <span className='text-yellow-600'>B.Sc. Computer Science Graduate.</span> <h1 className='mt-9'> I specialize in building dynamic, user-friendly web applications using <span className='text-yellow-600'>MongoDB, Express.js, React.js, and Node.js</span>.</h1></p>
     <p className=' h-60  sm:w-30 shadow-sm shadow-orange-500 p-4'>Dedicated and detail-oriented web developer with <span className='text-yellow-600'>
      
      6-months</span> of <span className='text-yellow-600'>MERN Stack Training</span>. 
      <h1 className='mt-10'>Experienced in
      <span className='text-yellow-600'> front-end</span> and <span className='text-yellow-600'>back-end</span> technologies.</h1></p>
     <p className='p-4 h-60  sm:w-30  shadow-md shadow-orange-500   '>
     <div className='flex   mt-5'>
     <img src="./email (1).png" alt="" className='w-7 me-2' />
     <span className=''> safakallianthodi6@gmail.com</span>
     </div>

     <div className='flex mt-8'>
     <img src="./phone-call.png" alt="" className='w-7 me-2' />
     <span>+91 9633809273</span>
     </div>
     <div className='flex mt-8'>
     <img src="./location (1).png" alt="" className='w-7 me-2' />
     <span>Malappuram</span>
     </div>
    
     </p>
     </div>

    </div>
    <div className="flex justify-center gap-12">
          <div className='bg-orange-500 rounded-full text-sm text-orange-500 animate-bounce'>01</div>
          <div className='bg-orange-500 rounded-full text-sm text-orange-500 animate-bounce'>03</div>
          <div className='bg-orange-500 rounded-full text-sm text-orange-500 animate-bounce'>02</div>
    </div>
    {/* ---------------SKILL SET STARTS HERE------------- */}
    <div className='bg-black  h-screen'>
      <h2 className='text-5xl text-center font-mono mt-12 mb-8 font-bold tracking-widest ' id='skills'>SKILLSET</h2>
      <div className='grid grid-cols-4 p-4 justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-4'>
      <div  className='w-28 h-28 shadow-md shadow-orange-500 p-2'><img src="./js (1).png" alt="" /></div>
      <div  className='w-28 h-28 shadow-md shadow-orange-500 p-2'><img src="./science.png" alt="" /></div>
      <div  className='w-28 h-28 shadow-md shadow-orange-500 p-2'><img src="./express.png" alt="" /></div>
      <div  className='w-28 h-28 shadow-md shadow-orange-500 p-2'><img src="./node-js (2).png" alt="" /></div>
      <div  className='w-28 h-28 shadow-sm shadow-orange-500 p-2'><img src="./mongodb.png" alt="" /></div>
      <div  className='w-28 h-28 shadow-sm shadow-orange-500 p-2'><img src="./html-5.png" alt="" /></div>
      <div className='w-28 h-28 shadow-sm shadow-orange-500 p-2'><img src="./css-3.png" alt="" /></div>
      <div  className='w-28 h-28 shadow-sm shadow-orange-500 p-2'><img src="./vitejs.png" alt="" /></div>
      <div  className='w-28 h-28 shadow-md shadow-orange-500 p-2'><img src="./bootstrap.png" alt="" /></div>
      <div  className='w-28 h-28 shadow-md shadow-orange-500 p-2'><img src="./postgresql.png" alt="" /></div>
      <div  className='w-28 h-28 shadow-md shadow-orange-500 p-2'><img src="./tailwind-css.png" alt="" /></div>
      <div  className='w-28 h-28 shadow-md shadow-orange-500 p-2'><img src="./sass.png" alt="" /></div>


      </div>
      <div className="flex justify-center  mt-12  gap-12">
          <div className='bg-orange-500 rounded-full text-sm text-orange-500 animate-bounce'>01</div>
          <div className='bg-orange-500 rounded-full text-sm text-orange-500 animate-bounce'>03</div>
          <div className='bg-orange-500 rounded-full text-sm text-orange-500 animate-bounce'>02</div>
    </div>
    </div>
    
    {/* -------------------------- PROJECTS STARTS HERE--------------------------------------- */}

        <div>
      <h2 className='text-5xl text-center font-bold font-mono mt-5 tracking-widest  '  id='project'>PROJECTS</h2>
      <div className="flex min-h-screen items-center justify-center ">
  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-60 w-55 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./positive (1).png" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white mb-12  ">BLOOD DONOR</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Create, edit, and delete donor profiles.Built a robust and scalable backend using
Express.js.Implemented JWT authentication to protect user
data.


        </p>
<a href="https://github.com/ikdaisy/DONOR-EXPRESS"><button className="rounded-full bg-orange-900 py-2 px-4 font-com text-sm  text-white shadow shadow-black/60 font-bold">CODE</button></a>        
        
      </div>
    </div>
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-60 w-55 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./ecommerce.png" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl  font-bold text-white ">OLX CLONE</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Developed responsive user interfaces using HTML, CSS,and JavaScript Built RESTful APIs with Node.js and Express.js to handle client requests Designed and implemented MongoDB databases to store and retrieve data efficiently</p>
<a href="https://github.com/ikdaisy/OLX-EXPRESS"><button className="rounded-full bg-orange-900 py-2 px-4 font-com text-sm  text-white shadow shadow-black/60 font-bold">CODE</button></a>        

      </div>
    </div>
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-46 w-55 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./instagram (6).png" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl  font-bold text-white  ">INSTAGRAM CLONE</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">This Instagram clone is a web application that allows users to sign up, log in, and verify their email. Once verified, users can create and manage their profiles, upload and share photos, and explore a feed of content from other users.</p>
<a href="https://github.com/ikdaisy/REACT_INSTAGRAM"><button className="rounded-full bg-orange-900 py-2 px-4 font-com text-sm  text-white shadow shadow-black/60 font-bold">CODE</button></a>        
        
      </div>
    </div>
  </div>
 
</div>
        </div>
        {/* ---------------------------------CONTACT STARTS HERE------------------------------ */}
        <div>
      <h2 className='text-5xl text-center font-bold font-mono  tracking-widest  ' id='contact'>FIND ME ON</h2>
          <p className='text-center mt-5 font-mono tracking-wide'>Feel free to <span className='text-orange-500 text-bold'>connect</span> with me</p>
          <div className='flex justify-center mt-5 pb-5 gap-5 '>
            <span className='bg-orange-500  p-2 rounded-full text-white cursor-pointer'><a href="https://github.com/ikdaisy"><img src="./github (2).png" className='w-7'alt="" /></a></span>
            <span className='bg-orange-500  p-2 rounded-full text-white cursor-pointer'><a href="https://www.linkedin.com/in/safa-kallianthodi-392753294/"><img src="./linkedin.png" className='w-6'alt="" /></a></span>
            <span className='bg-orange-500  p-2 rounded-full text-white cursor-pointer'><img src="./instagram (3).png" className='w-7'alt="" /></span>
            <span className='bg-orange-500  p-2 rounded-full text-white cursor-pointer'><img src="./facebook-app-symbol.png" className='w-7'alt="" /></span>
            

          </div>


        </div>

    </div>
    </>
  )
}

export default App

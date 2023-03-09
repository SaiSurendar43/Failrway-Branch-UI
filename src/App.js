import React from 'react'
import Card from './components/Card'
import fair from './assests/fair.png'
import home from './assests/home.png'
import home2 from './assests/home2.png'
import home3 from  './assests/home3.png'


function App() {
  return (
    <body>
    <section className="h-screen w-400 bg-white border">
      <div className="m-h-full w-400 bg-white border-b border-gray-500">
      <div className='flex'>
        <a className='border-r h-24 border-gray-500' href><img className='w-15 h-12 m-5' src={fair} alt='fair branch logo'></img></a>
        <ul className='flex py-7 px-20 gap-10 font-sans text-gray-900 font-medium'>
           <li><a className='hover:text-primary' href='index.html'>TEAM</a></li>
           <li><a className='hover:text-primary' href='index.html'>CALCULATOR</a></li>
           <li><a className='hover:text-primary' href='index.html'>EDUCATION</a></li>
           <li><a className='hover:text-primary' href='index.html'>AWARDS</a></li>
           <li><a className='hover:text-primary' href='index.html'>LOCAL AREA</a></li>
           <li><a className='hover:text-primary' href='index.html'>REVIEW</a></li>
        </ul>
        <div className='flex gap-3 absolute top-7 right-10 font-sans'>
        <a  href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg></a>
<a className='hover:text-primary' href='index.html'>Los Angeles,CA</a>
       <a href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg></a>
<a className='hover:text-primary' href='index.html'>877-699-0353</a>
    <div>
   <a className='hover:bg-lime-500 font-semibold text-center p-2 text-secondary w-32 h-10 bg-slate-800 rounded-xl' href='index.html'>GET STARTED</a>
      </div>
      </div>
      </div>
      </div>
      <div className='text-center mx-auto my-36'>
        <h3 className='font-bold text-7xl text-danger font-sans'>Welcome to Los Angeles</h3>
        <div className='flex justify-center'>
        <img className='w-15 h-12 m-4' src={fair} alt=''></img>
        <span className='p-2 text-6xl text-primary font-bold right-7'>Fairway Branch</span>
         </div>
        </div>
        <div className='relative'>
           <div className='bg-lime-500 h-52 w-52 rounded-full absolute top-9 left-34 hover:bg-white hover:border border-gray-600'>
             <button className=' hover:text-primary py-24 px-20 font-bold text-xl text-secondary'>START</button>
           </div>
        </div>
        <div className=''>
            <img className='my-auto absolute top-32' src={home} alt='home'></img>
              <img className='my auto absolute top-31 right-0' src={home2} alt='home2'></img>
              <div className='absolute left-25 top-31 mt-10'>
              <span className='text-xl  text-First'>we make the home loan process as simple as possible</span>
               <p className='text-xl text-First'>by guiding you through every step</p>
              </div>
          
        </div>
       </section>
       <section className='bg-gray-800 w-400 min-h-screen'>
          <div className='bg-gray-600 bg-opacity-10 relative'>
            <img className=' mix-blend-luminosity object-cover absolute mt-48 top-9 left-35' src={home3} alt='home3'></img>
            <div className='absolute top-32 left-33'>
           <h1 className='text-6xl font-bold text-primary'>Meet The Team of Real Professional</h1>
              <p className='text-5xl font-bold text-secondary relative'>And Find Your Personal Mortage Magician!</p>
              </div>
              <div className='absolute top-37 left-36'>
              <p className='m-1 text-secondary text-xl'>At Fairway,People are at the heart of what we do.</p>
              <p className=' text-secondary text-xl'> we are able to  bring comfort, hope and support to people within</p>
                <p className=' text-secondary text-xl'>the Fairway community and beyond</p>
              </div>
              
          </div>
       </section>
       <section className='bg-gray-800 w-400 h-96'>
        <Card />

       </section>
       <section className='bg-white w-400 min-h-screen'>
        <div className='flex'>
        <div className='border border-black w-96 h-32 ml-5'></div>
        <div className='border border-black w-96 h-32 ml-5'></div>
        <div className='border border-black w-80 h-32 ml-5'></div>
        </div>
         
       </section>
       </body>
  )
} 

export default App
import React from 'react'
import avata from "../assests/avata.png"
import avatar2 from '../assests/avatar2.png'
import avatar3 from '../assests/avatar3.png'
import avatar4 from '../assests/avatar4.png'
import avatar5 from '../assests/avatar5.png'
import avatar6 from '../assests/avatar6.png'
import avatar7 from '../assests/avatar7.png'
import avatar9 from '../assests/avatar7.png'
import avatar10 from '../assests/avatar10.png'
import avatar8 from '../assests/avatar8.png'
import agent from '../assests/agent.svg'
import {FaFacebookSquare,FaInstagram} from 'react-icons/fa'
const card=()=> {
  const scrollLeft=()=>
  {
    document.getElementById('content').scrollLeft = 400;
  }
  const scrollRight=()=>
  {
    document.getElementById('content').scrollLeft = 400;
  }
  return (
    <section id='content' className='flex overflow-auto scroll-smooth'>
    <div className='avtar1 p-0 ml-20 relative'>
    <img className='w-[450px]  h-96 object-cover'src={avata} alt='associate'></img>
     <div className='absolute top-[200px] ml-[5px]'>
        <button onClick={scrollLeft} className='rounded-full w-16 h-16 bg-lime-500 text-secondary p-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
</button>
    <button onClick={scrollRight} className='left-[1440px] rounded-full w-16 h-16 bg-lime-500 text-secondary p-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</button>

     </div>
    <div className='ml-14'>
       <a href='index.html'>Aaron Vang</a>
        <p>Advisior</p>
        <a className='flex' href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg><span className=''>612-702-5651</span></a>
       <div className='flex p-2'>
          <p className='pl-2'><FaFacebookSquare /></p>
          <p className='ml-2'><FaInstagram /></p>
        </div>
        </div>
    </div>
    <div className='ml-20'>
    <div className='avtar2 p-0 ml-[-10px] relative'>
    <img className='w-[450px]  h-96 object-cover'src={avatar2} alt='associate'></img>
    <div className='ml-14'>
       <a href='index.html'>Aaron Vang</a>
        <p>Advisior</p>
        <a className='flex' href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg><span className=''>612-702-5651</span></a>
       <div className='flex p-2'>
          <p className='pl-2'><FaFacebookSquare /></p>
          <p className='ml-2'><FaInstagram /></p>
        </div>
        </div>
    </div>
    </div>
    <div className='ml-20'>
    <div className='avtar3 p-0 ml-14 relative'>
    <img className='w-[450px]  h-96 object-cover'src={avatar3} alt='associate'></img>
    <div className='ml-14'>
       <a href='index.html'>Aaron Vang</a>
        <p>Advisior</p>
        <a className='flex' href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg><span className=''>612-702-5651</span></a>
       <div className='flex p-2'>
          <p className='pl-2'><FaFacebookSquare /></p>
          <p className='ml-2'><FaInstagram /></p>
        </div>
        </div>
    </div>
    </div>
    <div className='ml-5'>
    <div className='avtar4 p-0 ml-20 relative'>
    <img className='w-[550px]  h-96 object-cover'src={avatar4} alt='associate'></img>
    <div className='ml-14'>
       <a href='index.html'>Aaron Vang</a>
        <p>Advisior</p>
        <a className='flex' href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg><span className=''>612-702-5651</span></a>
       <div className='flex p-2'>
          <p className='pl-2'><FaFacebookSquare /></p>
          <p className='ml-2'><FaInstagram /></p>
        </div>
        </div>
    </div>
    </div>
    <div className='ml-5'>
    <div className='avtar5 p-0 ml-14 relative'>
    <img className='w-[450px]  h-96 object-cover'src={avatar5} alt='associate'></img>
    <div className='ml-14'>
       <a href='index.html'>Aaron Vang</a>
        <p>Advisior</p>
        <a className='flex' href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg><span className=''>612-702-5651</span></a>
       <div className='flex p-2'>
          <p className='pl-2'><FaFacebookSquare /></p>
          <p className='ml-2'><FaInstagram /></p>
        </div>
        </div>
    </div>
    </div>
    <div className='ml-5'>
    <div className='avtar6 p-0 ml-14 relative'>
    <img className='w-[450px]  h-96 object-cover'src={avatar6} alt='associate'></img>
    <div className='ml-14'>
       <a href='index.html'>Aaron Vang</a>
        <p>Advisior</p>
        <a className='flex' href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg><span className=''>612-702-5651</span></a>
       <div className='flex p-2'>
          <p className='pl-2'><FaFacebookSquare /></p>
          <p className='ml-2'><FaInstagram /></p>
        </div>
        </div>
    </div>
    </div>
    <div className='ml-5'>
    <div className='avtar7 p-0 ml-14 relative'>
    <img className='w-[450px]  h-96 object-cover'src={avatar7} alt='associate'></img>
    <div className='ml-14'>
       <a href='index.html'>Aaron Vang</a>
        <p>Advisior</p>
        <a className='flex' href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg><span className=''>612-702-5651</span></a>
       <div className='flex p-2'>
          <p className='pl-2'><FaFacebookSquare /></p>
          <p className='ml-2'><FaInstagram /></p>
        </div>
        </div>
    </div>
    </div>
    <div className='ml-5'>
    <div className='avtar10 p-0 ml-14 relative'>
    <img className='w-[450px]  h-96 object-cover'src={avatar10} alt='associate'></img>
    <div className='ml-14'>
       <a href='index.html'>Aaron Vang</a>
        <p>Advisior</p>
        <a className='flex' href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg><span className=''>612-702-5651</span></a>
       <div className='flex p-2'>
          <p className='pl-2'><FaFacebookSquare /></p>
          <p className='ml-2'><FaInstagram /></p>
        </div>
        </div>
    </div>
    </div>
    <div className='ml-5'>
    <div className='avtar9 p-0 ml-14 relative'>
    <img className='w-[450px]  h-96 object-cover'src={avatar9} alt='associate'></img>
    <div className='ml-14'>
       <a href='index.html'>Aaron Vang</a>
        <p>Advisior</p>
        <a className='flex' href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg><span className=''>612-702-5651</span></a>
       <div className='flex p-2'>
          <p className='pl-2'><FaFacebookSquare /></p>
          <p className='ml-2'><FaInstagram /></p>
        </div>
        </div>
    </div>
    </div>
    <div className='ml-5'>
    <div className='Agent p-0 ml-14 relative'>
    <img className='w-[450px]  h-96 object-cover'src={agent} alt='associate'></img>
    <div className='ml-14'>
       <a href='index.html'>Aaron Vang</a>
        <p>Advisior</p>
        <a className='flex' href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg><span className=''>612-702-5651</span></a>
       <div className='flex p-2'>
          <p className='pl-2'><FaFacebookSquare /></p>
          <p className='ml-2'><FaInstagram /></p>
        </div>
        </div>
    </div>
    </div>
    <div className='ml-5'>
    <div className='avtar8 p-0 ml-14 relative'>
    <img className='w-[450px]  h-96 object-cover'src={avatar8} alt='associate'></img>
    <div className='ml-14'>
       <a href='index.html'>Aaron Vang</a>
        <p>Advisior</p>
        <a className='flex' href='index.html'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg><span className=''>612-702-5651</span></a>
       <div className='flex p-2'>
          <p className='pl-2'><FaFacebookSquare /></p>
          <p className='ml-2'><FaInstagram /></p>
        </div>
        </div>
    </div>
    </div>
    
    
    
    
    
    </section>
  )
}

export default card
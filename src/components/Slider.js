import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
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

export default function SliderComponent() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
      >

        <SwiperSlide>
        <div className='avtar1 p-0 ml-20 relative'>
    <img className='w-[300px] ml-7 h-96 object-cover'src={avata} alt='associate'></img>
    <div className='border border-red-400 w-[400px] h-[300px]'>
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

        </SwiperSlide>
        <SwiperSlide>
        <div className='avtar1 p-0 ml-20 relative'>
    <img className='w-[300px] ml-5 h-96 object-cover'src={avata} alt='associate'></img>
    <div className='border border-black w-[350px] h-28'>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='avtar1 p-0 ml-20 relative'>
    <img className='w-[300px] ml-5 h-96 object-cover'src={avata} alt='associate'></img>
    <div className='border border-black w-[350px] h-28'>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='avtar1 p-0 ml-20 relative'>
    <img className='w-[300px] ml-5 h-96 object-cover'src={avata} alt='associate'></img>
    <div className='border border-black w-[350px] h-28'>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='avtar1 p-0 ml-20 relative'>
    <img className='w-[300px] ml-5 h-96 object-cover'src={avata} alt='associate'></img>
    <div className='border border-black w-[350px] h-28'>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className='avtar1 p-0 ml-20 relative'>
    <img className='w-[300px] ml-5 h-96 object-cover'src={avata} alt='associate'></img>
    <div className='border border-black w-[350px] h-28'>
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}

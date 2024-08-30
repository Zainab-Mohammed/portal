import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import style from "@/styles/swipe.module.css";
import { images } from '@/Lib/Images';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Page() {
  return (
    <section className='py-12'>
    <div className='container'>

        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          slidesPerView={3}  // Show 3 images per slide
          spaceBetween={30}  // Adjust the spacing between images
          className='h-96 w-full rounded-lg'
          style={{ padding: '30px' }}
        >
                         <div className={style["body"]}>  
                         <div className={style["container"]}>  

          {images.map((image, index) => (
            <SwiperSlide key={index} className='flex h-full w-full items-center justify-center'>
            <div className={style["mainCard"]}>
            <div className={style["cards"]}>
            <div className={style["card"]}>
            <div className={style["content"]}>
            <div className={style["img"]}>
              <Image
                src={image.src}
                alt={image.alt}
                className='block h-full w-full object-cover'
              />
              </div>
             
              <div className={style["details"]}>
             <div className={style["name"]}>john doe</div>
             <div className={style["job"]}>Web Designer</div>
            </div>
           <div className={style["media-icons"]}>
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
           </div>
           </div>
           </div>
           </div>

            </SwiperSlide>


          ))}
                      </div>
                      </div>



        </Swiper>
        </div> 
      

    </section>

  );
}

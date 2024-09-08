import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import style from "@/styles/swipe.module.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Page() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/p1/doctors');
        const data = await response.json();
        console.log('Fetched doctors:', data); // Debugging
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <section className='py-12'>
      <div className='container'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          className='h-96 w-full rounded-lg'
          style={{ padding: '30px' }}
        >
          <div className={style["body"]}>  
            <div className={style["container"]}>  
              {doctors.map((doctor) => (
                <SwiperSlide key={doctor.DID} className='flex h-full w-full items-center justify-center'>
                  <div className={style["mainCard"]}>
                    <div className={style["cards"]}>
                      <div className={style["card"]}>
                        <div className={style["content"]}>
                          <div className={style["img"]}>
                            <Image
                              src={`http://localhost:3001/${doctor.photo}`} // Ensure this URL is correctly formatted
                              alt={doctor.name}
                              width={300}
                              height={300}
                            />
                          </div>
                          <div className={style["details"]}>
                            <div className={style["name"]}>{doctor.username}</div>
                          </div>
                          <div className={style["media-icons"]}>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
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

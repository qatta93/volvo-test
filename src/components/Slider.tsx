import React, { useState }  from "react";
import { Card } from "./Card";
import cars from '../../public/api/cars.json';
import { useMediaQuery } from 'react-responsive';
import { Pagin } from "./Pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from '../../public/css/Slider.module.css';

export const Slider: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 450px)' });
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(4);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  if (isMobile) {
    return (
      <main className={styles.cars}>
        <section className={styles.cars__container}>
          <Swiper
            slidesPerView={1.4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
            {cars.map((car) => <SwiperSlide><Card car={car}/></SwiperSlide>)}
          </Swiper>
        </section>
      </main>
    );
  }
  return (
    <main className={styles.carsDesktop}>
      <section className={styles.cars__containerDesktop}>
        {currentCars.map((car) => <Card car={car} />)}
      </section>
      <section className={styles.cars__navDesktop}>
        <Pagin carsPerPage={carsPerPage} totalCars={cars.length} paginate={paginate} currentPage={currentPage} />
      </section>
    </main>
  );
};

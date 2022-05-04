import React, { useState, useEffect }  from "react";
import { Filter } from "./Filter";
import { Card } from "./Card";
import { useMediaQuery } from 'react-responsive';
import { PaginationComp } from "./Pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styles from '../../public/css/Slider.module.css';
import { Spinner } from 'vcc-ui';

interface CarDetailsProps {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export const Slider: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 480px)' });
  const isTablet = useMediaQuery({ query: '(max-device-width: 768px)' });
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(4);
  const [cars, setCars] = useState<CarDetailsProps[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedCars, setSelectedCars] = useState<CarDetailsProps[]>([]);

  useEffect(() => {
    setLoading(true)
    fetch('api/cars.json')
      .then((res) => res.json())
      .then((data) => {
        setCars(data)
        setLoading(false)
      })
  }, [])

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  useEffect(() => {
    if(isTablet === true){
      return setCarsPerPage(2)
    }
    setCarsPerPage(4)
  });

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  if (isMobile) {
    return (
      <main className={styles.cars}>
        <Filter selectedCars={selectedCars} setSelectedCars={setSelectedCars} cars={cars}/>
        <section className={styles.cars__container}>
          <Swiper
            slidesPerView={1.3}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            >
            {isLoading ? <Spinner size={40} /> : null}
            {cars.map((car) => <SwiperSlide key={car.id}><Card car={car}/></SwiperSlide>)}
          </Swiper>
        </section>
      </main>
    );
  };
  return (
    <main className={styles.carsDesktop}>
      <section className={styles.cars__containerDesktop}>
        {currentCars.map((car) => <Card key={car.id} car={car} />)}
      </section>
      <section className={styles.cars__navDesktop}>
        <PaginationComp carsPerPage={carsPerPage} totalCars={cars.length} paginate={paginate} currentPage={currentPage} />
      </section>
    </main>
  );
};

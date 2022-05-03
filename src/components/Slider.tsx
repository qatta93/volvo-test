import React, { useState, useEffect }  from "react";
import { Card } from "./Card";
import cars from '../../public/api/cars.json';
import styles from '../../public/css/Slider.module.css';
import { useMediaQuery } from 'react-responsive';
import { ChevronCircledLeft, ChevronCircledRight } from "./ChevronCircled";

export const Slider: React.FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-device-width: 1024px)' });
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(4);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  console.log(currentCars);

  if (isDesktop) {
    return (
      <main className={styles.carsDesktop}>
        <section className={styles.cars__containerDesktop}>
          {cars.map((car) => <Card car={currentCars} />)}
        </section>
        <section className={styles.cars__navDesktop}>
          <ChevronCircledLeft />
          <ChevronCircledRight />
        </section>
      </main>
    );
  }
  return (
    <main className={styles.cars}>
      <section className={styles.cars__container}>
        {cars.map((car) => <Card car={car}/>)}
      </section>
      <section className={styles.cars__nav}>
        <img src="https://img.icons8.com/ios-filled/100/000000/circled-dot.png"/> 
        <img src="https://img.icons8.com/ios-filled/100/000000/circled-dot.png"/>
        <img src="https://img.icons8.com/ios-filled/100/000000/circled-dot.png"/>
      </section>
    </main>
  );
};

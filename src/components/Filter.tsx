import React from 'react';
import styles from '../../public/css/Filter.module.css';

interface CarDetailsProps {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

interface FilterProps {
  selectedCars: CarDetailsProps[],
  setSelectedCars: React.Dispatch<React.SetStateAction<CarDetailsProps[]>>,
  cars: CarDetailsProps[],
};

export const Filter = ({ selectedCars, setSelectedCars, cars}:FilterProps) => {
  return (
    <section className={styles.filter}>
        <h1 className={styles.filter__title}>Find cars by body-type:</h1>
    </section>
  )
}

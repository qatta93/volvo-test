import React from 'react';
import styles from '../../public/css/Card.module.css';
import { ChevronSmall } from './ChevronSmall';

interface CarProps {
  car: CarDetailsProps
}

interface CarDetailsProps {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export const Card = ({ car }:CarProps) => {
  return (
    <article className={styles.carCard}>
      <h2 className={styles.carCard__bodyType}>{car.bodyType}</h2>
      <div className={styles.carCard__container}>
        <h1 className={styles.carCard__model}>{car.modelName}</h1>
        <h1 className={styles.carCard__type}>{car.modelType}</h1>
      </div>
      <img className={styles.carCard__img} src={car.imageUrl} alt="car" />
      <section className={styles.carCard__buttons}>
        <a className={styles.carCard__btn} href={`/learn/${car.id}`}>
          <p>LEARN</p>
          <ChevronSmall />
        </a>
        <a className={styles.carCard__btn} href={`/shop/${car.id}`}>
          <p>SHOP</p>
          <ChevronSmall />
        </a>
      </section>
    </article>
  );
};

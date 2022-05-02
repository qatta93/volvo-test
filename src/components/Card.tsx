import React from 'react';
import styles from '../../public/css/Card.module.css';
import { ChevronSmall } from './ChevronSmall';

// interface carProps {
//   id: string;
//   modelName: string;
//   bodyType: string;
//   modelType: string;
//   imageUrl: string;
// }

export const Card = ({ car }:any) => {
  return (
    <article className={styles.carCard}>
      <h2 className={styles.carCard__type}>{car.bodyType}</h2>
      <h1 className={styles.carCard__model}>{car.modelName}{car.modelType}</h1>
      <img className={styles.carCard__img} src={car.imageUrl} alt="car" />
      <section className={styles.carCard__buttons}>
        <a href={`/learn/${car.id}`}>LEARN</a>
        <ChevronSmall />
        <a href={`/shop/${car.id}`}>SHOP</a>
        <ChevronSmall />
      </section>
    </article>
  )
}

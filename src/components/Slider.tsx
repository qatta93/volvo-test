import React, {useState} from "react";
import { Card } from "./Card";
import cars from '../../public/api/cars.json'
import styles from '../../public/css/Slider.module.css'
import logo from '../../docs/chevron-small.svg';

export const Slider: React.FC = () => {

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

import React from 'react';
import styles from '../../public/css/Filter.module.css';
import Select from 'react-select';
import { View } from 'vcc-ui';

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
  const bodyTypesData = cars.map(car => car.bodyType);
  const bodyTypes = [...new Set(bodyTypesData)];
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  return (
    <section>
        {/* <h1 className={styles.filter__title}>Find cars by body-type:</h1>
        <Select
          defaultValue={options[0]}
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        /> */}
    <View
      className={styles.filter}
      extend={({ theme }) => ({
      background: theme.color.background.primary,
      color: theme.color.foreground.alert,
    })}
  >
              <h1 className={styles.filter__title}>Find cars by body-type:</h1>
        <Select
          defaultValue={options[0]}
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
  </View>
  </section>
  )
}

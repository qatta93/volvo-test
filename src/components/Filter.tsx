import React from 'react';
import { View, Text, SelectInput } from 'vcc-ui';

interface CarDetailsProps {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

interface FilterProps {
  selectedCars: CarDetailsProps[],
  // setSelectedCars: React.Dispatch<React.SetStateAction<CarDetailsProps[]>>,
  setSelectedCars: any,
  cars: CarDetailsProps[],
};

export const Filter = ({ selectedCars, setSelectedCars, cars}:FilterProps) => {
  const bodyTypesData = cars.map(car => car.bodyType);
  const bodyTypes = [...new Set(bodyTypesData)];
  const [value, setValue] = React.useState('');
  console.log(value)
  return (
    <section>
      <View
        extend={({ theme }) => ({
        background: theme.color.background.primary,
        color: theme.color.foreground.alert,
        padding: 8,
        textAlign: 'center',
        height: 120,
        marginBottom: 30,
      })}
      >
        <Text extend={({ theme }) => ({ marginBottom: 20 })} variant="hillary" subStyle="emphasis">Find cars by body-type:</Text>
        <SelectInput value='all' onChange={(e) => setValue(e.target.value)}>
          <option value="all">all</option>
          {bodyTypes.map(body => <option key={body} value={body}>{body}</option>)}
        </SelectInput>
      </View>
    </section>
  );
};

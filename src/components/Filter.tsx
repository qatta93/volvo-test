import React from 'react';
import { Block, Text, SelectInput } from 'vcc-ui';

interface FilterProps {
  selectedCarsType: string,
  setSelectedCarsType: React.Dispatch<React.SetStateAction<string>>,
  bodyTypes: string[],
};

export const Filter = ({ selectedCarsType, setSelectedCarsType, bodyTypes}:FilterProps) => {

  return (
    <section>
      <Block
        extend={({ theme }) => ({
        background: theme.color.background.primary,
        color: theme.color.foreground.alert,
        padding: 20,
        textAlign: 'center',
        height: 130,
        marginBottom: 30,
      })}
      >
        <Text extend={({ theme }) => ({ marginBottom: 10 })} variant="hillary" subStyle="emphasis">Find cars by body-type:</Text>
        <SelectInput value={selectedCarsType} label='body types:' onChange={(e) => setSelectedCarsType(e.target.value)}>
          <option value={"all"}>all</option>
          {bodyTypes.map(body => <option key={body} value={body}>{body}</option>)}
        </SelectInput>
      </Block>
    </section>
  );
};

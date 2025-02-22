import React from 'react';
import {useActionState} from './helper';
import FieldSelect from '../src/components/FieldSelect';
import {Wrapper} from './ui';

export default {
  title: 'FieldSelect',
  component: FieldSelect,
};


export const Basic = () => {
  const options = [["FOO", "Foo"], ["BAR", "Bar"], ["BAZ", "Baz"]];
  const [value, setValue] = useActionState("onChange", "FOO");

  return (
    <Wrapper>
      <FieldSelect
        label="Foobar"
        options={options}
        value={value}
        onChange={setValue}
      />
    </Wrapper>
  );
};



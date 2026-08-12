import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MultiSelect } from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  title: 'Design System/Components/MultiSelect',
  component: MultiSelect,
};
export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const Standalone: Story = {
  render: () => {
    function Demo() {
      const options = ['Sponsored Products', 'Sponsored Brands', 'Sponsored Display'];
      const [values, setValues] = useState(options);
      return <MultiSelect label="Ad Type" values={values} options={options} onChange={setValues} />;
    }
    return <Demo />;
  },
};

export const PartialSelection: Story = {
  render: () => {
    function Demo() {
      const options = ['Home Store', 'North Store'];
      const [values, setValues] = useState(['Home Store']);
      return <MultiSelect label="Store" values={values} options={options} onChange={setValues} />;
    }
    return <Demo />;
  },
};

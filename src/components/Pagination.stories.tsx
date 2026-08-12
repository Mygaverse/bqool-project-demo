import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Design System/Components/Pagination',
  component: Pagination,
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    function Demo() {
      const [page, setPage] = useState(1);
      return <Pagination page={page} totalPages={3} rangeStart={1} rangeEnd={5} totalResults={11} onPageChange={setPage} />;
    }
    return <Demo />;
  },
};

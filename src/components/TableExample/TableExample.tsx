import React from 'react';
import { Column } from 'react-table';

import Table from '@/components/Table';
import TestIcon from '@/components/icons/TestIcon';

interface TestData {
  text: string;
}

const tableColumns = [
  {
    Header: 'Text',
    accessor: 'text',
    width: 300,
    Cell: ({ row }) => (row.original.text === null ? '-' : row.original.text),
  },
  {
    Header: 'Icon',
    accessor: 'icon',
    width: 300,
    Cell: () => <TestIcon />,
  },
] as Column<TestData>[];

const TableExample = (): JSX.Element => {
  const tableData: TestData[] = [
    {
      text: 'Test 1',
    },
    {
      text: 'Test 2',
    },
    {
      text: 'Test 3',
    },
    {
      text: 'Test 4',
    },
    {
      text: 'Test 5',
    },
    {
      text: 'Test 6',
    },
  ];

  return <Table<TestData> columns={tableColumns} data={tableData} paginationSize={2} resizable />;
};

export default TableExample;

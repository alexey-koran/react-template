/* eslint-disable @typescript-eslint/ban-types */
import classNames from 'classnames';
import React, { useEffect, Fragment } from 'react';
import {
  TableOptions,
  useTable,
  useSortBy,
  useBlockLayout,
  useResizeColumns,
  usePagination,
} from 'react-table';

import styles from '@/components/Table/Table.scss';

interface TableProps<T extends object = {}> extends TableOptions<T> {
  paginationSize?: number;
  resizable?: boolean;
}

function Table<T extends object = {}>({
  data,
  columns,
  paginationSize,
  resizable,
}: TableProps<T>): JSX.Element {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex },
  } = useTable<T>(
    {
      columns,
      data,
    },
    useSortBy,
    useBlockLayout,
    useResizeColumns,
    usePagination,
  );

  useEffect(() => {
    if (paginationSize) {
      setPageSize(paginationSize);
    }
  }, [paginationSize, setPageSize]);

  return (
    <Fragment>
      <div {...getTableProps()} className={classNames(styles['table-element'], 'table')}>
        <div>
          {headerGroups.map(headerGroup => (
            <div className={styles['tr']} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <div
                  className={styles['th']}
                  {...column.getHeaderProps(
                    column.getSortByToggleProps({ title: `Sort by ${column.Header!.toString()}` }),
                  )}
                >
                  {column.render('Header')}
                  {resizable && (
                    <div
                      className={classNames(
                        styles['resizer'],
                        column.isResizing ? styles['isResizing'] : '',
                      )}
                      {...column.getResizerProps({
                        title: `Resize ${column.Header!.toString()} column`,
                      })}
                    />
                  )}
                  <span>{column.isSorted && (column.isSortedDesc ? ' \u2191' : ' \u2193')}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()}>
          {page &&
            page.map(row => {
              prepareRow(row);
              return (
                <div className={styles['tr']} {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <div className={styles['td']} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </div>
                  ))}
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles['table-pagination']}>
        <button type="button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        {' '}
        <button type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        {' '}
        <button type="button" onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        {' '}
        <button type="button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
        {' '}
        <span>
          Page
          {' '}
          <strong>
            {pageIndex + 1}
            {' '}
            of
            {pageOptions.length}
          </strong>
          {' '}
        </span>
        <span>
          | Go to page:
          {' '}
          <input
            type="number"
            min="1"
            max={pageCount}
            value={pageIndex + 1}
            onChange={e => {
              const paginationPage = e.currentTarget.value ? +e.currentTarget.value - 1 : 0;
              if (paginationPage < pageCount) {
                gotoPage(paginationPage);
              }
            }}
            style={{ width: '100px' }}
          />
        </span>
        {' '}
      </div>
    </Fragment>
  );
}

export default Table;

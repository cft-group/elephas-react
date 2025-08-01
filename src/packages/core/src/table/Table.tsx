import React from 'react';
import classNames from 'classnames';
import { PaginationProps, TableRootProps, RowProps } from './types';

const Root = ({
  clickable = false,
  openMenu = false,
  className,
  children,
  ...props
}: TableRootProps) => (
  <div
    className={classNames(
      '_e_table',
      {
        '_e_table_clickable-rows': clickable,
        '_e_table_open-menu': openMenu,
      },
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const Head = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('_e_thead', className)} {...props} />
);

const HeadCell = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('_e_thead__cell', className)} {...props} />
);

const Body = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('_e_tbody', className)} {...props} />
);

const Row = ({ selected = false, className, ...props }: RowProps) => (
  <div className={classNames('_e_tbody__row', selected && '_e_tbody__row_selected', className)} {...props} />
);

const Cell = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('_e_tbody__cell', className)} {...props} />
);

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('_e_tfoot', className)} {...props} />
);

const Menu = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('_e_tmenu', className)} {...props} />
);

const Pagination = ({
  page,
  pageSize,
  total,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  const prevDisabled = page <= 1;
  const nextDisabled = page >= totalPages;

  return (
    <div className="_e_tpagination">
      <span className="_e_tpagination__text">
        {`${start} – ${end} из ${total}`}
      </span>
      <span
        role="button"
        tabIndex={0}
        className={classNames('_e_tpagination__action', prevDisabled && '_e_tpagination__action_disabled')}
        onClick={() => !nextDisabled && onPageChange(page - 1)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            !prevDisabled && onPageChange(page - 1);
          }
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          {/* eslint-disable-next-line max-len */}
          <path d="M18.7915 11.005H7.62148L12.5015 6.12499C12.8915 5.73499 12.8915 5.09499 12.5015 4.70499C12.3147 4.51774 12.061 4.41251 11.7965 4.41251C11.532 4.41251 11.2783 4.51774 11.0915 4.70499L4.50148 11.295C4.11148 11.685 4.11148 12.315 4.50148 12.705L11.0915 19.295C11.4815 19.685 12.1115 19.685 12.5015 19.295C12.8915 18.905 12.8915 18.275 12.5015 17.885L7.62148 13.005H18.7915C19.3415 13.005 19.7915 12.555 19.7915 12.005C19.7915 11.455 19.3415 11.005 18.7915 11.005Z" />
        </svg>
      </span>

      <span
        role="button"
        tabIndex={0}
        className={classNames('_e_tpagination__action', nextDisabled && '_e_tpagination__action_disabled')}
        onClick={() => !nextDisabled && onPageChange(page + 1)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            !prevDisabled && onPageChange(page + 1);
          }
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          {/* eslint-disable-next-line max-len */}
          <path d="M5.20898 13H16.379L11.499 17.88C11.109 18.27 11.109 18.91 11.499 19.3C11.889 19.69 12.519 19.69 12.909 19.3L19.499 12.71C19.889 12.32 19.889 11.69 19.499 11.3L12.919 4.69999C12.7322 4.51274 12.4785 4.40751 12.214 4.40751C11.9495 4.40751 11.6958 4.51274 11.509 4.69999C11.119 5.08999 11.119 5.71999 11.509 6.10999L16.379 11H5.20898C4.65898 11 4.20898 11.45 4.20898 12C4.20898 12.55 4.65898 13 5.20898 13Z" />
        </svg>
      </span>
    </div>
  );
};

export const Table = Object.assign(Root, {
  Head,
  HeadCell,
  Body,
  Row,
  Cell,
  Menu,
  Footer,
  Pagination,
});

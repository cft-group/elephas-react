export interface TableRootProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Table content.
   */
  children: React.ReactNode;
  /**
   * If true, table rows will have hover and clickable styles.
   * @default false
   */
  clickable?: boolean;
  /**
   * If true, enables the menu bar above the table.
   * @default false
   */
  openMenu?: boolean;
}

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, table rows will have hover and clickable styles.
   * @default false
   */
  selected?: boolean;
}

export type PaginationProps = {
  /**
   * Callback fired when the page changes.
   */
  onPageChange: (page: number) => void;
  /**
   * Current page number (starting from 1).
   */
  page: number;
  /**
   * Number of items per page.
   */
  pageSize: number;
  /**
   * Total number of items.
   */
  total: number;
};

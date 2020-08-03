import { ReactNode } from 'react';
import { CommonAttributes } from '../../../../common';

interface DataListItem {
  /**
   * Visual appearance.
   * @default default
   */
  appearance?: 'default' | 'danger' | 'warning';

  /**
   * Item title.
   */
  title?: ReactNode;

  /**
   * Item value.
   */
  value?: ReactNode;
}

export interface DataListProps extends CommonAttributes {
  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * List items.
   */
  items: DataListItem[];

  /**
   * Title width in pixels.
   * @default 172
   */
  titleWidth: number;
}

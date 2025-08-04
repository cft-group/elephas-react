import { MouseEventHandler, ReactNode } from 'react';

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Menu size.
   * @default false
   */
  large?: boolean;
}

export type MenuItemProps = {
  /**
   * Item contents.
   */
  children: ReactNode;

  /**
   * Item icon.
   */
  icon?: ReactNode;

  /**
   * Click handler.
   */
  onClick?: MouseEventHandler<HTMLDivElement>
};

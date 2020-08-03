import { ReactNode } from 'react';
import { CommonAttributes } from '../../../../common';

export interface TabsProps extends CommonAttributes {
  /**
   * Tabs contents.
   */
  children: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;
}

export interface TabProps {
  /**
   * Tab active state.
   */
  active?: boolean;

  /**
   * Tab contents.
   */
  children: ReactNode;
}

import { ReactNode, ComponentType } from 'react';
import { CommonAttributes } from '../../../../common';

export interface SidebarProps extends CommonAttributes {
  /**
   * Sidebar bottom section contents.
   */
  bottom: ReactNode;

  /**
   * Sidebar contents.
   */
  children: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Sidebar collapsed state.
   *
   * @default false
   */
  collapsed?: boolean;
}

export interface SidebarDividerProps extends CommonAttributes {
  /**
   * Additional CSS class.
   */
  className?: string;
}

export interface SidebarHeadingProps extends CommonAttributes {
  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Component used to render sidebar heading icon.
   *
   * @default a
   */
  component?: ComponentType;

  /**
   * Sidebar heading text.
   */
  text: string;

  /**
   * Sidebar heading tooltip text.
   */
  tooltip: string;
}

export interface SidebarItemProps extends CommonAttributes {
  /**
   * Sidebar item active state.
   *
   * @default false
   */
  active?: boolean;

  /**
   * Sidebar item badge.
   */
  badge?: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Component used to render sidebar item.
   *
   * @default a
   */
  component?: ComponentType;

  /**
   * Sidebar item icon.
   */
  icon: ReactNode;

  /**
   * Sidebar item text.
   */
  text: string;
}

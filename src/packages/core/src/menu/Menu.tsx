import React from 'react';
import classNames from 'classnames';
import { MenuProps, MenuItemProps } from './types';

export const Menu = ({
  children,
  large = false,
  className,
  ...rest
}: MenuProps) => (
  <div className={classNames('_e_menu', { _e_menu_large: large }, className)} role="menu" {...rest}>
    {children}
  </div>
);

Menu.Item = ({ children, icon, onClick }: MenuItemProps) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    className="_e_menu__item"
    onClick={onClick}
    role="menuitem"
    tabIndex={0}
  >
    {icon && <div className="_e_menu__item-icon">{icon}</div>}
    {children}
  </div>
);

Menu.Separator = () => <div className="_e_menu__separator" />;
Menu.Text = ({ children }: { children: React.ReactNode }) => <div className="_e_menu__text-item">{children}</div>;

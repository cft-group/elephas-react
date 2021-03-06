import React from 'react';
import classNames from 'classnames';

import { InfoProps } from './types';

export function Info(props: InfoProps) {
  const {
    appearance,
    children,
    className,
    fixedWidth,
    ...rest
  } = props;

  const infoClassNames = classNames({
    [`${className}`]: className,
    _e_info: true,
    _e_info_notice: appearance === 'notice',
    _e_info_error: appearance === 'error',
    _e_info_warning: appearance === 'warning',
    '_e_info_fixed-width': fixedWidth,
  });

  let icon;

  if (appearance === 'warning') {
    icon = (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {/* eslint-disable-next-line max-len */}
        <path fillRule="evenodd" clipRule="evenodd" d="M19.53 20.5037C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037H19.53ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM11 15.5037V17.5037H13V15.5037H11Z" />
      </svg>
    );
  } else if (appearance === 'error') {
    icon = (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {/* eslint-disable-next-line max-len */}
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13ZM11 15V17H13V15H11Z" />
      </svg>
    );
  } else {
    icon = (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {/* eslint-disable-next-line max-len */}
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM11 9H13V7H11V9Z" />
      </svg>
    );
  }

  return (
    <div className={infoClassNames} {...rest}>
      <div className="_e_info__icon">{ icon }</div>
      <div className="_e_info__text">{ children }</div>
    </div>
  );
}

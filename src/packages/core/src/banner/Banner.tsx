import React from 'react';
import classNames from 'classnames';

import { BannerProps } from './types';

export function Banner(props: BannerProps) {
  const {
    appearance,
    children,
    className,
    onClick,
    ...rest
  } = props;

  const bannerClassNames = classNames({
    [`${className}`]: className,
    _e_banner: true,
    _e_banner_appearance_danger: appearance === 'danger',
    _e_banner_appearance_warning: appearance === 'warning',
  });

  return (
    <div className={bannerClassNames} {...rest}>
      <div className="_e_banner__text">
        { children }
      </div>
      {
        onClick
        && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            className="_e_banner__close"
            onClick={onClick}
            role="button"
            tabIndex={0}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* eslint-disable-next-line max-len */}
              <path d="M18.3 5.70996C18.1132 5.5227 17.8595 5.41747 17.595 5.41747C17.3305 5.41747 17.0768 5.5227 16.89 5.70996L12 10.59L7.11 5.69996C6.92317 5.5127 6.66952 5.40747 6.405 5.40747C6.14048 5.40747 5.88683 5.5127 5.7 5.69996C5.31 6.08996 5.31 6.71996 5.7 7.10996L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10996C18.68 6.72996 18.68 6.08996 18.3 5.70996Z" />
            </svg>
          </div>
        )
      }
    </div>
  );
}

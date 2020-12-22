import React from 'react';
import classNames from 'classnames';

import { DataListProps } from './types';

export function DataList(props: DataListProps) {
  const {
    className,
    items,
    titleWidth = 172,
    ...rest
  } = props;

  const dataListClassNames = classNames({
    [`${className}`]: className,
    _e_datalist: true,
  });

  return (
    <div className={dataListClassNames} {...rest}>
      { items.map((item, index) => {
        const lineClassNames = classNames({
          _e_datalist__line: true,
          _e_datalist__line_warning: item.appearance === 'warning',
          _e_datalist__line_danger: item.appearance === 'danger',
        });

        return (
          <div
            className={lineClassNames}
            key={`${item.title}-${index}`}
          >
            <div className="_e_datalist__title" style={{ flexBasis: titleWidth }}>{ item.title }</div>
            <div className="_e_datalist__value">{ item.value }</div>
          </div>
        );
      })}
    </div>
  );
}

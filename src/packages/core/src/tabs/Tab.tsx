import React from 'react';
import classNames from 'classnames';

import { TabProps } from './types';

export function Tab(props: TabProps) {
  const {
    active = false,
    children,
  } = props;

  const tabClassNames = classNames({
    _e_tabs__item: true,
    _e_tabs__item_selected: active,
  });

  return (
    <div className={tabClassNames}>
      { children }
    </div>
  );
}

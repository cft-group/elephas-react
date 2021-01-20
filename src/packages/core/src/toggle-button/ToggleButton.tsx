import React, { MouseEvent, forwardRef, Ref } from 'react';
import classNames from 'classnames';

import { ToggleButtonProps, ToggleButtonItem, ToggleButtonValue } from './types';

function isValueSelected(itemValue: string, value: ToggleButtonValue['value']) {
  if (value === null) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.includes(itemValue);
  }

  return itemValue === value;
}

interface ItemProps {
  isSelected: boolean;
  item: ToggleButtonItem;
  onClick: (event: MouseEvent<HTMLElement>, itemValue: string) => void;
}

const Item = ({ item, isSelected, onClick }: ItemProps) => (
  <button
    type="button"
    className={classNames('_e_toggle-button__item', {
      '_e_toggle-button__item_selected': isSelected,
    })}
    onClick={(event) => onClick(event, item.value)}
  >
    {item.value}
  </button>
);

export const ToggleButton = forwardRef((props: ToggleButtonProps, ref: Ref<HTMLDivElement >) => {
  const {
    className,
    value,
    onChange,
    multiple = false,
    items,
  } = props;

  const handleClick = (event: MouseEvent<HTMLElement>, itemValue: string) => {
    if (multiple && Array.isArray(value)) {
      const index = value.indexOf(itemValue);
      const newValue = [...value];

      if (index >= 0) {
        newValue.splice(index, 1);
      } else {
        newValue.push(itemValue);
      }

      onChange(event, newValue as any);
    } else {
      onChange(event, value === itemValue ? null : itemValue as any);
    }
  };

  return (
    <div
      role="group"
      className={classNames('_e_toggle-button', className)}
      ref={ref}
    >
      {
        items.map((item, index) => (
          <Item
            isSelected={isValueSelected(item.value, value)}
            // eslint-disable-next-line react/no-array-index-key
            key={`${item.value}-${index}`}
            item={item}
            onClick={handleClick}
          />
        ))
      }
    </div>
  );
});

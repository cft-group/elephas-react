import React from 'react';
import { render } from '@testing-library/react';

import { BaseInput } from './BaseInput';
import { BaseInputProps } from './types';
import { InputProps } from '../input/types';

const ArrowIcon = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {/* eslint-disable-next-line max-len */}
    <path d="M8.33031 11.8617L11.2159 14.6815C11.6504 15.1062 12.3523 15.1062 12.7868 14.6815L15.6724 11.8617C16.3743 11.1758 15.873 10 14.8814 10H9.11021C8.11863 10 7.62841 11.1758 8.33031 11.8617Z" />
  </svg>
);

describe('<BaseInput />', () => {
  const props: BaseInputProps<InputProps> = {
    label: 'Input',
    children: <input className="_e_input__control" placeholder=" " />,
  };

  it('should have an active icon', () => {
    const { container } = render(<BaseInput {...props} icons={ArrowIcon} />);

    expect(container.querySelector('._e_input__icon_passive')).toBeNull();
  });

  it('should have a passive icon', () => {
    const { container } = render(<BaseInput {...props} icons={ArrowIcon} isIconPassive />);

    expect(container.querySelector('._e_input__icon_passive')).not.toBeNull();
  });
});

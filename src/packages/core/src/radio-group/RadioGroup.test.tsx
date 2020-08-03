import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { RadioGroup } from './RadioGroup';
import { RadioGroupProps } from './types';

describe('<RadioGroup />', () => {
  const props: RadioGroupProps = {
    name: 'Options',
    value: '1',
    onChange: jest.fn(),
    options: [
      { value: '1', title: 'option 1' },
      { value: '2', title: 'option 2' },
    ],
  };

  it('should not fire onChange if RadioGroup is disabled', () => {
    const onChange = jest.fn();
    render(<RadioGroup {...props} disabled value="1" onChange={onChange} />);

    const radioButton = screen.getByDisplayValue('2');

    fireEvent.change(radioButton);

    expect(onChange).toBeCalledTimes(0);
  });

  it('should fire change value with selected Radio value', () => {
    const onChange = jest.fn();

    render(<RadioGroup {...props} value="1" onChange={onChange} />);

    const radioButton = screen.getByDisplayValue('2') as HTMLInputElement;

    fireEvent.change(radioButton, { target: { value: '2' } });

    expect(radioButton.value).toBe('2');
  });
});

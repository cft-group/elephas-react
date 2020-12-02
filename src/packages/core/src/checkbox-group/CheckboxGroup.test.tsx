import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { CheckboxGroup } from './CheckboxGroup';
import { CheckboxGroupProps } from './types';

describe('<CheckboxGroup />', () => {
  const props: CheckboxGroupProps = {
    name: 'Options',
    value: ['1'],
    onChange: jest.fn(),
    options: [
      { value: '1', title: 'option 1' },
      { value: '2', title: 'option 2' },
    ],
  };

  it('should not fire onChange if CheckboxGroup is disabled', () => {
    const onChange = jest.fn();
    render(<CheckboxGroup {...props} disabled value={['1']} onChange={onChange} />);

    const checkboxButton = screen.getByDisplayValue('2');

    fireEvent.change(checkboxButton);

    expect(onChange).toBeCalledTimes(0);
  });

  it('should fire change value with selected Checkbox value', () => {
    const onChange = jest.fn();

    render(<CheckboxGroup {...props} value={['1']} onChange={onChange} />);

    const checkboxButton = screen.getByDisplayValue('2') as HTMLInputElement;

    fireEvent.change(checkboxButton, { target: { value: '2' } });

    expect(checkboxButton.value).toBe('2');
  });
});

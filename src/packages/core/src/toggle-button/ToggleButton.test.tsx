import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { ToggleButton } from './ToggleButton';

const items = ['Left', 'Middle', 'Right'].map((item) => ({ value: item }));

describe('<ToggleButton />', () => {
  it('should call onChange with one selected item when value is not passed', () => {
    const onChange = jest.fn();

    render(<ToggleButton value={null} onChange={onChange} items={items} />);

    fireEvent.click(screen.getByText('Middle'));

    expect(onChange.mock.calls[0][1]).toEqual('Middle');
  });

  it('should call onChange with null when the selected item is unselected', () => {
    const onChange = jest.fn();

    render(<ToggleButton value="Middle" onChange={onChange} items={items} />);

    const middleItem = screen.getByText('Middle');

    fireEvent.click(middleItem);
    fireEvent.click(middleItem);

    expect(onChange.mock.calls[0][1]).toEqual(null);
  });

  it('should call onChange with multiple items when value as array is passed', () => {
    const onChange = jest.fn();

    render(<ToggleButton value={['Middle']} multiple onChange={onChange} items={items} />);

    fireEvent.click(screen.getByText('Right'));

    expect(onChange.mock.calls[0][1]).toEqual(['Middle', 'Right']);
  });

  it('should call onChange with empty array when all selected items are unselected', () => {
    const onChange = jest.fn();

    render(<ToggleButton value={['Middle']} multiple onChange={onChange} items={items} />);

    fireEvent.click(screen.getByText('Middle'));

    expect(onChange.mock.calls[0][1]).toEqual([]);
  });
});

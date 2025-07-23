import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from '.';

const mockOptions = [
  { title: 'Option 1', value: 'option1' },
  { title: 'Option 2', value: 'option2' },
  { title: 'Option 3', value: 'option3' },
];

describe('<Dropdown />', () => {
  const getDropdownInput = (container: HTMLElement): HTMLInputElement | null => container.querySelector('input._e_input__control');

  const getDropdownCard = (container: HTMLElement): HTMLDivElement | null => container.querySelector('._e_dropdown__card');

  const getDropdownItems = (container: HTMLElement): HTMLElement[] => Array.from(container.querySelectorAll('._e_dropdown__item'));

  it('should render with label', () => {
    const { container } = render(
      <Dropdown
        label="Test Label"
        options={mockOptions}
        onChange={jest.fn()}
      />,
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    const input = getDropdownInput(container);
    expect(input).toBeInTheDocument();
  });

  it('should display selected option title in input (controlled)', () => {
    const { container } = render(
      <Dropdown
        value="option2"
        options={mockOptions}
        onChange={jest.fn()}
      />,
    );

    const input = getDropdownInput(container);
    expect(input).toHaveValue('Option 2');
  });

  it('should display default option title in input (uncontrolled)', () => {
    const { container } = render(
      <Dropdown
        defaultValue="option1"
        options={mockOptions}
        onChange={jest.fn()}
      />,
    );

    const input = getDropdownInput(container);
    expect(input).toHaveValue('Option 1');
  });

  it('should call onChange with correct value when option is selected', () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <Dropdown
        value="option1"
        options={mockOptions}
        onChange={mockOnChange}
      />,
    );

    const input = getDropdownInput(container)!;
    fireEvent.focus(input);

    const items = getDropdownItems(container);
    fireEvent.mouseDown(items[1]);

    expect(mockOnChange).toHaveBeenCalledWith('option2');
  });

  it('should show dropdown items when clicked', () => {
    const { container } = render(
      <Dropdown
        options={mockOptions}
        onChange={jest.fn()}
      />,
    );

    const input = getDropdownInput(container)!;
    fireEvent.focus(input);

    const items = getDropdownItems(container);
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent('Option 1');
    expect(items[1]).toHaveTextContent('Option 2');
    expect(items[2]).toHaveTextContent('Option 3');
  });

  it('should highlight selected item', () => {
    const { container } = render(
      <Dropdown
        value="option2"
        options={mockOptions}
        onChange={jest.fn()}
      />,
    );

    const input = getDropdownInput(container)!;
    fireEvent.focus(input);

    const items = getDropdownItems(container);
    expect(items[1]).toHaveClass('_e_dropdown__item_selected');
  });

  it('should hide dropdown in readonly mode', () => {
    const { container } = render(
      <Dropdown
        options={mockOptions}
        onChange={jest.fn()}
        appearance="readonly"
      />,
    );

    const card = getDropdownCard(container);
    expect(card).toHaveStyle('display: none');
  });

  it('should disable input in disabled mode', () => {
    const { container } = render(
      <Dropdown
        options={mockOptions}
        onChange={jest.fn()}
        appearance="disabled"
      />,
    );

    const input = getDropdownInput(container);
    expect(input).toBeDisabled();
  });

  it('should have ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(
      <Dropdown
        ref={ref}
        options={mockOptions}
        onChange={jest.fn()}
      />,
    );

    const input = getDropdownInput(container);
    expect(input).toEqual(ref.current);
  });

  it('should handle empty options array', () => {
    const { container } = render(
      <Dropdown
        options={[]}
        onChange={jest.fn()}
      />,
    );

    const input = getDropdownInput(container);
    expect(input).toHaveValue('');
  });

  it('should handle undefined value', () => {
    const { container } = render(
      <Dropdown
        options={mockOptions}
        onChange={jest.fn()}
      />,
    );

    const input = getDropdownInput(container);
    expect(input).toHaveValue('');
  });
});

import React from 'react';
import {
  render, fireEvent, cleanup,
} from '@testing-library/react';

import { Checkbox } from './Checkbox';
import { CheckboxProps } from './types';

describe('<Checkbox />', () => {
  const props: CheckboxProps = {
    label: 'Unchecked label',
  };
  const getInput = (el: HTMLElement): HTMLInputElement | null => el.querySelector('input');
  const getLabel = (el: HTMLElement): HTMLLabelElement | null => el.querySelector('label');

  afterEach(cleanup);

  it('should have ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(<Checkbox ref={ref} />);
    const input = getInput(container);

    expect(input).toEqual(ref.current);
  });

  it('should have a disabled attribute', () => {
    const { container } = render(<Checkbox disabled />);
    const input = getInput(container);

    expect(input && input.hasAttribute('disabled')).toBeTruthy();
  });

  it('should not have a disabled attribute', () => {
    const { container } = render(<Checkbox />);
    const input = getInput(container);

    expect(input && input.hasAttribute('disabled')).toBeFalsy();
  });

  it('should have an aria-readonly property', () => {
    const { container } = render(<Checkbox readonly />);
    const input = getInput(container);

    expect(input && input.hasAttribute('aria-readonly')).toBeTruthy();
  });

  it('should not have an aria-readonly property', () => {
    const { container } = render(<Checkbox />);
    const input = getInput(container);

    expect(input && input.hasAttribute('readonly')).toBeFalsy();
  });

  it('method onChange has been called', () => {
    const onChange = jest.fn();
    const { container } = render(<Checkbox onChange={onChange} />);
    const label = getLabel(container);
    const input = getInput(container);

    label && fireEvent.click(label);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(input && input.checked).toBeTruthy();
  });

  it('method onChange has not been called', () => {
    const onChange = jest.fn();
    const { container } = render(<Checkbox disabled onChange={onChange} />);
    const label = getLabel(container);

    label && fireEvent.click(label);
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it(`should have label equal to "${props.label}"`, () => {
    const { getByText } = render(<Checkbox {...props} />);
    const spanNode = getByText(props.label as string);
    expect(spanNode.textContent).toBe(props.label);
  });
});

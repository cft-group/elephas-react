import React from 'react';
import {
  render, fireEvent, cleanup,
} from '@testing-library/react';

import { Radio } from './Radio';
import { RadioProps } from './types';

describe('<Radio />', () => {
  const props: RadioProps = {
    label: 'Unchecked label',
  };
  const getInput = (el: HTMLElement): HTMLInputElement | null => el.querySelector('input');
  const getLabel = (el: HTMLElement): HTMLLabelElement | null => el.querySelector('label');

  afterEach(cleanup);

  it('should have ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(<Radio ref={ref} />);
    const input = getInput(container);

    expect(input).toEqual(ref.current);
  });

  it('should have disabled attribute', () => {
    const { container } = render(<Radio disabled />);
    const input = getInput(container);

    expect(input && input.hasAttribute('disabled')).toBeTruthy();
  });

  it('should dont have disabled attribute', () => {
    const { container } = render(<Radio />);
    const input = getInput(container);

    expect(input && input.hasAttribute('disabled')).toBeFalsy();
  });

  it('should have readonly attribute', () => {
    const { container } = render(<Radio readonly />);
    const input = getInput(container);

    expect(input && input.hasAttribute('readonly')).toBeTruthy();
  });

  it('should have readonly attribute', () => {
    const { container } = render(<Radio />);
    const input = getInput(container);

    expect(input && input.hasAttribute('readonly')).toBeFalsy();
  });

  it('method onChange have been called', () => {
    const onChange = jest.fn();
    const { container } = render(<Radio onChange={onChange} />);
    const label = getLabel(container);
    const input = getInput(container);

    label && fireEvent.click(label);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(input && input.checked).toBeTruthy();
  });

  it('method onChange not have been called', () => {
    const onChange = jest.fn();
    const { container } = render(<Radio disabled onChange={onChange} />);
    const label = getLabel(container);

    label && fireEvent.click(label);
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it(`should have label equal to "${props.label}"`, () => {
    const { getByText } = render(<Radio {...props} />);
    const spanNode = getByText(props.label as string);
    expect(spanNode.textContent).toBe(props.label);
  });
});

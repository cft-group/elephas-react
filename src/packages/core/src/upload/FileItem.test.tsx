import React, { MouseEvent, KeyboardEvent } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import FileItem from './FileItem';

describe('<FileItem />', () => {
  let singleFileMaxSizeError: string;
  let onDelete: (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>, name: string) => void;

  beforeEach(() => {
    singleFileMaxSizeError = 'Превышен максимально допустимый размер файла';
    onDelete = jest.fn();
  });

  it('should display an error about file max size exceeding', () => {
    const { getByText } = render(
      <FileItem
        maxFileSizeError={singleFileMaxSizeError}
        onDelete={onDelete}
        name="Файл1"
        size={1048600}
      />,
    );

    expect(getByText(singleFileMaxSizeError)).toBeInTheDocument();
  });

  it('should call delete callback', () => {
    const { getByTestId } = render(
      <FileItem
        maxFileSizeError={singleFileMaxSizeError}
        onDelete={onDelete}
        name="Файл1"
        size={1048600}
      />,
    );

    fireEvent.click(getByTestId('delete'));

    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});

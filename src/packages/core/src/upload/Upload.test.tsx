import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Upload } from './Upload';

describe('<Upload />', () => {
  let file: File;
  let onChange: (file: File[]) => void;

  beforeEach(() => {
    file = new File(['foo'], 'foo.txt', {
      type: 'text/plain',
    });
    onChange = jest.fn();
  });

  it('should display a file when file is provided', () => {
    const { getAllByTestId } = render(<Upload files={file} actionText="Выберите файл" onChange={onChange} />);
    const fileItemsCount = getAllByTestId('fileItem');

    expect(fileItemsCount).toHaveLength(1);
  });

  it("shouldn't upload files when appearance is set to 'disabled'", () => {
    const { container } = render(<Upload actionText="Выберите файл" appearance="readonly" onChange={onChange} />);
    fireEvent.click(container);

    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('should display an error', () => {
    const error = 'Загружен файл неправильного формата';

    const { getByText } = render(
      <Upload
        actionText="Выберите файл"
        error={error}
        appearance="error"
        onChange={onChange}
      />,
    );

    expect(getByText(error)).toBeInTheDocument();
  });

  it('should upload files by click', () => {
    const { getAllByTestId, getByTestId } = render(<Upload actionText="Выберите файл" onChange={onChange} />);
    const input = getByTestId('input');

    fireEvent.change(input, { target: { files: [file] } });

    const fileItemsCount = getAllByTestId('fileItem');

    expect(fileItemsCount).toHaveLength(1);
    expect(onChange).toHaveBeenCalledWith([file]);
  });

  it('should delete all files', () => {
    const files = [
      new File(['file1'], 'file1.txt', {
        type: 'text/plain', lastModified: 1584515610530,
      }),
      new File(['file2'], 'file2.txt', {
        type: 'text/plain', lastModified: 1584515610535,
      }),
    ];

    const { getAllByTestId } = render(<Upload actionText="Выберите файл" onChange={onChange} files={files} />);
    const deleteButtons = getAllByTestId('delete');

    deleteButtons.forEach((deleteButton) => fireEvent.click(deleteButton));
    expect(onChange).toHaveBeenCalledWith([]);
  });
});

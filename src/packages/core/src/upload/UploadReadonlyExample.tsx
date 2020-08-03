import React from 'react';
import { Upload } from '.';

export function UploadReadonlyExample() {
  const file1 = new File(['foo'], 'foo.txt', {
    type: 'text/plain',
  });

  const file2 = new File(['foo2'], 'foo2.txt', {
    type: 'text/plain',
  });

  return (
    <Upload
      actionText="Выберите файлы или перетащите их сюда"
      label="Upload text files"
      onChange={() => null}
      appearance="readonly"
      files={[file1, file2]}
    />
  );
}

import React, { MouseEvent, KeyboardEvent } from 'react';
import classNames from 'classnames';

import { FileItemProps } from './types';

function formatBytes(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1048576) {
    return `${(bytes / 1024).toFixed(2)} KB`;
  }
  return `${(bytes / 1048576).toFixed(2)} MB`;
}

const FileItem = (props: FileItemProps) => {
  const {
    acceptError,
    maxFileSizeError,
    name,
    onDelete,
    size,
  } = props;

  function onDeleteFile(event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) {
    onDelete(event, name);
  }

  const extRe = /(?:\.([^.]+))?$/;
  const fileExtensionMatch = extRe.exec(name) || [''];
  const fileExtension = fileExtensionMatch[0];
  const fileNameWithoutExtension = fileExtension ? name.slice(0, -fileExtension.length) : name;

  const fileItemClassNames = classNames({
    '_e_upload-file': true,
    '_e_upload-file_error': acceptError || maxFileSizeError,
  });

  return (
    <section
      className={fileItemClassNames}
      data-testid="fileItem"
      key={name}
    >
      <div className="_e_upload-file__box">
        <span className="_e_upload-file__name">
          <span>{ fileNameWithoutExtension }</span>
          <span>{ fileExtension }</span>
        </span>
        <span className="_e_upload-file__size">
          { formatBytes(size) }
        </span>
        <div
          className="_e_upload-file__remove"
          data-testid="delete"
          onClick={onDeleteFile}
          onKeyUp={onDeleteFile}
          role="button"
          tabIndex={0}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* eslint-disable-next-line max-len */}
            <path d="M17.3 6.70999C17.1131 6.52273 16.8595 6.4175 16.595 6.4175C16.3305 6.4175 16.0768 6.52273 15.89 6.70999L12 10.59L8.10997 6.69999C7.92314 6.51273 7.66949 6.4075 7.40497 6.4075C7.14045 6.4075 6.8868 6.51273 6.69997 6.69999C6.30997 7.08999 6.30997 7.71999 6.69997 8.10999L10.59 12L6.69997 15.89C6.30997 16.28 6.30997 16.91 6.69997 17.3C7.08997 17.69 7.71997 17.69 8.10997 17.3L12 13.41L15.89 17.3C16.28 17.69 16.91 17.69 17.3 17.3C17.69 16.91 17.69 16.28 17.3 15.89L13.41 12L17.3 8.10999C17.68 7.72999 17.68 7.08999 17.3 6.70999Z" />
          </svg>
        </div>
      </div>
      {
        acceptError && <div className="_e_upload-file__error">{ acceptError }</div>
      }
      {
        !acceptError && maxFileSizeError && <div className="_e_upload-file__error">{ maxFileSizeError }</div>
      }
    </section>
  );
};

export default FileItem;

import React, {
  useState,
  MouseEvent,
  DragEvent,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  forwardRef,
  useRef,
} from 'react';
import classNames from 'classnames';
import * as mime from 'mime';

import { UploadProps } from './types';
import FileItem from './FileItem';
import { ENTER_KEY_CODE, useCombinedRefs } from '../../../../common';

function isUserActionValid(
  event: MouseEvent<HTMLLabelElement>
  | KeyboardEvent<HTMLLabelElement>
  | MouseEvent<HTMLDivElement>
  | KeyboardEvent<HTMLDivElement>,
) {
  return event.type === 'click' || (event as KeyboardEvent).keyCode === ENTER_KEY_CODE;
}

export const Upload = forwardRef<HTMLInputElement, UploadProps>(
  (props: UploadProps, ref) => {
    const {
      accept,
      acceptError,
      actionText,
      appearance = 'default',
      className,
      error,
      files,
      hint,
      id,
      label,
      maxFileSize,
      maxFileSizeError,
      multiple = false,
      name,
      onChange,
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const combinedRef = useCombinedRefs<HTMLInputElement>(ref, inputRef);

    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [highlight, setHighlight] = useState(false);

    function isFileExceedingMaxSize(size: number) {
      if (!maxFileSize) {
        return false;
      }

      return size > maxFileSize;
    }

    function addUploadedFiles(filesToAdd: File[]) {
      const newUploadedFiles = multiple ? uploadedFiles.concat(filesToAdd) : filesToAdd;

      setUploadedFiles(newUploadedFiles);

      const validFiles = newUploadedFiles.filter(({ size }) => !isFileExceedingMaxSize(size));

      onChange(validFiles.length ? validFiles : []);
    }

    useEffect(() => {
      if (files === undefined) {
        return;
      }

      setUploadedFiles(Array.isArray(files) ? files : [files]);
    }, [files]);

    let mimeTypes: string[];

    if (accept) {
      mimeTypes = accept.split(',');
      if (mimeTypes && mimeTypes.length) {
        const mimeTypesLength = mimeTypes.length;
        for (let i: number = 0; i < mimeTypesLength; i += 1) {
          let mimeType = mime.getType(mimeTypes[i]);
          if (!mimeType) {
            const ext = mime.getExtension(mimeTypes[i]);
            if (ext) {
              mimeType = mime.getType(ext);
            } else {
              const isAllMimeTypes = /\/(\*)$/gi.test(mimeTypes[i]);
              mimeType = isAllMimeTypes ? (mimeTypes[i].split('/')[0]).trim() : null;
            }
          }
          mimeType && mimeTypes.push(mimeType);
        }
      }
    }

    function isFileTypeMatching(type: string): boolean {
      if (!accept) {
        return true;
      }

      return mimeTypes.some((mimeType: string): boolean => type.indexOf(mimeType) !== -1);
    }

    function onUploadFile(event: ChangeEvent<HTMLInputElement>) {
      const { files: filesToUpload } = event.target;

      if (!filesToUpload) {
        return;
      }

      addUploadedFiles([...filesToUpload]);
    }

    function isUploadActionDisabled() {
      return appearance === 'readonly';
    }

    function onOpenFileDialog(event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) {
      if (isUploadActionDisabled() || !isUserActionValid(event)) {
        return;
      }

      combinedRef.current!.click();
    }

    function onDeleteFile(event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>, fileName: string) {
      if (isUploadActionDisabled() || !isUserActionValid(event)) {
        return;
      }

      const filteredFiles = uploadedFiles.filter((uploadedFile) => uploadedFile.name !== fileName);

      setUploadedFiles(filteredFiles);
      onChange(filteredFiles);
    }

    function onDragOver(event: DragEvent<HTMLDivElement>) {
      event.preventDefault();

      if (isUploadActionDisabled()) {
        return;
      }

      setHighlight(true);
    }

    function onDragLeave() {
      setHighlight(false);
    }

    function onDrop(event: DragEvent<HTMLDivElement>) {
      event.preventDefault();

      if (isUploadActionDisabled()) {
        return;
      }

      const draggedFiles = multiple ? [...event.dataTransfer.files] : [event.dataTransfer.files[0]];

      addUploadedFiles(draggedFiles);
      setHighlight(false);
    }

    const uploadClassNames = classNames({
      [`${className}`]: className,
      _e_upload: true,
      _e_upload_error: appearance === 'error',
      _e_upload_readonly: appearance === 'readonly',
      _e_upload_highlighted: highlight,
    });

    return (
      <div className={uploadClassNames}>
        { label && <div className="_e_upload__label">{ label }</div> }
        <div
          className="_e_upload__input"
          onClick={onOpenFileDialog}
          onKeyUp={onOpenFileDialog}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
          role="button"
          tabIndex={0}
        >
          <input
            accept={accept}
            className="_e_upload__control"
            data-testid="input"
            id={id}
            multiple={multiple}
            name={name}
            onChange={onUploadFile}
            ref={combinedRef}
            type="file"
          />
          <div className="_e_upload__action">{ actionText }</div>
          { hint && <div className="_e_upload__hint">{ hint }</div> }
        </div>
        {
          error
          && appearance === 'error'
          && <div className="_e_upload__error">{ error }</div>
        }
        {
          uploadedFiles.map(({
            name: fileName,
            size,
            lastModified,
            type,
          }) => (
            <FileItem
              acceptError={!isFileTypeMatching(type) && acceptError}
              key={lastModified}
              maxFileSizeError={isFileExceedingMaxSize(size) && maxFileSizeError}
              name={fileName}
              onDelete={onDeleteFile}
              size={size}
            />
          ))
        }
      </div>
    );
  },
);

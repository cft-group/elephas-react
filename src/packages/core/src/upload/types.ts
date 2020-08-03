import { MouseEvent, KeyboardEvent } from 'react';

export interface FileItemProps {
  /**
   * Error message which is shown when file type does not match types provided in `accept`.
   */
  acceptError?: string | false | undefined;

  /**
   * Error message which is shown when file size is larger than `maxFileSize`.
   */
  maxFileSizeError: string | false | undefined;

  /**
   * File name.
   */
  name: string;

  /**
   * Delete handler.
   */
  onDelete: (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>, name: string) => void;

  /**
   * File size.
   */
  size: number;
}

export interface UploadProps {
  /**
   * One or more unique file type specifiers describing file types to allow.
   */
  accept?: string;

  /**
   * Error message which is shown when file type does not match types provided in `accept`.
   */
  acceptError?: string;

  /**
   * Clickable text shown inside the upload box.
   */
  actionText: string;

  /**
   * Visual appearance.
   * @default default
   */
  appearance?: 'default' | 'error' | 'readonly';

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Error message. Must be set when appearance is set to `error`.
   */
  error?: string;

  /**
   * File or array of Files.
   */
  files?: File | File[];

  /**
   * Hint message shown below `actionText`.
   */
  hint?: string;

  /**
   * Upload id attribute.
   */
  id?: string;

  /**
   * Upload label.
   */
  label?: string;

  /**
   * File size limit for each file, in bytes.
   */
  maxFileSize?: number;

  /**
   * Error message which is shown when file size is larger than `maxFileSize`.
   */
  maxFileSizeError?: string;

  /**
   * A boolean which indicates that the user may choose more than one file.
   * @default false
   */
  multiple?: boolean;

  /**
   * Upload name attribute.
   */
  name?: string;

  /**
   * Change handler.
   */
  onChange: (files: File[]) => void;
}

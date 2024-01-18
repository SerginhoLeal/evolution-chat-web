/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';

import EmojiPicker from 'emoji-picker-react';

import * as Styles from './styles';
import { Icons } from '../icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  standard: 'standard' | 'error' | 'success',
  isLoading: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, isLoading, standard = 'standard', ...rest }: ButtonProps) => {
  const color = {
    standard: '#4f65f1',
    error: '#EA3546',
    success: '#0B6E4F',
  };

  return (
    <Styles.Container standard={color[standard]} {...rest}>
      {isLoading ? (
        <span></span>
      ): (
        <p>{title}</p>
      )}
    </Styles.Container>
  );
}

interface ButtonEmojiProps {
  focus: null | string;
  onSelectEmoji: (a: any) => void;
}

export const ButtonEmoji: React.FC<ButtonEmojiProps> = ({ focus, onSelectEmoji, ...rest }) => {
  const [open, setOpen] = useState(false);

  if (focus) {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }

  return (
    <Styles.Component>
      {open && !focus && (
        <Styles.Options>
          <EmojiPicker onEmojiClick={onSelectEmoji} />
        </Styles.Options>
      )}
      <Styles.Button onClick={() => setOpen(!open)} {...rest}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.5 9.75C16.3284 9.75 17 9.07843 17 8.25C17 7.42157 16.3284 6.75 15.5 6.75C14.6716 6.75 14 7.42157 14 8.25C14 9.07843 14.6716 9.75 15.5 9.75Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.5 9.75C9.32843 9.75 10 9.07843 10 8.25C10 7.42157 9.32843 6.75 8.5 6.75C7.67157 6.75 7 7.42157 7 8.25C7 9.07843 7.67157 9.75 8.5 9.75Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.4 13.3H15.6C16.1 13.3 16.5 13.7 16.5 14.2C16.5 16.69 14.49 18.7 12 18.7C9.51 18.7 7.5 16.69 7.5 14.2C7.5 13.7 7.9 13.3 8.4 13.3Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </Styles.Button>
    </Styles.Component>
  );
}

interface ButtonFilesProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  setFiles: (files: any) => void;
}

export const ButtonFiles: React.FC<ButtonFilesProps> = ({ icon, setFiles, ...rest }) => {
  const inputRef = useRef<any>(null);

  const openFile = () => inputRef.current.click();

  const setPreview = (evt) => {
    const files = evt.target.files;

    for (const key in files) {
      if (Object.prototype.hasOwnProperty.call(files, key)) {
        const element = files[key];
        const reader = new FileReader();
        reader.readAsDataURL(element)
        reader.onload = ({ target }) => {
          setFiles({
            file: element,
            preview: target?.result
          })
        };
      }
    }
  };

  return (
    <Styles.Component>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type='file'
        multiple
        // accept='image/*'
        onChange={setPreview}
      />

      <Styles.Button onClick={openFile} {...rest}>
        <Icons name={icon} />
      </Styles.Button>
    </Styles.Component>
  );
}
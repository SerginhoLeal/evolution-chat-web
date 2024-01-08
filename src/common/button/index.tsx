import React, { useState } from 'react';

import EmojiPicker from 'emoji-picker-react';

import * as Styles from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, isLoading, ...rest }: ButtonProps) => {
  return (
    <Styles.Container {...rest}>
      {isLoading ? (
        <span></span>
      ): (
        <p>{title}</p>
      )}
    </Styles.Container>
  );
}

interface ButtonEmojiProps {
  onSelectEmoji: (a: any) => void;
}

export const ButtonEmoji: React.FC<ButtonEmojiProps> = ({ onSelectEmoji, ...rest }) => {
  const [open, setOpen] = useState(false);

  return (
    <Styles.Component>
      {open && (
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

export const ButtonFiles: React.FC = ({ ...rest }) => {
  const [open, setOpen] = useState(false);

  return (
    <Styles.Component>
      {open && (
        <Styles.OptionsFiles>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V7C1.25 2.59 2.59 1.25 7 1.25H8.5C10.25 1.25 10.8 1.82 11.5 2.75L13 4.75C13.33 5.19 13.38 5.25 14 5.25H17C21.41 5.25 22.75 6.59 22.75 11V17C22.75 21.41 21.41 22.75 17 22.75ZM7 2.75C3.43 2.75 2.75 3.43 2.75 7V17C2.75 20.57 3.43 21.25 7 21.25H17C20.57 21.25 21.25 20.57 21.25 17V11C21.25 7.43 20.57 6.75 17 6.75H14C12.72 6.75 12.3 6.31 11.8 5.65L10.3 3.65C9.78 2.96 9.63 2.75 8.5 2.75H7Z" fill="#292D32"/>
            </svg>
          </button>
        </Styles.OptionsFiles>
      )}
      <Styles.Button onClick={() => setOpen(!open)} {...rest}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12H18" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 18V6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </Styles.Button>
    </Styles.Component>
  );
}
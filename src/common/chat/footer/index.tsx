import React, { useRef, useState} from 'react';

import { useChat } from '@context';
import { api, mediaApi } from '@services';
import { FormProps } from '@interface';

import { ButtonFiles, Icons } from '../../index';

import { FilesProps } from './type';

import * as Styles from './styles';

export const Footer: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { room, token } = useChat();

  const [files, setFiles] = useState([] as FilesProps[]);
  const [selectFile, setSelectFile] = useState(0);

  const sendImages = () => {
    for (const key in files) {
      if (Object.prototype.hasOwnProperty.call(files, key)) {
        const element = files[key];

        const verify = (files.length - 1) === Number(key) ? inputRef.current?.value : ''

        const appendData = new FormData();

        appendData.append('message', verify);
        appendData.append('file', element.file);

        mediaApi.post(`/message-media-whatsapp?room_id=${room.room}`, appendData, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        })
      }
    }

    setFiles([]);
    return inputRef.current.value = null
  }

  const sendMessage = (evt: FormProps) => {
    evt.preventDefault()

    api.post(`/message-whatsapp?room_id=${room.room}`, {
      message: inputRef.current?.value,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })

    return inputRef.current.value = null
  };

  const AddingFiles = (files: FilesProps) => setFiles(prev => [files, ...prev])

  return (
    <Styles.Container>
      <ButtonFiles icon='plus' setFiles={AddingFiles} />

      <Styles.Form onSubmit={sendMessage}>
        <input
          ref={inputRef}
          type='text'
          name='message'
          placeholder='Digite uma mensagem'
          // onFocus={onFocus}
          autoComplete='off'
        />

        <button title='send' type='submit'>
          <Icons name='send' />
        </button>
      </Styles.Form>

      {files.length > 0 && (
        <Styles.Modal>
          <Styles.Preview>
            {files[selectFile]?.file.type === 'video/mp4' || files[selectFile]?.file.type === 'video/webm' ? (
              <video src={files[selectFile].preview} controls height={300} />
            ) : (
              <img src={files[selectFile]?.preview} alt='' />
            )}
          </Styles.Preview>

          <Styles.SubFiles>
            {files.map((image, index) => {
              if (image.file.type === 'video/mp4' || image.file.type === 'video/webm') {
                return (
                  <button onClick={() => setSelectFile(index)}>
                    <video src={image.preview} />
                  </button>
                )
              }

              return (
                <button onClick={() => setSelectFile(index)}>
                  <img src={image.preview} alt='' />
                </button>
              )
            })}
            <ButtonFiles icon='plus' setFiles={AddingFiles} />
          </Styles.SubFiles>

          <Styles.ContainerInput onSubmit={sendImages}>
            <input ref={inputRef} type='text' name='message' placeholder='Digite uma mensagem' />
            <button type='submit'>
              <Icons color='#fff' name='send' />
            </button>
          </Styles.ContainerInput>
        </Styles.Modal>
      )}

    </Styles.Container>
  );
}

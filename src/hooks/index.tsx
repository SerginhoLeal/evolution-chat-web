/* eslint-disable @typescript-eslint/no-explicit-any */
import { DependencyList, useCallback, useRef } from "react";

export function useIntersectionObserver<T extends HTMLElement>(
  callback: () => void,
  deps: DependencyList
) {
  const observer = useRef<IntersectionObserver | null>(null);
  const ref = useCallback(
    (node: Element) => {
      if (deps.every(Boolean)) {
        observer.current?.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) callback();
        });

        if (node) observer.current.observe(node);
      }
    },
    [deps, callback]
  );

  return ref;
}

export const useFiles = async (evt: any, cb) => {
  evt.stopPropagation();
  evt.preventDefault();

  const multimedia = evt.target.files;

  console.log(evt.target.files[0]);

  const array_images: any[] = [];

  for (let index = 0; index < multimedia.length; index++) {
    const element = multimedia[index];

    const reader = new FileReader();
    reader.readAsDataURL(element);

    reader.onloadend = ({ target }) => {
      array_images.push({
        element,
        base64: target?.result
      });

      cb(array_images);
    };
  }
};

export * from './usePersistedState';
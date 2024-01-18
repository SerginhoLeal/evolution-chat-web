import { Skeleton as Ske } from '../../skeleton';

export const Skeleton = ({ width, height }: { width: number, height: number }) => {
  let w: number = 0;
  let h: number = 0;

  if (width >= height) {
    const wt = 300;
    const ht = height / (width / wt);

    w = wt;
    h = ht;
  }

  if (height >= width) {
    const wt = 300;
    const ht = height / (width / wt);

    w = wt;
    h = ht;
  }

  return (
    <Ske loading width={String(w)} height={String(h)} />
  )
};

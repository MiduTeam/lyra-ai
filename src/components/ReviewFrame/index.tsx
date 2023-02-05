import { ReactNode } from 'react';
import FrameButton from './FrameButton';

interface Props {
  children: ReactNode;
}

const ReviewFrame = ({ children }: Props) => {
  return (
    <article className="mx-4 md:mx-auto max-w-5xl h-[700px] overflow-y-auto bg-white rounded-md overflow-clip shadow-lg">
      <header className="w-full h-10 bg-[#373737] flex items-center gap-2 px-2 sticky top-0">
        <FrameButton color="RED" />
        <FrameButton color="YELLOW" />
        <FrameButton color="GREEN" />
      </header>
      <section className="p-4">{children}</section>
    </article>
  );
};

export default ReviewFrame;

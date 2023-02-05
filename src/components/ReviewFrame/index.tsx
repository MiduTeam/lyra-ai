import FrameButton from './FrameButton';

const ReviewFrame = () => {
  return (
    <article className="max-w-lg bg-white rounded-md overflow-clip shadow-lg">
      <header className="w-full h-10 bg-[#373737] flex items-center gap-2 px-2">
        <FrameButton color="RED" />
        <FrameButton color="YELLOW" />
        <FrameButton color="GREEN" />
      </header>
      <section className="p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consectetur
        nobis deserunt officia labore tenetur quae, neque asperiores similique
        quibusdam vel repudiandae sequi repellat sit hic nemo rem officiis odio?
      </section>
    </article>
  );
};

export default ReviewFrame;

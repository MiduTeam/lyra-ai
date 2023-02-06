const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="flex flex-col items-center justify-center gap-3 p-10">
        <h1 className="text-3xl font-bold">Lyra AI</h1>
        <p className="text-sm">
          {' '}
          {year} Lyra AI. Developed with 💜 by @ikurotime - @afor_digital -
          @SrDrabx - @pheralb_ - @TMCheiN.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

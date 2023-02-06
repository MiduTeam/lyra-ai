import { GitHub } from 'iconoir-react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="sticky top-0 flex justify-between p-5 bg-white border-b">
      <Link href="/" className="font-bold">
        Lyra AI
      </Link>
      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/MiduTeam/lyra-ai"
          target="_blank"
          rel="noreferrer"
          className="transition-all duration-300 hover:-translate-y-0.5"
        >
          <GitHub width={25} />
        </a>
      </div>
    </nav>
  );
};

export default Header;

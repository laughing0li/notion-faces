import Image from 'next/legacy/image';
import Decoration from './decoration';
import Logo from '@/public/logo.png'
export default function Header() {
  return (
    <header className="relative">
      <div className="flex py-5 px-5 sm:px-16 md:px-32 items-center" >
        <Image
          src={Logo.src}
          alt="Notion Avatar Logo"
          width={60}
          height={60}
        />
        <span className="text-lg">
          Notion Faces
        </span>
      </div>
      <Decoration className="absolute top-0 right-0 w-24 sm:w-28 md:w-36" />
    </header>
  );
}

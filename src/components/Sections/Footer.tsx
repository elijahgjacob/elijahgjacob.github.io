import {BoltIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div className="relative bg-gradient-to-b from-neutral-900 to-black px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="group relative overflow-hidden rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 p-2 shadow-xl shadow-blue-500/50 ring-blue-500 ring-offset-2 ring-offset-neutral-100 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/70 focus:outline-none focus:ring-2 sm:p-3"
        href={`/#${SectionId.Hero}`}
        style={{backgroundSize: '200% 200%', animation: 'gradient 3s ease infinite'}}>
        <div
          className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
          style={{background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)'}}
        />
        <ChevronUpIcon className="relative h-6 w-6 bg-transparent text-white transition-transform group-hover:-translate-y-1 sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-10 text-neutral-500">
        <Socials />
      </div>
      <a
        className="-m-2 flex items-center gap-x-1 rounded-md p-2 transition-colors ring-yellow hover:bg-white/5 focus:outline-none focus:ring-2"
        href="https://reactresume.com">
        <BoltIcon className="h-5 w-5 text-yellow" />
        <span className="text-neutral-400">
          Provided by <span className="text-white">React</span>
          <span className="italic text-yellow">Resume</span>
        </span>
      </a>
      <span className="text-sm text-neutral-600">© Copyright {currentYear} Tim Baker</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;

import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className="group -m-1.5 rounded-xl bg-white/10 p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:text-blue-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-800 sm:-m-3 sm:p-3"
          href={href}
          key={label}>
          <Icon className="h-5 w-5 align-baseline transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;

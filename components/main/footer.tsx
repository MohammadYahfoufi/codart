import Link from 'next/link';

import { FOOTER_DATA } from '@/constants';

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg px-4 sm:px-6 py-6">
      <div className="w-full flex flex-col items-center justify-center m-auto gap-6">
        <div className="w-full h-full flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-around gap-6 sm:gap-4 flex-wrap text-center sm:text-left">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[12.5rem] h-auto flex flex-col items-center sm:items-start justify-start gap-2"
            >
              <h3 className="font-bold text-sm sm:text-base uppercase tracking-wide text-white/90">
                {column.title}
              </h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center justify-center sm:justify-start gap-2 py-1 text-sm sm:text-base hover:text-white transition-colors"
                >
                  {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
                  <span>{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="text-sm sm:text-base text-center text-gray-400">
          &copy; Codart {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

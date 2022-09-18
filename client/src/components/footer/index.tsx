import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <div
      className="text-center py-5"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      <a
        href="https://github.com/pankod"
        target="_blank"
        className="block mb-3"
        rel="noreferrer"
      >
        <Image
          src="/images/logo/symbol-type-logo.svg"
          alt="BVENT_LOGO"
          width="180"
          height="40"
        />
      </a>

      <ul className="flex justify-center list-none p-0 m-0">
        <li className="mx-3">
          <a
            href="https://bvent.gitbook.io/bvent/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/gitbook-icon.svg"
              alt="gitbook"
              width="28"
              height="29"
            />
          </a>
        </li>
        <li className="mx-3">
          <a
            href="https://twitter.com/bvent_official"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/twitter-icon.svg"
              alt="twitter"
              width="28"
              height="28"
            />
          </a>
        </li>

        <li className="mx-3">
          <a href="https://t.me/bventofficial" target="_blank" rel="noreferrer">
            <Image
              src="/icons/telegram-icon.svg"
              alt="telegram"
              width="28"
              height="32"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

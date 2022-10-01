import React from 'react';
import { NextSeo } from 'next-seo';

import Layout from '@/components/Layout';
import LogoSection from '@/components/pages/main/LogoSection';
import styled from 'styled-components';
import Description from '@/components/Feature/Description';

const Background = styled.div`
  border-radius: 10px;
  background: radial-gradient(
        99.56% 53.84% at 97.41% 0%,
        rgba(14, 218, 233, 0.2) 0%,
        rgba(0, 0, 0, 0) 100%,
        rgba(14, 218, 233, 0.02) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        78.67% 39.51% at 2.02% 100%,
        rgba(238, 83, 144, 0.2) 0%,
        rgba(238, 83, 144, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    rgba(255, 255, 255, 0.05);

  & .title {
    font-family: "Raleway";
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    padding: 18px 22px;
  }

  & .ecosystem {
    padding: 33px 0;
  }

  & .description {
    padding: 21px 10.5px 31px;
  }
`;

const description = [
  {
    src: '/icons/reviewer.svg',
    type: 'Reviewer',
    title: 'Write a review',
    description:
      'A review with 2 sentences minimum and receive more than one thumbs-up by others',
  },
  {
    src: '/icons/researcher.svg',
    type: 'Review Researcher',
    title: `Share a review
    written by others`,
    description:
      'Share a valid review link and receive more than one thumbs-up by others',
  },
  {
    src: '/icons/rater.svg',
    type: 'Review Rater',
    title: `Rate a review
    written by others`,
    description: `Rating is allowed 5 time daily per wallet

      Only one rate of review is allowed in each event(self-review rating is not prohibited)
      `,
  },
];

const Feature: React.FC = () => {
  return (
    <Layout>
      <NextSeo />
      <LogoSection />
      <Background className="mt-11">
        <div className="text-white height-30 title">
          <p>
            How <span className="text-pink">Bvent</span>
          </p>
          <p>
            <span className="text-aqua">Ecosystem</span> Work
          </p>
        </div>
        <div className="flex justify-center ecosystem">
          <img src="/images/ecosystem.svg" />
        </div>
        <div className="description divide-white/70 divide-y">
          {description.map(({ src, type, title, description }) => (
            <Description
              key={type}
              src={src}
              type={type}
              title={title}
              description={description}
            />
          ))}
        </div>
      </Background>
    </Layout>
  );
};

export default Feature;

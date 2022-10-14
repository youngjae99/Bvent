import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const res = await axios('https://api.bventdao.xyz/events');

  const fields = await Promise.all(
    Object.keys(res.data).map(async (key) => {
      const subevents = await axios(
        `https://api.bventdao.xyz/events/${key}/subevents`,
      );

      const subeventsSitemap = Object.keys(subevents.data).map((id) => {
        return {
          loc: encodeURI(`https://www.bventdao.xyz/event/${key}/${id}`),
          lastmod: new Date().toISOString(),
        };
      });

      return [
        {
          loc: encodeURI(`https://www.bventdao.xyz/event/${key}`),
          lastmod: new Date().toISOString(),
        },
        ...subeventsSitemap,
      ];
    }),
  );

  return getServerSideSitemap(ctx, fields.flat());
};

// Default export to prevent next.js errors
export default function Sitemap() {
  return null;
}

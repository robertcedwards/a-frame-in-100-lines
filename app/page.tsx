import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: ['Next image'],
  image: 'https://0xHashbrown.xyz/park-1.png',
  post_url: 'https://0xHashbrown.xyz/api/frame',
});

export const metadata: Metadata = {
  title: '0xHashbrown.xyz',
  description: 'Maker/Builder',
  openGraph: {
    title: '0xHashbrown',
    description: 'Maker/Builder',
    images: ['https://0xHashbrown.xyz/park-1.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>0xhashbrown.xyz</h1>
    </>
  );
}

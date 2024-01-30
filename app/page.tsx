import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: ['Next image'],
  image: 'https://0xHashbrown.xyz/'
  post_url: 'https://0xHashbrown.xyz',
});

export const metadata: Metadata = {
  title: '0xHashbrown.xyz',
  description: 'Maker/Builder',
  openGraph: {
    title: '0xHashbrown',
    description: 'Maker/Builder',
    images: ['https://0xHashbrown.xyz/linktree.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>0xhashbrown.xyz</h1>
      <div className="linktree">
            <div className="link">
                <a href="https://warpcast.com/0xhashbrown" target="_blank" className="button"><img src="warpcast.png"/>Warpcast</a>
            </div>
            <div className="link">
                <a href="https://hey.com/u/0xhashbrown.lens" target="_blank" className="button">Facebook</a>
            </div>
            {/* Add more links as needed */}
        </div>
    </>
  );
}

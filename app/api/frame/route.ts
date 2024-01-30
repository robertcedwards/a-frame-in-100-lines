import { FrameRequest, getFrameAccountAddress } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  try {
    const body: FrameRequest = await req.json();
    accountAddress = await getFrameAccountAddress(body, { NEYNAR_API_KEY: 'NEYNAR_API_DOCS' });
  } catch (err) {
    console.error(err);
  }

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://0xHashbrown.xyz/linktree.png" />
    <meta property="fc:frame:button:1" content="${accountAddress}" />
    <meta property="fc:frame:post_url" content="https://0xHashbrown.xyz" />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs'; // 'edge' or 'nodejs'

// Image metadata
export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  // Read the image file from public directory
  const imagePath = path.join(process.cwd(), 'public', 'favicon', 'image.png');
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%', // Fully rounded circle
          overflow: 'hidden',
        }}
      >
        <img
          src={base64Image}
          alt="Favicon"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

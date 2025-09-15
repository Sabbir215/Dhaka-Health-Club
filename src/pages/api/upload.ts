import type { APIRoute } from 'astro';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

export const POST: APIRoute = async ({ request }) => {

  // Manually parse the CLOUDINARY_URL at request time.
  const cloudinaryUrl = import.meta.env.CLOUDINARY_URL;

  if (!cloudinaryUrl) {
      console.error('CLOUDINARY_URL is not set in the environment variables.');
      return new Response(JSON.stringify({ error: 'Server configuration error: CLOUDINARY_URL is missing.' }), { status: 500 });
  }

  // Correctly extract credentials from the URL
  const match = cloudinaryUrl.match(/cloudinary:\/\/([^:]+):([^@]+)@(.+)/);
  
  if (!match) {
      console.error('Invalid CLOUDINARY_URL format.');
      return new Response(JSON.stringify({ error: 'Server configuration error: Invalid CLOUDINARY_URL format.' }), { status: 500 });
  }

  const [, apiKey, apiSecret, cloudName] = match;

  cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
  });

  try {
    const body = await request.json();
    const { file: base64Data, mimeType } = body;

    if (!base64Data || !mimeType) {
      return new Response(JSON.stringify({ error: 'Request must include base64 file data and a mimeType.' }), { status: 400 });
    }

    const uploadResult: any = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: 'auto' },
            (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            }
        );

        const buffer = Buffer.from(base64Data, 'base64');
        const stream = Readable.from(buffer);
        stream.pipe(uploadStream);
    });

    return new Response(
      JSON.stringify({ url: uploadResult.secure_url }),
      { status: 200 }
    );

  } catch (error) {
    console.error('--- Cloudinary Upload Error ---');
    console.error(error);
    console.error('-----------------------------\n');
    
    const errorMessage = error.message || 'An unknown error occurred during upload.';
    return new Response(
      JSON.stringify({ error: `Cloudinary API Error: ${errorMessage}` }),
      { status: 500 }
    );
  }
};

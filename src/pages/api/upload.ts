
import type { APIRoute } from 'astro';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

// This configures the API route to handle FormData
export const prerender = false;

async function streamToBuffer(stream: ReadableStream): Promise<Buffer> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }
  return Buffer.concat(chunks);
}

export const POST: APIRoute = async ({ request }) => {
  console.log('--- [/api/upload] FormData request received ---');
  try {
    const cloudinaryUrl = import.meta.env.CLOUDINARY_URL;
    if (!cloudinaryUrl || cloudinaryUrl.includes('your-cloudinary-url')) {
      throw new Error('Server configuration error: Image upload service is not configured.');
    }
    cloudinary.config({ secure: true });
    console.log('[1/4] Cloudinary configured.');

    // Instead of request.json(), we use request.formData()
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      throw new Error('No file found in the form data.');
    }
    console.log(`[2/4] File received: ${file.name}, size: ${file.size} bytes`);

    // Convert the file to a buffer
    const buffer = await streamToBuffer(file.stream());
    console.log('[3/4] File converted to buffer.');

    const uploadResult: any = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: 'auto' },
        (error, result) => {
          if (error) return reject(new Error(error.message));
          resolve(result);
        }
      );
      Readable.from(buffer).pipe(uploadStream);
    });

    console.log('[4/4] Upload to Cloudinary successful.');
    return new Response(JSON.stringify({ url: uploadResult.secure_url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    console.error(`--- [CRITICAL] API CATCH BLOCK: ${errorMessage} ---`);
    return new Response(JSON.stringify({ error: `Upload failed: ${errorMessage}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

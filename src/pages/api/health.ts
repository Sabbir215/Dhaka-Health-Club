import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async () => {
  const hasCloudinary = Boolean(import.meta.env.CLOUDINARY_URL);
  const projectId = import.meta.env.PUBLIC_FIREBASE_PROJECT_ID || null;
  return new Response(
    JSON.stringify({
      ok: true,
      env: { hasCloudinary, PUBLIC_FIREBASE_PROJECT_ID: projectId },
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};

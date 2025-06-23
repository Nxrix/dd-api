function handler(_req) {
  return new Response("Hello, World!");
}
Deno.serve(handler);

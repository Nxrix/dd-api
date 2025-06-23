import { encode } from "https://esm.sh/upng-js@2.1.0";

Deno.serve((req) => {
  const w = 256;
  const h = 256;
  const d = new Uint8Array(w*h*4);
  for (let y=0;y<h;y++)
    for (let x=0;x<w;x++) {
      const i = (x+y*w)*4;
      d[i] = x;
      d[i + 1] = y;
      d[i + 2] = 0;
      d[i + 3] = 255;
    }
  const png = encode([d.buffer],w,h,0);
  return new Response(png, { headers: { "Content-Type": "image/png" } });
});

import { i as server_default } from './chunks/astro.b73366f2.mjs';
import { _ as _page0 } from './chunks/pages/all.ef1d70c0.mjs';
import 'html-escaper';
/* empty css                                 */import 'kleur/colors';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'mime';
import 'node:stream';
import 'svgo';

const pageMap = new Map([["src/pages/index.astro", _page0],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

export { pageMap, renderers };

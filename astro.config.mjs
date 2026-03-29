import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://minecraft-server.example.com',
  integrations: [icon()],
  output: "hybrid",
  adapter: cloudflare()
});
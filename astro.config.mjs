import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true, // Allows access from your network
    port: 3000  // Optional: Change the port if needed
  }
});

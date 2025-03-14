export default {
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Subdirectory for static assets
    rollupOptions: {
      input: 'index.html', // Ensure your entry point is the HTML file
    },
  },
};
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function founderPhotoUploadPlugin(): Plugin {
  return {
    name: 'founder-photo-upload',
    configureServer(server) {
      server.middlewares.use('/api/upload-founder-photo', (req, res) => {
        if (req.method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
          req.on('end', () => {
            try {
              const bodyStr = Buffer.concat(chunks).toString('utf-8');
              const data = JSON.parse(bodyStr);
              if (data?.image) {
                const base64Data = data.image.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');
                const publicDir = path.resolve(process.cwd(), 'public');
                if (!fs.existsSync(publicDir)) {
                  fs.mkdirSync(publicDir, { recursive: true });
                }
                fs.writeFileSync(path.join(publicDir, '1190567.png'), buffer);
                fs.writeFileSync(path.join(publicDir, 'angel-thakral.png'), buffer);
                res.setHeader('Content-Type', 'application/json');
                res.writeHead(200);
                res.end(JSON.stringify({ success: true, message: 'Image updated successfully' }));
                return;
              }
            } catch (err) {
              console.error('Error saving founder image:', err);
            }
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(400);
            res.end(JSON.stringify({ error: 'Failed to upload image' }));
          });
          return;
        }
        res.writeHead(405);
        res.end();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [founderPhotoUploadPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

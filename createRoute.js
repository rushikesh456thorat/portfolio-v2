// copyRoutes.js
import fs from 'fs';
import path from 'path';

const distDir = './dist';
const routes = ['about', 'projects', 'blog', 'project/notrious','project/notebook','project/bookingbuddy','project/mathparser']; 

routes.forEach((route) => {
  const fullPath = path.join(distDir, route);
  const indexHtmlPath = path.join(fullPath, 'index.html');

  fs.mkdirSync(fullPath, { recursive: true });

 
  fs.copyFileSync(path.join(distDir, 'index.html'), indexHtmlPath);

  console.log(`✅ Created ${route}/index.html`);
});

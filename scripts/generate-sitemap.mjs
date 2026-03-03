import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const SITE_URL = process.env.VITE_SITE_URL || 'https://fayed-agency.com';

// Import tours data
const toursPath = path.join(projectRoot, 'src/data/tours.ts');
const toursContent = fs.readFileSync(toursPath, 'utf-8');

// Parse tour IDs from the tours.ts file
const tourIdMatches = toursContent.match(/id:\s*["']([^"']+)["']/g) || [];
const tourIds = tourIdMatches.map(match => match.match(/["']([^"']+)["']/)[1]);

// Static routes configuration
const staticRoutes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/b2b', priority: 0.8, changefreq: 'monthly' },
];

// Generate dynamic tour routes
const dynamicRoutes = tourIds.map(id => ({
  path: `/tour/${id}`,
  priority: 0.7,
  changefreq: 'weekly',
}));

// Combine all routes
const allRoutes = [...staticRoutes, ...dynamicRoutes];

// Generate sitemap XML
const generateSitemapXML = (routes) => {
  const today = new Date().toISOString().split('T')[0];

  const urls = routes
    .map(route => {
      const url = `${SITE_URL}${route.path}`;
      return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

// Escape XML special characters
const escapeXml = (str) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

// Create sitemap
const sitemapXML = generateSitemapXML(allRoutes);
const outputPath = path.join(projectRoot, 'public/sitemap.xml');

// Ensure public directory exists
if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

// Write sitemap file
fs.writeFileSync(outputPath, sitemapXML, 'utf-8');

console.log(`✓ Sitemap generated successfully at ${outputPath}`);
console.log(`✓ Total URLs: ${allRoutes.length}`);
console.log(`✓ Static routes: ${staticRoutes.length}`);
console.log(`✓ Dynamic routes: ${dynamicRoutes.length}`);
console.log(`✓ Site URL: ${SITE_URL}`);

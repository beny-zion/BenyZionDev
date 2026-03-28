import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

async function generateOG() {
  const width = 1200;
  const height = 630;

  // Create OG image with developer theme
  const svg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0f172a"/>
        <stop offset="100%" style="stop-color:#1e293b"/>
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)"/>

    <!-- Grid pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" stroke-width="0.5" opacity="0.3"/>
    </pattern>
    <rect width="${width}" height="${height}" fill="url(#grid)"/>

    <!-- Terminal window -->
    <rect x="60" y="80" width="500" height="470" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

    <!-- Terminal header -->
    <rect x="60" y="80" width="500" height="40" rx="12" fill="#1e293b"/>
    <rect x="60" y="108" width="500" height="12" fill="#1e293b"/>
    <circle cx="85" cy="100" r="6" fill="#ef4444"/>
    <circle cx="105" cy="100" r="6" fill="#eab308"/>
    <circle cx="125" cy="100" r="6" fill="#22c55e"/>
    <text x="180" y="105" font-family="monospace" font-size="13" fill="#94a3b8">developer.ts</text>

    <!-- Code content -->
    <text x="85" y="150" font-family="monospace" font-size="14" fill="#7dd3fc">const</text>
    <text x="125" y="150" font-family="monospace" font-size="14" fill="#e2e8f0">developer = {</text>
    <text x="105" y="175" font-family="monospace" font-size="14" fill="#a5b4fc">name</text>
    <text x="145" y="175" font-family="monospace" font-size="14" fill="#e2e8f0">:</text>
    <text x="160" y="175" font-family="monospace" font-size="14" fill="#86efac">"Beny Zion"</text>
    <text x="268" y="175" font-family="monospace" font-size="14" fill="#e2e8f0">,</text>
    <text x="105" y="200" font-family="monospace" font-size="14" fill="#a5b4fc">role</text>
    <text x="137" y="200" font-family="monospace" font-size="14" fill="#e2e8f0">:</text>
    <text x="152" y="200" font-family="monospace" font-size="14" fill="#86efac">"Fullstack Developer"</text>
    <text x="332" y="200" font-family="monospace" font-size="14" fill="#e2e8f0">,</text>
    <text x="105" y="225" font-family="monospace" font-size="14" fill="#a5b4fc">email</text>
    <text x="150" y="225" font-family="monospace" font-size="14" fill="#e2e8f0">:</text>
    <text x="165" y="225" font-family="monospace" font-size="14" fill="#86efac">"b4123190@gmail.com"</text>
    <text x="340" y="225" font-family="monospace" font-size="14" fill="#e2e8f0">,</text>
    <text x="105" y="250" font-family="monospace" font-size="14" fill="#a5b4fc">focus</text>
    <text x="147" y="250" font-family="monospace" font-size="14" fill="#e2e8f0">: [</text>
    <text x="125" y="275" font-family="monospace" font-size="14" fill="#86efac">"Next.js"</text>
    <text x="205" y="275" font-family="monospace" font-size="14" fill="#e2e8f0">,</text>
    <text x="218" y="275" font-family="monospace" font-size="14" fill="#86efac">"React"</text>
    <text x="280" y="275" font-family="monospace" font-size="14" fill="#e2e8f0">,</text>
    <text x="125" y="300" font-family="monospace" font-size="14" fill="#86efac">"Node.js"</text>
    <text x="213" y="300" font-family="monospace" font-size="14" fill="#e2e8f0">,</text>
    <text x="226" y="300" font-family="monospace" font-size="14" fill="#86efac">"AI-Driven Dev"</text>
    <text x="105" y="325" font-family="monospace" font-size="14" fill="#e2e8f0">],</text>
    <text x="105" y="350" font-family="monospace" font-size="14" fill="#a5b4fc">status</text>
    <text x="155" y="350" font-family="monospace" font-size="14" fill="#e2e8f0">:</text>
    <text x="170" y="350" font-family="monospace" font-size="14" fill="#86efac">"Available"</text>
    <text x="105" y="375" font-family="monospace" font-size="14" fill="#a5b4fc">isAvailable</text>
    <text x="200" y="375" font-family="monospace" font-size="14" fill="#e2e8f0">:</text>
    <text x="215" y="375" font-family="monospace" font-size="14" fill="#7dd3fc">true</text>
    <text x="85" y="400" font-family="monospace" font-size="14" fill="#e2e8f0">};</text>

    <!-- Right side - UI preview -->
    <rect x="620" y="80" width="520" height="470" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>

    <!-- Available badge -->
    <rect x="660" y="140" width="140" height="28" rx="14" fill="#ecfdf5"/>
    <text x="685" y="159" font-family="Arial, sans-serif" font-size="13" fill="#059669" font-weight="bold">Available for hire</text>

    <!-- Name -->
    <text x="660" y="215" font-family="Arial, sans-serif" font-size="42" fill="#0f172a" font-weight="bold">Beny Zion</text>

    <!-- Title -->
    <text x="660" y="255" font-family="Arial, sans-serif" font-size="20" fill="#64748b">Full-Stack Developer</text>

    <!-- Description -->
    <text x="660" y="300" font-family="Arial, sans-serif" font-size="15" fill="#94a3b8">React · Next.js · Node.js · AI-Driven Development</text>

    <!-- CTA Button -->
    <rect x="660" y="340" width="180" height="44" rx="8" fill="#0f172a"/>
    <text x="703" y="367" font-family="Arial, sans-serif" font-size="15" fill="#ffffff" font-weight="bold">View Portfolio →</text>

    <!-- Decorative elements -->
    <text x="660" y="440" font-family="monospace" font-size="12" fill="#cbd5e1">$ GET /api/portfolio</text>
    <text x="660" y="460" font-family="monospace" font-size="12" fill="#22c55e">→ 200 OK</text>
    <text x="660" y="480" font-family="monospace" font-size="12" fill="#94a3b8">{ "projects": 3, "skills": 15+, "status": "deploying..." }</text>

    <!-- Divider line (slider effect) -->
    <line x1="600" y1="80" x2="600" y2="550" stroke="#10b981" stroke-width="3"/>
    <circle cx="600" cy="315" r="18" fill="#10b981"/>
    <text x="589" y="320" font-family="monospace" font-size="16" fill="#ffffff">↔</text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(join(publicDir, 'og-image.png'));

  console.log('✅ OG image generated: public/og-image.png (1200x630)');
}

generateOG().catch(console.error);

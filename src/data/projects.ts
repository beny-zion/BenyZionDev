import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'torino',
    title: 'TORINO',
    description: {
      he: 'פלטפורמת E-Commerce למכירת מותגי בוטיק בייבוא אישי מהחברות המובילות בעולם, בעיקר מארה"ב.',
      en: 'E-Commerce platform for selling boutique brands through personal import from leading global companies, primarily from the US.',
    },
    xray: {
      he: 'פיתוח Fullstack מלא הכולל מערכת CRM מתקדמת לניהול הזמנות ולקוחות. ארכיטקטורת Backend מבוססת MongoDB לניהול סכמות דינמיות של מוצרים, סינון ופגינציה חכמה.',
      en: 'Full Fullstack development including an advanced CRM system for order and customer management. Backend architecture based on MongoDB for dynamic product schemas, smart filtering and pagination.',
    },
    url: 'https://www.torinoil.com',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'CRM'],
    image: 'https://www.torinoil.com/ToWhatsApp.jpg',
  },
  {
    id: 'itpa',
    title: 'ITPA',
    description: {
      he: 'פלטפורמת הניהול והתוכן הרשמית של איגוד הבריכות הטיפוליות.',
      en: 'The official management and content platform for the Israeli Therapeutic Pools Association.',
    },
    xray: {
      he: 'תכנון ופריסת האפליקציה מבוססת Next.js ו-Supabase (PostgreSQL), כולל סנכרון נתונים בזמן אמת.',
      en: 'Application design and deployment based on Next.js and Supabase (PostgreSQL), including real-time data synchronization.',
    },
    url: 'https://www.itpa.org.il',
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind'],
    image: 'https://www.itpa.org.il/og-image2.jpg',
  },
  {
    id: 'petition',
    title: 'Therapeutic Pools Petition',
    description: {
      he: 'אפליקציית רשת חיה ומהירה לאיסוף חתימות ולניהול קמפיין העצומה.',
      en: 'A live, fast web application for collecting signatures and managing the petition campaign.',
    },
    xray: {
      he: 'כולל מערכת אימות משתמשים ופריסה רציפה (CI/CD) באמצעות Vercel.',
      en: 'Includes user authentication system and continuous deployment (CI/CD) via Vercel.',
    },
    url: 'https://ibt-seven.vercel.app',
    tech: ['Next.js', 'Vercel', 'Auth', 'CI/CD'],
    image: 'https://ibt-seven.vercel.app/og-image.png',
  },
];

const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'app/about/page.tsx', image: '/images/team-work.jpg' },
  { file: 'app/contact/page.tsx', image: '/images/backyard.jpg' },
  { file: 'app/gallery/page.tsx', image: '/images/backyard.jpg' },
  { file: 'app/es/sobre/page.tsx', image: '/images/team-work.jpg' },
  { file: 'app/es/contacto/page.tsx', image: '/images/backyard.jpg' },
  { file: 'app/es/galeria/page.tsx', image: '/images/backyard.jpg' },
  { file: 'app/es/page.tsx', image: '/images/team-work.jpg' },
];

pages.forEach(({ file, image }) => {
  const filePath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file} (not found)`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove ImagePlaceholder import if present
  if (content.includes('import ImagePlaceholder')) {
    content = content.replace(/import ImagePlaceholder from '@\/components\/ImagePlaceholder'\n/g, '');
    
    // Add Image import if not present
    if (!content.includes("import Image from 'next/image'")) {
      content = content.replace(
        /(import.*from 'next\/link')/,
        "$1\nimport Image from 'next/image'"
      );
    }
  }
  
  // Replace ImagePlaceholder components (simple case)
  content = content.replace(
    /<ImagePlaceholder\s+text="([^"]+)"\s+height="(h-\d+)"\s*\/>/g,
    (match, text, height) => {
      const cleanText = text.replace(/[\[\]]/g, '');
      return `<div className="relative ${height} rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="${image}"
                  alt="${cleanText}"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>`;
    }
  );
  
  // Replace ImagePlaceholder with className
  content = content.replace(
    /<ImagePlaceholder\s+text="([^"]+)"\s+height="(h-\d+)"\s+className="([^"]+)"\s*\/>/g,
    (match, text, height, className) => {
      const cleanText = text.replace(/[\[\]]/g, '');
      return `<div className="relative ${height} ${className} overflow-hidden shadow-lg">
                <Image
                  src="${image}"
                  alt="${cleanText}"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>`;
    }
  );
  
  // Handle multiline ImagePlaceholder
  content = content.replace(
    /<ImagePlaceholder\s+text="([^"]+)"\s+height="([^"]+)"\s+\/>/gm,
    (match, text, height) => {
      const cleanText = text.replace(/[\[\]]/g, '');
      return `<div className="relative ${height} rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="${image}"
                  alt="${cleanText}"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>`;
    }
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Updated ${file}`);
});

console.log('\nAll pages updated!');

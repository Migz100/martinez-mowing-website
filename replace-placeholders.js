const fs = require('fs');
const path = require('path');

const imageMap = {
  maintenance: '/images/maintenance.jpg',
  'retaining-walls': '/images/retaining-walls.jpg',
  'outdoor-structures': '/images/outdoor-structures.jpg',
  irrigation: '/images/irrigation.jpg',
};

const serviceDirs = [
  'app/services/maintenance',
  'app/services/retaining-walls',
  'app/services/outdoor-structures',
  'app/services/irrigation'
];

serviceDirs.forEach(dir => {
  const filePath = path.join(process.cwd(), dir, 'page.tsx');
  
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const serviceName = path.basename(dir);
  const defaultImage = imageMap[serviceName];
  
  // Replace ImagePlaceholder with Image component
  content = content.replace(
    /<ImagePlaceholder\s+text="([^"]+)"\s+height="(h-\d+)"\s*\/>/g,
    (match, text, height) => {
      const cleanText = text.replace(/[\[\]]/g, '');
      return `<div className="relative ${height} rounded-xl overflow-hidden shadow-lg">
              <Image
                src="${defaultImage}"
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
                src="${defaultImage}"
                alt="${cleanText}"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>`;
    }
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
});

console.log('All service pages updated!');

#!/bin/bash

# Script to replace ImagePlaceholder imports in remaining service pages

cd ~/Desktop/martinez-mowing-website

# Remove ImagePlaceholder imports and add Image import for remaining service pages
for file in app/services/{maintenance,retaining-walls,outdoor-structures,irrigation}/page.tsx; do
  echo "Processing $file..."
  
  # Add Image import if not present and remove ImagePlaceholder import
  if grep -q "import ImagePlaceholder" "$file"; then
    # Check if Image is already imported
    if ! grep -q "import Image from 'next/image'" "$file"; then
      sed -i '' 's/import { FaCheckCircle }/import Image from '\''next\/image'\''\nimport { FaCheckCircle }/' "$file"
    fi
    
    # Remove ImagePlaceholder import line
    sed -i '' '/import ImagePlaceholder/d' "$file"
  fi
done

echo "Done!"

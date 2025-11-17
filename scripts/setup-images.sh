#!/bin/bash

# NordMaison Image Setup Script
# This script helps you organize and verify your images

echo "🏠 NordMaison - Image Setup Helper"
echo "=================================="
echo ""

# Create image directories
echo "📁 Creating image directories..."
mkdir -p public/houses
mkdir -p public/about
mkdir -p public/process

echo "✅ Directories created!"
echo ""

# Check for images
echo "🔍 Checking for images..."
echo ""

images_needed=(
  "public/hero-bg.jpg:Hero background (1920x1080)"
  "public/houses/fjord-90.jpg:Fjord 90 model (800x600)"
  "public/houses/lofoten-120.jpg:Lofoten 120 model (800x600)"
  "public/houses/nordkapp-150.jpg:Nordkapp 150 model (800x600)"
  "public/houses/aurore-80.jpg:Aurore 80 model (800x600)"
  "public/houses/bergen-110.jpg:Bergen 110 model (800x600)"
  "public/houses/tromso-135.jpg:Tromsø 135 model (800x600)"
  "public/about/factory.jpg:About page - Factory (1200x800)"
  "public/about/team.jpg:About page - Team (1200x800) [optional]"
  "public/process/production.jpg:Process - Production (1200x800) [optional]"
  "public/process/transport.jpg:Process - Transport (1200x800) [optional]"
  "public/process/assembly.jpg:Process - Assembly (1200x800) [optional]"
)

missing_count=0

for item in "${images_needed[@]}"; do
  IFS=':' read -r filepath description <<< "$item"
  if [ -f "$filepath" ]; then
    size=$(du -h "$filepath" | cut -f1)
    echo "✅ $description - Found ($size)"
  else
    echo "❌ $description - Missing"
    echo "   Expected at: $filepath"
    missing_count=$((missing_count + 1))
  fi
done

echo ""
echo "=================================="
if [ $missing_count -eq 0 ]; then
  echo "🎉 All images ready! Your site will look beautiful!"
else
  echo "⚠️  $missing_count image(s) missing"
  echo ""
  echo "📝 To add images:"
  echo "1. Generate images using AI (see image-prompts.md)"
  echo "2. Save them to the paths shown above"
  echo "3. Run this script again to verify"
fi
echo ""

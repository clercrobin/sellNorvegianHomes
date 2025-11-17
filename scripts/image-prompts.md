# 🎨 Image Generation Prompts for NordMaison

Use these prompts with DALL-E, Midjourney, Stable Diffusion, or any AI image generator.

## 🏠 House Model Images

### Fjord 90 (Plain-pied, 90m²)
**File**: `public/houses/fjord-90.jpg`
**Size**: 800x600px
**Prompt**:
```
Modern single-story Norwegian prefab house, 90 square meters, clean white and natural wood exterior, horizontal wood siding, flat or mono-pitch roof, large sliding glass doors, small front garden with gravel path, Scandinavian minimalist architecture, bright daylight, photorealistic, 8K architectural photography, professional real estate photo, front 3/4 view, nature background
```

---

### Lofoten 120 (Étage, 120m²)
**File**: `public/houses/lofoten-120.jpg`
**Size**: 800x600px
**Prompt**:
```
Contemporary two-story Norwegian wooden house, 120 square meters, dark grey-brown wood cladding, pitched roof, balcony on second floor, three large windows, surrounded by Nordic landscape with birch trees, autumn colors, soft overcast lighting, photorealistic architectural photography, 8K, Scandinavian modern design, professional exterior shot
```

---

### Nordkapp 150 (Premium étage, 150m²)
**File**: `public/houses/nordkapp-150.jpg`
**Size**: 800x600px
**Prompt**:
```
Luxury modern Norwegian house, 150 square meters, two-story, combination of black vertical wood siding and natural cedar, asymmetric roofline, floor-to-ceiling windows, integrated garage, landscaped garden with native plants, golden hour sunset lighting, photorealistic, ultra-detailed, architectural masterpiece, 8K professional photography, magazine quality
```

---

### Aurore 80 (Chalet, 80m²)
**File**: `public/houses/aurore-80.jpg`
**Size**: 800x600px
**Prompt**:
```
Charming Norwegian mountain chalet, 80 square meters, traditional steep pitched roof, honey-colored log cabin style, red-painted wood details, stone foundation, covered wooden terrace, surrounded by wildflowers and mountain meadow, distant snowy peaks, bright sunny day, photorealistic, cozy cabin aesthetic, professional real estate photography, 8K
```

---

### Bergen 110 (Modern étage, 110m²)
**File**: `public/houses/bergen-110.jpg`
**Size**: 800x600px
**Prompt**:
```
Ultra-modern Norwegian house, 110 square meters, cubic architecture, flat roof, dark charcoal wood cladding, extra-large picture windows, minimalist design, small urban garden with concrete pathway and ornamental grasses, overcast Scandinavian sky, photorealistic architectural photography, contemporary design, 8K, professional exterior shot
```

---

### Tromsø 135 (Family étage, 135m²)
**File**: `public/houses/tromso-135.jpg`
**Size**: 800x600px
**Prompt**:
```
Spacious Norwegian family house, 135 square meters, two-story traditional design, natural wood siding with white trim, gabled roof, balcony with wood railings, four visible windows, green lawn with children's play area in background, spring season, soft natural lighting, photorealistic, warm and inviting atmosphere, 8K architectural photography
```

---

## 🌄 Hero Background Image

**File**: `public/hero-bg.jpg`
**Size**: 1920x1080px
**Prompt**:
```
Wide aerial view of a modern Norwegian wooden house in a pristine forest clearing, surrounded by pine trees and mountains in the background, light snow on the ground, sunset golden hour lighting, photorealistic architectural photography, 8K, cinematic composition, Scandinavian design, minimalist aesthetic, natural wood exterior, large windows reflecting sky, professional real estate photography, shallow depth of field
```

**Alternative**:
```
Cozy modern Norwegian log cabin nestled in snowy landscape, smoke rising from chimney, warm interior lights glowing through floor-to-ceiling windows, twilight blue hour, evergreen forest backdrop, photorealistic, cinematic lighting, architectural digest style, 8K
```

---

## 🏭 About Page Images

### Factory Image
**File**: `public/about/factory.jpg`
**Size**: 1200x800px
**Prompt**:
```
Norwegian timber construction facility interior, modern factory setting, precision-cut wooden beams and panels, skilled craftsmen assembling prefab house modules, clean industrial workspace, natural wood materials stacked, quality control process, professional industrial photography, bright even lighting, 8K, documentary style, wide angle shot
```

---

## 🔧 Process Images (Optional but Recommended)

### Production
**File**: `public/process/production.jpg`
**Size**: 1200x800px
**Prompt**:
```
CNC woodworking machinery cutting precise timber panels in modern Norwegian factory, robotic precision, stacks of sustainable wood materials, clean industrial environment, wide angle shot, professional industrial photography, natural wood tones, 8K, bright lighting
```

### Transport
**File**: `public/process/transport.jpg`
**Size**: 1200x800px
**Prompt**:
```
Large prefab house modules being transported on specialized trucks through scenic Norwegian countryside, mountains in background, professional logistics photography, documentary style, golden hour lighting, 8K, cinematic
```

### Assembly
**File**: `public/process/assembly.jpg`
**Size**: 1200x800px
**Prompt**:
```
Crane lifting prefab house module into place on construction site in French countryside, construction workers guiding the placement, partially assembled house visible, blue sky, professional construction photography, wide angle, 8K, safety helmets, organized site
```

---

## 💡 Pro Tips

1. **Consistency**: Use the same weather/lighting conditions for related images
2. **Negative Prompts** (if supported):
   ```
   Negative: distorted, blurry, low quality, cartoon, CGI, oversaturated, people visible through windows, power lines, urban clutter, plastic siding
   ```
3. **Generate Variations**: Create 3-4 versions of each image and pick the best
4. **Compression**: After generation, compress images to under 300KB using tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (Mac app)

---

## 🎯 Quick Start Guide

1. **Choose your AI tool**: DALL-E 3, Midjourney, Stable Diffusion, Leonardo.ai
2. **Start with essentials**: Generate the 6 house models and hero image first
3. **Save correctly**: Name files exactly as shown above
4. **Verify**: Run `bash scripts/setup-images.sh` to check all images
5. **Optimize**: Compress images before deployment

---

## 🌐 Recommended AI Image Tools

- **DALL-E 3** (ChatGPT Plus) - Best for photorealism
- **Midjourney** (Discord) - Best for artistic architectural shots
- **Leonardo.ai** - Free tier available, good quality
- **Stable Diffusion** - Free, local generation
- **Ideogram** - Good for architectural photography

---

Need help? The setup script will guide you through which images are missing!

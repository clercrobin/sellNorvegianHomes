# 🏠 NordMaison - Guide de Configuration

Bienvenue ! Ce guide vous aidera à mettre en place et déployer votre site marketing NordMaison.

## 📋 Table des Matières

1. [Installation rapide](#installation-rapide)
2. [Configuration des variables d'environnement](#configuration-des-variables-denvironnement)
3. [Configuration des services](#configuration-des-services)
4. [Développement local](#développement-local)
5. [Déploiement](#déploiement)
6. [Personnalisation](#personnalisation)

---

## 🚀 Installation Rapide

### Prérequis

- Node.js 18+ et npm
- Git
- Un compte GitHub (pour le déploiement)

### Étapes d'installation

```bash
# 1. Cloner le repository
git clone https://github.com/votre-nom/sellNorvegianHomes.git
cd sellNorvegianHomes

# 2. Installer les dépendances
npm install

# 3. Créer le fichier de configuration
cp .env.example .env.local

# 4. Lancer en mode développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## ⚙️ Configuration des Variables d'Environnement

### 1. Fichier `.env.local`

Créez un fichier `.env.local` à la racine du projet (ne JAMAIS commit ce fichier !).

### 2. Configuration minimale (mode test)

Pour démarrer rapidement en mode test (sans API réelles) :

```bash
# Mode console (les emails s'affichent dans les logs)
EMAIL_PROVIDER=console
EMAIL_FROM=contact@nordmaison.fr
EMAIL_TO=sales@nordmaison.fr
```

Avec cette configuration :
- ✅ Le site fonctionne immédiatement
- ✅ Les formulaires fonctionnent
- ✅ Les emails s'affichent dans la console du serveur
- ❌ Pas de vrais emails envoyés
- ❌ Pas d'analytics actifs

### 3. Configuration complète (production)

```bash
# ========================================
# EMAIL SERVICE (choisir UN provider)
# ========================================

# Option 1: Resend (recommandé) - https://resend.com
EMAIL_PROVIDER=resend
EMAIL_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=contact@nordmaison.fr
EMAIL_TO=sales@nordmaison.fr

# Option 2: SendGrid - https://sendgrid.com
# EMAIL_PROVIDER=sendgrid
# EMAIL_API_KEY=SG.xxxxxxxxxxxxx

# Option 3: Brevo (entreprise française) - https://brevo.com
# EMAIL_PROVIDER=brevo
# EMAIL_API_KEY=xkeysib-xxxxxxxxxxxxx

# ========================================
# ANALYTICS & TRACKING
# ========================================

# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Meta Pixel (Facebook/Instagram Ads)
NEXT_PUBLIC_META_PIXEL_ID=1234567890

# ========================================
# LIVE CHAT - Tawk.to (gratuit)
# ========================================

NEXT_PUBLIC_TAWK_PROPERTY_ID=xxxxxxxxxxxxx
NEXT_PUBLIC_TAWK_WIDGET_ID=xxxxxxxxxxxxx

# ========================================
# DÉPLOIEMENT
# ========================================

NEXT_PUBLIC_SITE_URL=https://nordmaison.fr
```

---

## 🔧 Configuration des Services

### 📧 Email (Resend - Recommandé)

**Pourquoi Resend ?**
- Gratuit jusqu'à 3000 emails/mois
- Intégration parfaite avec Next.js
- Setup en 5 minutes
- Excellent délivrabilité

**Configuration :**

1. Créer un compte sur [resend.com](https://resend.com)
2. Aller dans **API Keys** → **Create API Key**
3. Copier la clé (commence par `re_`)
4. Ajouter dans `.env.local` :
   ```bash
   EMAIL_PROVIDER=resend
   EMAIL_API_KEY=re_xxxxxxxxxxxxx
   EMAIL_FROM=contact@nordmaison.fr
   EMAIL_TO=sales@nordmaison.fr
   ```

5. **Important :** Vérifier votre domaine
   - Dans Resend → **Domains** → **Add Domain**
   - Ajouter les enregistrements DNS fournis
   - Attendre la vérification (quelques minutes à quelques heures)

**Alternative : Mode console (test)**
```bash
EMAIL_PROVIDER=console
```
Les emails s'affichent dans les logs du serveur au lieu d'être envoyés.

---

### 📊 Google Analytics 4

**Setup (5 minutes) :**

1. Aller sur [analytics.google.com](https://analytics.google.com)
2. Créer une propriété **Google Analytics 4**
3. Obtenir votre **Measurement ID** (format : `G-XXXXXXXXXX`)
4. Ajouter dans `.env.local` :
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

**Vérification :**
- Lancer le site en dev : `npm run dev`
- Ouvrir [http://localhost:3000](http://localhost:3000)
- Dans Google Analytics → Rapports → Temps réel
- Vous devriez voir 1 utilisateur actif

---

### 📱 Meta Pixel (Facebook/Instagram Ads)

**Setup :**

1. Aller dans le [Meta Business Manager](https://business.facebook.com)
2. Menu → **Gestionnaire d'événements** → **Connecter des sources de données** → **Web**
3. Créer un pixel
4. Copier le **Pixel ID** (ex: `1234567890`)
5. Ajouter dans `.env.local` :
   ```bash
   NEXT_PUBLIC_META_PIXEL_ID=1234567890
   ```

**Événements trackés automatiquement :**
- `PageView` : Chaque visite de page
- `Lead` : Soumission formulaire de contact
- `Lead` : Téléchargement guide gratuit
- `ViewContent` : Visite page modèle de maison

---

### 💬 Live Chat (Tawk.to - Gratuit)

**Setup (5 minutes) :**

1. Créer un compte sur [tawk.to](https://www.tawk.to)
2. Créer une **Property**
3. Aller dans **Administration** → **Property Settings**
4. Copier :
   - **Property ID**
   - **Widget ID**
5. Ajouter dans `.env.local` :
   ```bash
   NEXT_PUBLIC_TAWK_PROPERTY_ID=xxxxxxxxxxxxx
   NEXT_PUBLIC_TAWK_WIDGET_ID=xxxxxxxxxxxxx
   ```

Le widget de chat apparaîtra automatiquement en bas à droite du site.

**Fonctionnalités :**
- Chat en direct avec les visiteurs
- Réponses automatiques (configurables)
- Application mobile pour répondre en déplacement
- Historique des conversations
- Totalement gratuit !

---

## 💻 Développement Local

### Lancer le serveur de développement

```bash
npm run dev
```

- Site accessible sur [http://localhost:3000](http://localhost:3000)
- Hot reload activé (modifications visibles immédiatement)
- Logs visibles dans le terminal

### Structure du projet

```
sellNorvegianHomes/
├── app/                      # Pages Next.js 14 (App Router)
│   ├── page.tsx             # Page d'accueil
│   ├── maisons/             # Catalogue de maisons
│   ├── blog/                # Blog (articles MDX)
│   ├── ressources/          # Guides téléchargeables
│   ├── calculateur/         # Calculateur de budget
│   ├── contact/             # Formulaire de contact
│   └── api/                 # Routes API
│       ├── contact/         # API formulaire contact
│       └── lead-magnet/     # API téléchargement guides
├── components/              # Composants React réutilisables
│   ├── ui/                  # Composants UI (shadcn/ui)
│   ├── Analytics.tsx        # Google Analytics & Meta Pixel
│   ├── LiveChat.tsx         # Widget Tawk.to
│   └── StructuredData.tsx   # SEO (schema.org)
├── lib/                     # Utilitaires et logique métier
│   ├── houses.ts            # Données des modèles de maisons
│   ├── faq.ts               # Questions fréquentes
│   ├── blog.ts              # Gestion des articles blog
│   ├── lead-magnets.ts      # Configuration des guides
│   ├── email-service.ts     # Envoi d'emails
│   ├── lead-storage.ts      # Stockage des leads
│   └── rate-limit.ts        # Rate limiting API
├── content/                 # Contenu
│   └── blog/                # Articles de blog (MDX)
├── public/                  # Fichiers statiques
│   ├── houses/              # Images des maisons
│   └── downloads/           # Guides PDF
└── data/                    # Données générées
    └── leads.json           # Leads capturés (gitignored)
```

### Commandes utiles

```bash
# Développement
npm run dev              # Lancer en mode dev

# Production
npm run build            # Build pour production
npm run start            # Lancer le build de production

# Qualité du code
npm run lint             # Vérifier le code (ESLint)
npm run format           # Formater le code (Prettier)
```

---

## 🌐 Déploiement

### Déploiement sur Vercel (Recommandé)

**Pourquoi Vercel ?**
- Créé par l'équipe de Next.js
- Déploiement automatique à chaque commit
- SSL gratuit
- CDN mondial
- Gratuit pour les projets personnels

**Étapes :**

1. **Créer un compte Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - S'inscrire avec GitHub

2. **Importer le projet**
   - Cliquer sur **Add New** → **Project**
   - Sélectionner votre repository GitHub
   - Cliquer sur **Import**

3. **Configurer les variables d'environnement**
   - Dans **Environment Variables**, ajouter TOUTES les variables de votre `.env.local`
   - ⚠️ **Important :** Ne PAS commit `.env.local` dans Git !

4. **Déployer**
   - Cliquer sur **Deploy**
   - Attendre 2-3 minutes
   - Votre site est en ligne ! 🎉

5. **Configuration du domaine (optionnel)**
   - Dans **Settings** → **Domains**
   - Ajouter votre domaine personnalisé
   - Configurer les DNS chez votre registrar
   - Vercel gère le SSL automatiquement

**URL de déploiement :**
- Automatique : `votre-projet.vercel.app`
- Personnalisée : `nordmaison.fr` (après configuration)

### Déploiements automatiques

Chaque fois que vous poussez sur GitHub :
- ✅ Vercel détecte le push
- ✅ Lance un build automatique
- ✅ Déploie si le build réussit
- ✅ Vous recevez un email de confirmation

**Branches :**
- `main` → Production ([nordmaison.fr](https://nordmaison.fr))
- Autres branches → Preview URLs

---

## 🎨 Personnalisation

### 1. Modifier les couleurs du thème

Fichier : `app/globals.css`

```css
@layer base {
  :root {
    /* Couleur principale (vert nordique) */
    --primary: 155 45% 25%;        /* Modifier ici */

    /* Autres couleurs */
    --secondary: ...
    --accent: ...
  }
}
```

### 2. Ajouter/Modifier des modèles de maisons

Fichier : `lib/houses.ts`

```typescript
export const houses = [
  {
    id: 1,
    name: "Nouvelle Maison",
    slug: "nouvelle-maison",
    description: "Description courte",
    price: 280000,
    surface: 140,
    bedrooms: 4,
    bathrooms: 2,
    // ... voir le fichier pour le format complet
  },
  // Ajouter ici
];
```

### 3. Créer un article de blog

1. Créer un fichier `.mdx` dans `content/blog/` :

```bash
content/blog/mon-nouvel-article.mdx
```

2. Ajouter le frontmatter :

```mdx
---
title: "Titre de l'article"
description: "Description courte"
date: "2024-01-15"
author: "Votre Nom"
category: "Construction"
image: "/blog/mon-image.jpg"
---

## Mon contenu

Écrivez votre article ici en Markdown...
```

3. L'article apparaît automatiquement sur `/blog`

### 4. Ajouter un guide téléchargeable

Fichier : `lib/lead-magnets.ts`

```typescript
export const leadMagnets: LeadMagnet[] = [
  // ... guides existants
  {
    id: "mon-nouveau-guide",
    title: "Titre du guide",
    description: "Description courte",
    longDescription: "Description détaillée...",
    pages: 30,
    category: "Construction",
    thumbnail: "/downloads/mon-guide-thumb.jpg",
    fileName: "mon-guide.pdf",
    fileSize: "5.2 MB",
    benefits: [
      "Bénéfice 1",
      "Bénéfice 2",
      // ...
    ],
  },
];
```

Placer le PDF dans `public/downloads/mon-guide.pdf`.

### 5. Modifier les questions FAQ

Fichier : `lib/faq.ts`

```typescript
export const faqItems = [
  {
    id: 1,
    question: "Ma question ?",
    answer: "Ma réponse détaillée...",
    category: "general",
  },
  // Ajouter ici
];
```

---

## 📊 Gestion des Leads

### Où sont stockés les leads ?

Par défaut, les leads sont sauvegardés dans : `data/leads.json`

⚠️ **Ce fichier est gitignored** (ne sera jamais commité).

### Format d'un lead

```json
{
  "id": "lead_1234567890_abc123",
  "firstName": "Jean",
  "lastName": "Dupont",
  "email": "jean.dupont@example.com",
  "phone": "+33 6 12 34 56 78",
  "region": "Île-de-France",
  "budget": "200000-300000",
  "projectType": "Maison individuelle",
  "message": "Je suis intéressé...",
  "source": "website-contact-form",
  "status": "new",
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

### Exporter les leads

```bash
# Copier le fichier des leads
cp data/leads.json leads-backup-$(date +%Y%m%d).json
```

### Migrer vers une base de données (recommandé pour la production)

Le code est prêt pour Supabase ou PostgreSQL. Voir `lib/lead-storage.ts` pour les instructions.

---

## 🔒 Sécurité

### Rate Limiting

Les APIs sont protégées contre les abus :

- **Contact form** : 5 requêtes / 15 minutes par IP
- **Lead magnets** : 10 requêtes / heure par IP

Configuration : `lib/rate-limit.ts`

### Headers de sécurité

Configurés automatiquement dans `next.config.mjs` :
- HSTS (HTTPS forcé)
- XSS Protection
- Frame Protection (pas d'iframe)
- Content Type Protection

### Données sensibles

⚠️ **Ne JAMAIS commiter** :
- `.env.local` (contient les clés API)
- `data/leads.json` (contient les données clients)

Ces fichiers sont dans `.gitignore`.

---

## 🐛 Dépannage

### Le site ne démarre pas

```bash
# Vérifier Node.js
node --version  # Doit être 18+

# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install

# Relancer
npm run dev
```

### Les emails ne s'envoient pas

1. Vérifier `.env.local` :
   ```bash
   cat .env.local | grep EMAIL
   ```

2. Vérifier que le provider est configuré :
   - `resend` → Clé API valide + domaine vérifié
   - `sendgrid` → Clé API valide
   - `brevo` → Clé API valide
   - `console` → Voir les logs du terminal

3. Regarder les logs dans le terminal

### Analytics ne fonctionne pas

1. Vérifier `.env.local` :
   ```bash
   cat .env.local | grep NEXT_PUBLIC_GA_ID
   ```

2. Format correct : `G-XXXXXXXXXX`

3. Vérifier dans le code source HTML :
   - Ouvrir le site
   - Clic droit → Inspecter
   - Chercher `gtag` dans le HTML

### Le build Vercel échoue

1. Tester le build localement :
   ```bash
   npm run build
   ```

2. Si erreurs, les corriger

3. Vérifier que toutes les variables d'environnement sont configurées dans Vercel

---

## 📚 Ressources

### Documentation

- [Next.js 14](https://nextjs.org/docs)
- [React](https://react.dev)
- [TailwindCSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

### Services utilisés

- [Resend (Email)](https://resend.com/docs)
- [Google Analytics](https://developers.google.com/analytics)
- [Meta Pixel](https://developers.facebook.com/docs/meta-pixel)
- [Tawk.to (Chat)](https://www.tawk.to)
- [Vercel (Déploiement)](https://vercel.com/docs)

---

## 💡 Support

Besoin d'aide ?

1. Vérifier ce guide
2. Consulter les [Issues GitHub](https://github.com/votre-nom/sellNorvegianHomes/issues)
3. Créer une nouvelle issue si nécessaire

---

**Bon développement ! 🚀**

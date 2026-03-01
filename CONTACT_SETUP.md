# Configuration du Formulaire de Contact

## Pour tester en LOCAL

### 1. Installer Vercel CLI
```bash
npm install -g vercel
```

### 2. Configurer Gmail (obligatoire)

**a) Activer la validation en 2 étapes:**
- Allez sur https://myaccount.google.com/security
- Activez "Validation en deux étapes"

**b) Créer un mot de passe d'application:**
- Allez sur https://myaccount.google.com/apppasswords
- Créez un mot de passe pour "Mail"
- Copiez le mot de passe (16 caractères)

### 3. Modifier le fichier `.env.local`
Remplacez les valeurs par les vôtres:
```env
SMTP_USER=votre-email@gmail.com
SMTP_PASS=le-mot-de-passe-application-copié
SMTP_FROM=votre-email@gmail.com
EMAIL_TO=votre-email@gmail.com
```

### 4. Tester localement
```bash
npm run dev
```

Ouvrez http://localhost:3000 et testez le formulaire de contact!

---

## Pour déployer sur VERCEL

### 1. Pousser sur GitHub
```bash
git add .
git commit -m "Add contact form"
git push
```

### 2. Connecter à Vercel
- Allez sur https://vercel.com
- Importez votre repo GitHub
- Vercel détecte automatiquement Angular

### 3. Ajouter les variables d'environnement
Dans Vercel Dashboard → Settings → Environment Variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-application
SMTP_FROM=votre-email@gmail.com
EMAIL_TO=votre-email@gmail.com
```

### 4. Déployer
Cliquez sur "Deploy" et c'est tout!

---

## Résumé des fichiers

✅ **Nécessaires:**
- `api/contact.js` - Serverless function pour envoyer les emails
- `api/package.json` - Dépendances de l'API
- `.env.local` - Variables d'environnement locales (NE PAS COMMIT)
- `vercel.json` - Configuration Vercel

✅ **Déjà configurés:**
- Service Angular qui appelle l'API
- Formulaire de contact dans le portfolio
- CORS configuré

❌ **Supprimés (pas nécessaires):**
- Dossier `server/` - Remplacé par Serverless Functions

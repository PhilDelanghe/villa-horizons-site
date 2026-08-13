# Villa Horizons — site vitrine

Site statique (Astro) pour la location saisonnière Villa Horizons à Laroque-des-Albères.
Domaine cible : https://villa-horizons.fr — hébergé sur GitHub Pages.

## Commandes

```bash
npm install       # première fois
npm run dev       # serveur local http://localhost:4321
npm run build     # build statique dans dist/
```

## Structure

- `src/i18n/fr.js` et `src/i18n/en.js` : tout le contenu texte (FR = page racine, EN = /en/)
- `src/data/villa.json` : faits chiffrés (capacité, surfaces, URLs, email)
- `src/data/reviews.json` : avis Airbnb (rempli par script, ne pas éditer à la main)
- `src/components/Home.astro` : structure de la page (partagée FR/EN)
- `src/layouts/Base.astro` : head, SEO, JSON-LD schema.org (VacationRental + FAQPage)
- `public/llms.txt` : résumé pour les crawlers LLM
- `public/CNAME` : domaine custom GitHub Pages

## Déploiement

Push sur `main` → GitHub Actions build et déploie sur GitHub Pages.
DNS chez OVH : CNAME `www` → `<user>.github.io`, enregistrements A du domaine nu vers GitHub Pages.

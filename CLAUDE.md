# Villa Horizons — site villa-horizons.fr

Site vitrine de la villa en location saisonnière à Laroque-des-Albères (66). En ligne depuis le 13/08/2026.
Objectif : site indépendant que Philippe maîtrise à 100%, lisible par les LLM (ChatGPT, Perplexity, Google AI), qui ne dépend ni d'Airbnb ni du site de la conciergerie.

## Stack et déploiement

- **Astro statique**, pas de framework front, pas de CMS, pas de builder. HTML pur en sortie.
- **Repo** : `PhilDelanghe/villa-horizons-site` (GitHub public). `git push` sur `main` = build + mise en ligne auto (GitHub Actions → GitHub Pages).
- **Local** : `npm run dev` (port 4321), `npm run build`, `npm run preview`.
- **Domaine** : villa-horizons.fr chez OVH (compte dp605609-ovh, renouvellement auto). Zone DNS : 4 enregistrements A vers GitHub Pages + CNAME www. HTTPS forcé.
- `dist/` et `node_modules/` ne sont pas à toucher à la main.

## Architecture du contenu

- **Tout le texte vit dans `src/i18n/fr.js` et `src/i18n/en.js`** (~590 lignes chacun, structure miroir). FR à la racine, EN sous `/en/`. Une modif de contenu se fait dans les deux fichiers, jamais dans un seul.
- **Pages** (`src/pages/` et `src/pages/en/`) : `index` (la villa), `village`, `voir`, `manger`, `boire`, `bouger`, `espagne`, `culture-catalane`, `a-propos`.
- **Composants** : `Nav.astro` (nav + liseré Senyera + switch de langue), `Base.astro` (layout, JSON-LD), `Home.astro`, `SubPage.astro`, `Cta.astro`, `Footer.astro`.
- **Données** : `src/data/villa.json` (caractéristiques), `src/data/reviews.json` (avis, structure prête, pas encore alimentée).
- **Photos** : `public/photos/` (58 fichiers optimisés 1600px). Le pool de référence trié est en dehors du repo, dans `../Photos et descriptifs/Photos_pool_tri/`, avec `PHOTOS_A_FAIRE.md` pour les manquantes.
- **SEO / LLM** : `public/llms.txt` (bilingue), `public/sitemap.xml` (avec hreflang), JSON-LD schema.org VacationRental + FAQPage dans `Base.astro`. Toute nouvelle page doit être ajoutée au sitemap ET au llms.txt.

## Design

- Titres en bleu pétrole, bouton Réserver en grenat `#8c2230`.
- Liseré Senyera (catalan) en tête de chaque page, au-dessus de la nav pour ne pas barrer le hero : 9 bandes de 2 px. Ne pas revenir à des bandes plus fines, elles moirent en une barre orange unie.
- Styles globaux dans `src/styles/global.css`.

## Règles éditoriales (strictes)

- **Tout nom propre publié est vérifié en ligne avant mise en ligne** : nom exact du domaine viticole, du resto, de la commune, orthographe, adresse, année d'un titre ou d'un label. Pas de nom propre "de mémoire". Incidents passés : Salvi champion du monde de saucisse catalane 2024 (pas 2025), Collioure village préféré des Français 2024, ferme Xadi à Palau-del-Vidre, Casenove avec un S, Box Imperium à Saint-André.
- **Jamais égratigner un commerçant local.** Si un endroit ne vaut pas le détour, on n'en parle pas, on ne le descend pas.
- **Points en fin de phrase partout**, y compris dans les listes et les cartes de lieux.
- **Pas de tirets cadratins.** Virgules, deux-points, parenthèses.
- **Accents français conservés** partout.
- **Voix** : première personne (Philippe et Suzana), factuelle, sans superlatifs de brochure touristique. Le ton "Ce que j'en pense, honnêtement" sur la sardane est le bon calibre.
- **Adresse exacte de la villa volontairement non publiée** : locality + GPS du centre du village seulement.

## Réservation

Les CTA pointent sur la page publique Superhote de la villa (compte d'Alice / Sud Séjour) :
`https://app.superhote.com/#/rental/propertyKeyWBNQbzVPIyXZZygesxeyEycrK`
Contact secondaire : contact@sudsejourconciergerie.com (bien `.com`), +33 6 16 06 63 73.
Le site ne route **pas** vers Airbnb. Airbnb ne sert qu'à récupérer les avis.

## Ce qui n'est pas dans ce projet

La gestion de la location elle-même (fiscalité LMNP, comptable SOGECA, budget, EDF, travaux, relation conciergerie) vit dans `../` et son worklog `villa-horizons-location.md`. Ne pas mélanger.

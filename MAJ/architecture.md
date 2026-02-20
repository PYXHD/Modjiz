Objectif

Ce projet est conçu pour évoluer en 3 phases :

V1 : Application Next.js (front-only
V2 : Ajout backend, authentification, base de données
V3 : Application mobile React Native

L’architecture vise à maximiser la réutilisation du code métier.

///////////////////////////////////
src/
app/ → Routing et layouts Next.js
components/ → UI web (React)
styles/ → Design system (SCSS, tokens, mixins)
assets/ → Ressources statiques (fonts, images)
domain/ → Logique métier (core, framework-agnostic)
data/ → Accès aux données (repositories)
lib/ → Utilitaires génériques

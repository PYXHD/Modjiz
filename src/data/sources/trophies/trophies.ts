type TrophyType = "stars" | "history" | "month";

type Trophy = {
  id: string;
  title: string;
  description: string;
  type: TrophyType;
  target: number;
};

export const TROPHIES: Trophy[] = [
  {
    id: "first_star",
    title: "Première étoile",
    description: "Obtenir sa première étoile",
    type: "stars",
    target: 1,
  },
  {
    id: "constellation",
    title: "Constellation",
    description: "Obtenir 30 étoiles",
    type: "stars",
    target: 30,
  },
  {
    id: "galaxy",
    title: "Galaxie",
    description: "Obtenir 100 étoiles",
    type: "stars",
    target: 100,
  },
  {
    id: "universe",
    title: "Univers",
    description: "Obtenir 300 étoiles",
    type: "stars",
    target: 300,
  },
  {
    id: "curious",
    title: "Curieux",
    description: "Consulter l'historique pour la première fois",
    type: "history",
    target: 1,
  },
  {
    id: "observer",
    title: "Observateur",
    description: "Consulter 10 fois l'historique",
    type: "history",
    target: 10,
  },
  {
    id: "analyst",
    title: "Analyste",
    description: "Consulter 50 fois l'historique",
    type: "history",
    target: 50,
  },
  {
    id: "strategist",
    title: "stratège",
    description: "Consulter 100 fois l'historique",
    type: "history",
    target: 100,
  },
];

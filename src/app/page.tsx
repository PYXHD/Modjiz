"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Logo from "@/assets/img/logo.svg";
import LogoShort from "@/assets/img/logo_short.svg";

// const KEY = "hasSeenLanding";

function LandingPage() {
  // const router = useRouter();
  // const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   const hasSeen = localStorage.getItem(KEY) === "true";

  //   if (hasSeen) {
  //     router.replace("/app");
  //     return;
  //   }

  //   localStorage.setItem(KEY, "true");
  //   setChecked(true);
  // }, [router]);

  // if (!checked) return null;

  return (
    <main>
      <div className="landing">
        <div className="landing_hero">
          <Logo className="landing_logo" />
          {/* <div className="modjiz"></div> */}
          <p>
            Les Modjiz sont de petites créatures venues d’un autre univers,
            curieuses de découvrir les émotions humaines. Chaque jour, elles
            t’aident à observer ton humeur avec douceur et sans pression.
          </p>
          <button>Version de démonstration</button>
          <p>
            Vous commencerez l'expérience avec un ensemble de données
            pré-enregistrées afin de découvrir l'application
          </p>
        </div>

        <div className="landing_details">
          <h2>Ce que propose Modjiz</h2>
          <ul>
            <li>Note ton humeur chaque jour, en quelques secondes</li>
            <li>
              Découvre des créatures expressives qui reflètent tes émotions
            </li>
            <li>Retrouve ton parcours émotionnel en un coup d'oeil</li>
            <li>Débloque des trophées pour rester motivé, sans pression</li>
          </ul>
        </div>

        <div className="landing_why">
          <h2>Pourquoi Modjiz</h2>
          {/* <div className="Modjiz"></div> */}
          <p>
            Modjiz est conçu comme un compagnon du quotidien, pensé pour t’aider
            à suivre ton humeur simplement, sans pression ni compétition.
          </p>
        </div>

        <div className="landing_about">
          <h2>A propos du projet</h2>
          <p>
            Modjiz est un projet personnel conçu pour explorer la conception
            d’interface, l’expérience utilisateur et le développement d’une
            application moderne.
          </p>
          <h2>Technologies Utilisées</h2>
          <ul>
            <li>React</li>
            <li>Sass</li>
            <li>TypeScript</li>
            <li>State management</li>
          </ul>
        </div>

        <div className="landing_ending">
          <p>Prends soin de ton humeur, à ton rythme.</p>
          <LogoShort className="landing_logoShort" />
        </div>
      </div>
    </main>
  );
}

export default LandingPage;

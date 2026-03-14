"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import type { Emotion } from "@/types/Emotion";

type Props = {
  emotion: Emotion;
  scale?: number;
  position?: number[];
};

const emotionColors: Record<Emotion, string> = {
  pensive: "#E6E6EB",
  sad: "#1F355C",
  meh: "#3554C5",
  ok: "#6F82D9",
  good: "#F08BC3",
  great: "#FFB703",
};

function Mascot({ emotion = "pensive", ...props }: Props) {
  const { scene } = useGLTF("/models/Mascot.glb");

  const mascotRef = useRef<THREE.Object3D>(null);
  const opacity = useRef(0);
  const targetIndex = useRef<number | null>(null);

  /* ---------------- INIT MATERIALS ---------------- */

  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const mat = child.material as THREE.MeshStandardMaterial;

      mat.transparent = true;
      mat.opacity = 0;
    });
  }, [scene]);

  /* ---------------- EMOTION MORPH ---------------- */

  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const dict = child.morphTargetDictionary;
      const influences = child.morphTargetInfluences;

      if (!dict || !influences) return;

      const index = dict[emotion];

      if (index !== undefined) {
        targetIndex.current = index;
      }
    });
  }, [emotion, scene]);

  /* ---------------- BODY COLOR ---------------- */

  useEffect(() => {
    const color = new THREE.Color(emotionColors[emotion]);

    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      if (child.name !== "BodyInner" && child.name !== "BodyOuter") return;

      const mat = child.material as THREE.MeshStandardMaterial;
      mat.color.set(color);
    });
  }, [emotion, scene]);

  /* ---------------- ANIMATION LOOP ---------------- */

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    /* fade in */

    if (opacity.current < 1) {
      opacity.current = Math.min(opacity.current + 0.008, 1);
    }

    /* morph transitions + opacity */

    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const mat = child.material as THREE.MeshStandardMaterial;
      mat.opacity = opacity.current;

      const influences = child.morphTargetInfluences;

      if (!influences || targetIndex.current === null) return;

      influences.forEach((value, i) => {
        const target = i === targetIndex.current ? 1 : 0;
        influences[i] = THREE.MathUtils.lerp(value, target, 0.1);
      });
    });

    /* breathing */

    if (mascotRef.current) {
      const breathe = 1 + Math.sin(t * 2) * 0.02;
      mascotRef.current.scale.set(10, 10 * breathe, 10);
    }
  });

  return <primitive ref={mascotRef} object={scene} {...props} />;
}

export default Mascot;

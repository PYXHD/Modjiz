"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import type { Emotion } from "@/types/Emotion";

type Props = {
  emotion?: Emotion;
};

function Mascot({ emotion = "pensive", ...props }: Props) {
  const { scene } = useGLTF("/models/Mascot.glb");

  const opacity = useRef(0);

  // appliquer l'émotion
  useEffect(() => {
    scene.traverse((child) => {
      const mesh = child as THREE.Mesh;

      if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) return;

      const index = mesh.morphTargetDictionary[emotion];

      if (index !== undefined) {
        mesh.morphTargetInfluences.fill(0);
        mesh.morphTargetInfluences[index] = 1;
      }
    });
  }, [emotion, scene]);

  useEffect(() => {
    scene.traverse((child) => {
      const mesh = child as THREE.Mesh;

      if (!mesh.material) return;

      const mat = mesh.material as THREE.MeshStandardMaterial;

      mat.transparent = true;
      mat.opacity = 0;
    });
  }, [scene]);

  useFrame(() => {
    if (opacity.current >= 1) return;

    opacity.current = Math.min(opacity.current + 0.008, 1);

    scene.traverse((child) => {
      const mesh = child as THREE.Mesh;

      if (!mesh.material) return;

      const mat = mesh.material as THREE.MeshStandardMaterial;
      mat.opacity = opacity.current;
    });
  });

  return <primitive object={scene} {...props} />;
}

export default Mascot;

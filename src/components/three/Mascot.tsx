import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import type { ThreeElements } from "@react-three/fiber";
import type { Emotion } from "@/domain/mood/config/moods";
import { emotionColors } from "@/domain/mood/config/moods";

type Props = Omit<ThreeElements["primitive"], "object"> & {
  emotion: Emotion;
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

    /* morph transitions */

    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const influences = child.morphTargetInfluences;

      if (!influences || targetIndex.current === null) return;

      influences.forEach((value, i) => {
        const target = i === targetIndex.current ? 1 : 0;
        influences[i] = THREE.MathUtils.lerp(value, target, 0.1);
      });
    });

    /* fade progression */

    opacity.current = THREE.MathUtils.lerp(opacity.current, 1, 0.08);

    /* breathing + fade */

    if (mascotRef.current) {
      const fade = opacity.current;
      const breathe = 1 + Math.sin(t * 2) * 0.02;

      const s = 10 * fade;

      mascotRef.current.scale.set(s, s * breathe, s);
    }
  });

  return <primitive ref={mascotRef} object={scene} {...props} />;
}

export default Mascot;

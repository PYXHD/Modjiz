"use client";

import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

type Props = {
  mascotRef?: React.RefObject<unknown>;
};

function Helpers3D({ mascotRef }: Props) {
  const { camera } = useThree();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "c") {
        const p = camera.position;
        console.log(
          `camera position={[${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}]}`,
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [camera, mascotRef]);

  return (
    <>
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper args={[20, 20]} />
    </>
  );
}

export default Helpers3D;

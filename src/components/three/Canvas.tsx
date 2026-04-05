// import { useRef } from "react";
// import Helpers3D from "./Helpers3D";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { moodToEmotion } from "@/domain/mood/moodToEmotion";

import { EmotionLevel } from "@/domain/mood/config/moods";

import Mascot from "./Mascot";

function Scene({ mood }: { mood: EmotionLevel }) {
  // const mascotRef = useRef(null);
  return (
    <Canvas>
      {/* <Helpers3D mascotRef={mascotRef} /> */}
      <PerspectiveCamera makeDefault position={[0, 6, 28]} fov={35} />
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={2} />
      <Mascot emotion={moodToEmotion(mood)} scale={10} position={[0, 0, 0]} />
    </Canvas>
  );
}

export default Scene;

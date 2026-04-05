import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { moodToEmotion } from "@/domain/mood/moodToEmotion";

import { EmotionLevel } from "@/domain/mood/config/moods";

import Mascot from "./Mascot";

function Scene({ mood }: { mood: EmotionLevel }) {
  const emotion = moodToEmotion(mood);

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 6, 28]} fov={35} />
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={2} />
      <Mascot emotion={emotion} scale={10} position={[0, 0, 0]} />
    </Canvas>
  );
}

export default Scene;

import React from "react";
import "./css/project-canvas.css";
import {Canvas, useThree} from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { EffectComposer, Bloom, BrightnessContrast  } from "@react-three/postprocessing";
import Cyl from "./Cyl";
import img from "../assets/cosmic.jpg";
 
function Background(){
  const texture = useTexture(img);
  const {scene} = useThree();
  scene.background = texture;
  return null;
}

function ProjectCanvas() {
  return (
    <Canvas camera={{position:[0,-1,6],fov:35}}>
      <Background />
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0} luminanceSmoothing={0} />
        <BrightnessContrast
          brightness={0.0}
          contrast={0.5}
        />
      </EffectComposer>
    </Canvas>
  );
}

export default ProjectCanvas;

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import objLogo from "../assets/base.obj";

function LoaderObj() {
  const mesh = useRef();
  const obj = useLoader(OBJLoader, objLogo);

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.8; // rotation speed
  });

  return (
    <primitive
      ref={mesh}
      object={obj}
      scale={1}            // make it small
      position={[0, -0.5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default LoaderObj;

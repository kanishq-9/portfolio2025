import React, { useRef, useEffect, useState } from "react";
import { useTexture } from "@react-three/drei";
import img from "../assets/projects.png";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";


function Cyl() {
  let txt = useTexture(img);
  const cyl = useRef(null);
    const { size } = useThree();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (size.width < 300) setScale(0.3);
    else if(size.width < 600) setScale(0.5);
    else if (size.width < 900) setScale(0.7);
    else setScale(1);
  }, [size.width]);


  txt.minFilter = THREE.LinearFilter;
  txt.magFilter = THREE.NearestFilter;
  txt.anisotropy = 16;
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta * 0.2;
  });
  return (
    <group rotation={[0, 0, 0.3]} scale={[scale, scale, scale]} >
      <mesh ref={cyl}>
        <cylinderGeometry args={[3, 3, 5, 40, 1, true]} />
        <meshStandardMaterial
          transparent
          map={txt}
          side={THREE.DoubleSide}
          emissiveIntensity={0.15}
        />
      </mesh>
    </group>
  );
}

export default Cyl;

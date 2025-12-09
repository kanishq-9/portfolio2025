import React from 'react';
import "./css/footer.css";
import { Canvas } from "@react-three/fiber";
import LoaderObj from './LoaderObj';

function Footer() {
  return (
    <footer className='footer'>
      <div>
      <Canvas camera={{ position: [0, 0, 2] }}>
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      <LoaderObj />
    </Canvas>
      </div>
        <div className='merriweather-sans-normal footer-name'>
            Kanishq R Purohit
            </div>
    <div className='signika-allrights allrights'>
© 2025. All rights reserved.
    </div>
    </footer>
  )
}

export default Footer
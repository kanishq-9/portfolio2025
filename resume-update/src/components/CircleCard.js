import React from 'react';
import "./css/circlecard.css";

function CircleCard() {
  const images = [
    'https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1764957080687-9569e738a238?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  return (
    <div className='circle-card-main'>
      <div className="grid-container">
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex} className="grid-column">
            {/* Logic to grab 3 unique images per column */}
            <div className="grid-item">
              <img src={images[colIndex * 3]} alt="" />
            </div>
            <div className="grid-item">
              <img src={images[colIndex * 3 + 1]} alt="" />
              {colIndex === 1 && <div className="item-label">CLICK US</div>}
            </div>
            <div className="grid-item">
              <img src={images[colIndex * 3 + 2]} alt="" />
            </div>
            {/* Spacer to prevent immediate gap at the bottom
            <div style={{ height: '20vh' }}></div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CircleCard;
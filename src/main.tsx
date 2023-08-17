
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MatrixRainV12 } from './MatrixRain'; // Make sure to provide the correct path to MatrixRain.tsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MatrixRainV12 />
  </React.StrictMode>,
);
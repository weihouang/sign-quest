import React, { useEffect } from 'react';

const SplineViewer = () => {
  // Hard-coded URL of the Spline model
  const url = 'https://prod.spline.design/SKyZaYYwPfTWMqg6/scene.splinecode';
  const eventsTarget = "global"; // Hard-coded eventsTarget to "global"

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
      script.type = 'module';
      script.async = true;

      if (!document.querySelector(`script[src="${script.src}"]`)) {
        document.body.appendChild(script);
      }
    };

    loadScript();
  }, []); // Dependencies array left empty since URL and eventsTarget are constants

  // Use hard-coded url and eventsTarget in the spline-viewer element
  return (
    <spline-viewer url={url} events-target={eventsTarget}></spline-viewer>
  );
};

export default SplineViewer;

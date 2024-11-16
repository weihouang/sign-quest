import React, { useEffect } from 'react';

const SplineViewer = ({ url, eventsTarget = "global" }) => { // Default eventsTarget to "global"
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
  }, []);

  // Use eventsTarget prop in the spline-viewer element
  return (
    <spline-viewer url={url} events-target={eventsTarget}></spline-viewer>
  );
};

export default SplineViewer;

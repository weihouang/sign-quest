import React, { useEffect } from "react";

const PlaygroundViewer = () => {
  // Hard-coded URL of the Spline model
  const url = "https://prod.spline.design/d-VU1m4rdSwWqzzk/scene.splinecode";
  const eventsTarget = "global"; // Hard-coded eventsTarget to "global"

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
      script.type = "module";
      script.async = true;

      if (!document.querySelector(`script[src="${script.src}"]`)) {
        document.body.appendChild(script);
      }
    };

    loadScript();
  }, []); 


  return <spline-viewer url={url} events-target={eventsTarget}></spline-viewer>;
};

export default PlaygroundViewer;

import { useEffect } from 'react';

const NPFWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      className="npf_wgts"
      data-height="450px"
      data-w="fa696c7c8f761369fe613b07551b1bf3"
    ></div>
  );
};

export default NPFWidget;

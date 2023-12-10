import React, { useEffect } from "react";

const Api = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://app2.weatherwidget.org/js/?id=ww_92aa553b8005b";

    const weatherWidgetContainer = document.getElementById("weather-widget");
    weatherWidgetContainer.appendChild(script);

    return () => {
      // Remover todos os filhos do contêiner ao desmontar o componente
      while (weatherWidgetContainer.firstChild) {
        weatherWidgetContainer.removeChild(weatherWidgetContainer.firstChild);
      }
    };
  }, []);

  return (
    <div>
      <div className="widget-Clima">
        <div
          id="ww_92aa553b8005b"
          v="1.3"
          loc="auto"
          a='{"t":"horizontal","lang":"pt","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#0097A7","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#FFFFFF","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'
        >
          Mais previsões:{" "}
          <a
            href="https://oneweather.org/el/ioannina/"
            id="ww_92aa553b8005b_u"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ιωάννινα πρόγνωση καιρού
          </a>
        </div>
        <div id="weather-widget"></div>
      </div>
    </div>
  );
};

export default Api;

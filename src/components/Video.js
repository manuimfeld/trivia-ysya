import React from "react";
import { useEffect } from "react";

const Video = ({ video, areDisabled }) => {
  useEffect(() => {
    const videoHide = document.querySelector(".video-hide");

    if (areDisabled) {
      // Si los botones están desactivados, muestra el video
      videoHide.style.display = "none";
    } else {
      // Si los botones están activados, oculta el video
      videoHide.style.display = "block";
    }
  }, [areDisabled]);

  return (
    <div className="video">
      <iframe
        width="500"
        height="250"
        src={
          "https://www.youtube.com/embed/" +
          video[0].id +
          "?rel=0&amp;modestbranding=1&amp;autohide=1&amp;mute=0&amp;showinfo=0&amp;controls=0&amp;autoplay=1&amp;start=30"
        }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Youtube Video"
        frameBorder="0"
        allowfullscreen
      ></iframe>
      <div className="video-hide"></div>
    </div>
  );
};

export default Video;

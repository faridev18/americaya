import React, { useEffect, useRef } from 'react';

function ImageWithSpeechBubble({ src, alt, text }) {
  const textRef = useRef(null); // Référence pour accéder directement à l'élément DOM de la bulle de texte

  useEffect(() => {
    const changeBlinkingRate = () => {
      const newDuration = Math.random() * 2 + 1; // Génère un nombre aléatoire entre 1 et 3 secondes
      if (textRef.current) {
        textRef.current.style.animationDuration = `${newDuration}s`;
      }
    };

    changeBlinkingRate(); // Changez la vitesse de clignotement initiale
    const intervalId = setInterval(changeBlinkingRate, 2000); // Changez la vitesse toutes les 2 secondes

    return () => clearInterval(intervalId); // Nettoyage à la désinscription
  }, []);

  return (
    <div className="image-container">
      <img src={src} alt={alt} className="md:w-32" />
      <div className="absolute bottom-full left-1/2 md:text-base text-xs -translate-x-1/2 bg-white rounded-lg md:px-2.5 px-0.5 md:py-1.5 py-0.5 text-center border md:scale-100 scale-70  border-black">

        <span ref={textRef} className="blink-text ">{text}</span>
      </div>
    </div>
  );
}

export default ImageWithSpeechBubble;

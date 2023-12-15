import React, { useState, useEffect } from 'react';

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Mettre à jour la date toutes les secondes
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []); // Le tableau vide en tant que deuxième argument signifie que cet effet s'exécutera uniquement lors du montage du composant

  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <div className="DateComponent">
      <p className="date">Date : {formattedDate}</p>
      <p className="heure">Time : {formattedTime}</p>
    </div>
  );
};

export default DateComponent;

import React, { useState } from 'react';

function MentalHealthSurvey() {
  const [score, setScore] = useState(0);

  const handleChange = (event) => {
    setScore(event.target.value);
  };

  return (
    <div>
      <h2>Cuestionario de Salud Mental</h2>
      <form>
        <label>
          ¿Te has sentido estresado o ansioso últimamente?
          <input type="radio" name="stress" value="1" onChange={handleChange} /> Sí
          <input type="radio" name="stress" value="0" onChange={handleChange} /> No
        </label>
        <br />
        <label>
          ¿Tienes problemas para dormir?
          <input type="radio" name="sleep" value="1" onChange={handleChange} /> Sí
          <input type="radio" name="sleep" value="0" onChange={handleChange} /> No
        </label>
        <br />
        <button type="button">Ver resultado</button>
      </form>
      <div>
        <h3>Puntaje: {score}</h3>
      </div>
    </div>
  );
}

export default MentalHealthSurvey;

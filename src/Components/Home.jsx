import React from "react";

export default function Home() {
  const homeText = `
    
  Välkommen till denna hemsida om psykologiska diagnoser! 
    
    Här hittar du information om olika psykologiska tillstånd och behandlingsmetoder.
  
    Den här sidan strävar efter att erbjuda pålitlig och aktuell information om olika psykologiska ämnen för att främja förståelse och medvetenhet kring mental hälsa.
    
    Utforska våra olika avsnitt för att lära dig mer om olika tillstånd, behandlingar och metoder för att förbättra välbefinnandet och hantera utmaningar i livet.
    
    
  `;

  return (
    <div className="content-container">
      <p style={{ whiteSpace: "pre-line" }}>
        <span className="standout-text">Välkommen</span>
        <span dangerouslySetInnerHTML={{ __html: homeText }} />
        <span className="light-text">
          Har du akuta besvär, kontakta din närmsta pyskiatriska akutmottagning eller ring 112.
        </span>
      </p>
    </div>
  );
}

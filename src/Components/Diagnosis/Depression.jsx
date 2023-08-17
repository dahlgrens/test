import React from "react";

export default function Depression() {
  const multilineText = `

Depression är en vanlig psykisk hälsoutmaning. Det är viktigt att förstå att depression inte är en svaghet eller något som du enkelt kan "skaka av dig". Det är en komplex kombination av biologiska, psykologiska och sociala faktorer som kan påverka ditt välbefinnande.

Symptomen på depression sträcker sig bortom att känna sig "ledsen". De inkluderar ofta en ihållande känsla av nedstämdhet eller tomhet, minskat intresse för aktiviteter som tidigare gav glädje, trötthet, sömnproblem, viktändringar och/eller svårigheter att fokusera. Många känner också en känsla av hopplöshet och skam/skuld som kan förstärka symtomen.
  
Att genomgå terapi är en positiv åtgärd mot depression. Strukturerade psykoterapier för depression inkluderar ofta metoder för beteendeaktivering samt för att hantera obekväma tankar och känslor. Om sömnen är påverkad kan även denna adresseras. En aktivitet som har särskild god effekt på depression är motion. 
  
Att involvera stödjande personer i din omgivning är också betydelsefullt. Det kan vara vänner, familjemedlemmar eller stödgrupper som kan erbjuda emotionellt stöd och förståelse när du navigerar genom svåra perioder, eller som kan hjälpa dig med din beteendeaktivering.
    
Det är också viktigt att komma ihåg att arbetet med att hantera depression är en process som tar tid. Framsteg kan vara små men ändå betydelsefulla. Att ta det steg för steg är en nyckel för att må bättre på sikt.
  `;

  return (
    <div className="content-container">
      <p style={{ whiteSpace: "pre-line" }}>
        <span className="standout-text">Om Depression</span>
        {multilineText}
      </p>
    </div>
  );
}

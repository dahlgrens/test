import React from "react";

export default function Stress() {
  const multilineText = `
  
  Besvär orsakade av stress är ett vanligt tillstånd som kan påverka oss alla vid olika tidpunkter i livet. Symptomen på långvarig stress är breda och kan vara både fysiska och känslomässiga. De kan inkludera muskelspänning, oro, ökad hjärtrytm, sömnproblem, irritabilitet, närhet till gråt, problem med magen samt minnesproblem och koncentrationssvårigheter. Många känner sig överväldigade och har svårt att finna balans i vardagen.
  
  Om du börjat känna av flera av dessa symtom är det viktigt att inkludera fler pauser i din vardag. Kortvarig stress är ofarlig men långvarig stress med brist på återhämtning kan bli ett hälsoproblem med långtgående konsekvenser. Aktiv återhämtning kan man få genom motion, vilket hjälper kroppen att återhämta sig snabbare efter ansträngning. Dock kan olika former av återhämtning krävas för att få en balans i vardagen, där andra former gärna får bestå av aktiviteter du själv tycker om och som du gör för din egen skull.  
  
  Det är betydelsefullt att inkludera stödjande personer i din omgivning i återhämtning från stressen. Vänner, familjemedlemmar eller stödgrupper kan erbjuda ett stödnätverk. Ibland kan det vara bra att våga be om avlastning från detta nätverk.
  
  Stress kan både bero på yttre och inre faktorer. Att vara prestationsinriktad har visats vara en riskfaktor för besvär orsakade av stress. Det kan därför också vara bra att fundera över de krav du ställer på dig själv. Är det möjligt att sänka dessa? I en psykoterapi kan du arbeta med de obehagliga tankar och känslor som uppkommer när du bestämmer dig för att sänka dina krav och öka mängden återhämtning. 
  
  `;

  return (
    <div className="content-container">
      <p style={{ whiteSpace: "pre-line" }}>
      <span className="standout-text">Om Stress</span>
        <span dangerouslySetInnerHTML={{ __html: multilineText }} />
      </p>
    </div>
  );
}

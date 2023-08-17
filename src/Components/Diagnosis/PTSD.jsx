import React from "react";

export default function PTSD() {
  const multilineText = `
  
  Posttraumatiskt stressyndrom (PTSD) är ett allvarligt hälsotillstånd som kan uppstå efter att en person har upplevt eller bevittnat en traumatisk händelse. Denna händelse kan vara något som hotade personens liv eller fysiska integritet, och det kan inkludera saker som naturkatastrofer, krig, överfall, våldtäkt eller allvarliga olyckor. Människor som utvecklar PTSD kan uppleva en rad symtom som påverkar deras mentala och fysiska välbefinnande.
  
  Symtom på PTSD kan inkludera återupplevelse av traumat genom mardrömmar eller Flashbacks, där personen känner som om de återupplever händelsen på nytt. Dessa återupplevelser kan vara mycket påfrestande och ångestframkallande. Individer med PTSD kan också undvika platser, människor eller situationer som påminner om traumat. De kan även bli känslomässigt avtrubbade, ha svårt att känna glädje eller intresse för saker som tidigare intresserade dem.
  
  Hyperarousal är ett annat vanligt symtom på PTSD, där personen är ständigt på helspänn, lättretlig och överväldigad av starka känslor så som ilska eller ångest. De kan ha svårt att sova, ha koncentrationssvårigheter och vara lättskrämda. Dessa symtom kan påverka förmågan att fungera i vardagen.
  
  Behandling för PTSD innefattar vanligtvis hantering av obehagliga känslor och tankar samt moment av exponering. Exponering går ut på att gradvis utsätta sig för de situationer som undvikits på grund av rädsla. 
  
  Det är viktigt att förstå att PTSD är en legitim reaktion på en traumatisk händelse och att stöd och förståelse från omgivningen är avgörande. Att lida av PTSD är en utmaning, men med rätt behandling och stöd är det möjligt att återfå en god livskvalitet.
  
  `;

  return (
    <div className="content-container">
      <p style={{ whiteSpace: "pre-line" }}>
      <span className="standout-text">Om PTSD</span>
        <span dangerouslySetInnerHTML={{ __html: multilineText }} />
      </p>
    </div>
  );
}

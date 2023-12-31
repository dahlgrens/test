import React from "react";
import { Link } from "react-router-dom";

export default function GAD() {
  const multilineText = `
    
  Generaliserat ångestsyndrom (GAD) är en psykologisk diagnos som kännetecknas av långvarig oro och ångest inför olika typer av situationer och händelser. Individer som lider av GAD upplever ofta sin oro som okontrollerbar, vilket påverkar deras vardag negativt.
  
    Symtomen vid GAD kan vara både fysiska och känslomässiga. Individer kan känna en konstant inre rastlöshet och nervositet, även när det inte finns någon omedelbar fara. Denna ångest kan utlösa olika fysiska reaktioner så som muskelspänningar, skakningar och trötthet. Sömnproblem är även vanliga, med svårigheter att somna eller att sova genom hela natten.
  
    Behandling av GAD kan innefatta olika metoder. Kognitiv beteendeterapi (KBT) är en vanlig terapeutisk metod vid GAD, men uppnår inte alltid önskad effekt. Medicinering kan vara ett annat alternativ, särskilt om ångesten är svår och påverkar vardagslivet. Dock kan läkemedel också medföra biverkningar som bör diskuteras med en läkare.
  
    Förutom traditionell behandling har Metakognitiv Terapi (MCT) visat sig vara en lovande metod mot GAD. MCT fokuserar på att identifiera och utmana individens antaganden om oro. Utöver detta tränar man i MCT på att utveckla nya sätt för att hantera oro och ångest.
  
    Genom MCT kan individer lära sig att förstå och hantera sina tankar på ett mer konstruktivt sätt. Terapeuter som använder MCT hjälper sina klienter att identifiera de tankemönster som bidrar till oro och utmanar dessa genom att bryta mönstret av överanalyserande av bekymmer, vilket ofta följer på en initial orotanke hos individer med GAD. Målet är att hjälpa individen få mer kontroll över sin oro och minska den tid som ägnas åt oro-tankar, för att nå bättre hälsa och livskvalitet.
  
    Den metakognitiva metoden är nyare än KBT och därav finns ännu inte lika många omfattande studier på denna metod. Dock har flera av de studier som gjorts hittills visat MCT vara mer effektiv än KBT för att minska symptomen vid GAD. Dock finns det ingen behandling som fungerar för alla individer.
  
    För att boka tid hos legitimerad psykolog som använder sig av MCT för GAD eller intensiv oro, eller för att veta mer, klicka på länken:
  `;


  return (
    <div className="content-container">
      <p style={{ whiteSpace: "pre-line" }}>
        <span className="standout-text">Om GAD</span>
        <span dangerouslySetInnerHTML={{ __html: multilineText }} />
      </p>
      <div className="booking-link">
        <a href="https://siripsykologtjanster.kaddio.com/" target="_blank" rel="noopener noreferrer">
          Boka tid för behandling        </a>
          <p>    Du kommer att omdirigeras till Siri Dahlgrens informations och bokningssida, som också är skaparen av denna hemsida.</p>

      </div>
    </div>
  );
}
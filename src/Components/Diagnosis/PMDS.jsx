import React from "react";

export default function PMDS() {
  const multilineText = `
  
PMDS står för "Premenstruellt Dysforiskt Syndrom". Det är en allvarlig form av premenstruellt syndrom (PMS) som påverkar vissa individer under den senare delen av menstruationscykeln, vanligtvis från veckorna till dagarna före menstruationens början. PMDS innebär en stor fysisk och psykisk påfrestning under denna period och leder inte sällan till besvär i relationer.
  
  Symptomen på PMDS är mer intensiva än de som förekommer vid vanlig PMS och kan inkludera:

  <strong>Känslomässiga förändringar:</strong> Svår ångest, irritabilitet, ilska, nedstämdhet och humörsvängningar är typiska symtom. De känslomässiga utmaningarna kan vara överväldigande.
  
  <strong>Fysiska symptom:</strong> Bröstömhet, svullnad, huvudvärk, trötthet och sömnproblem är vanliga. Vissa personer kan även uppleva ökad aptit och sug efter sötsaker.
  
  <strong>Kognitiva utmaningar:</strong> Svårigheter med koncentration, minnesproblem och en känsla av mental desorientering kan förekomma under PMDS-perioden.
  
  <strong>Svårigheter i relationer:</strong> Personer som lider av PMDS kan ha problem med att hantera sociala interaktioner på grund av de starka känslomässiga reaktionerna och stressen.
  
  Behandling av PMDS kan omfatta olika metoder, såsom:
  
  <strong>Livsstilsförändringar:</strong> Regelbunden fysisk aktivitet, god kosthållning, tillräcklig sömn och hantering av stress kan hjälpa till att lindra symtomen.
  
  <strong>Psykoterapi:</strong> KBT och andra former av terapi kan vara effektiva för att hantera de känslomässiga och kognitiva symtomen. Terapin brukar inledas med en kartläggning av menscykeln, symptom samt av vilka problemen som ofta uppstår till följs av PMS-symptomen. Därefter undersöks om problemsituationer kan flyttas till andra datum eller hanteras på andra sätt än idag. Det kan också vara bra att informera eventuella partners om den diagnos man har och om vanliga besvär. Tillsammans kan man försöka hantera de situationer som ofta leder till konflikt eller obehagliga känslor.
  
  <strong>Läkemedel:</strong> Vissa mediciner, inklusive SSRI kan testas för att minska symtomen. Behandling med läkemedel kan dock ge biverkningar och en diskussion kring för- och nackdelar kan föras med läkare.
   `;

  return (
    <div className="content-container">
      <p style={{ whiteSpace: "pre-line" }}>
      <span className="standout-text">Om PMDS</span>
        <span dangerouslySetInnerHTML={{ __html: multilineText }} />
      </p>
    </div>
  );
}

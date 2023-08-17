import React from "react";

export default function SocialFobi() {
  const multilineText = `
  
Socialfobi är ett psykiskt hälsotillstånd som kännetecknas av intensiv rädsla inför sociala situationer. Individer som lider av socialfobi upplever en överväldigande oro för att bli granskade, bedömda eller kritiserade av andra. Denna rädsla kan vara så stark att den påverkar förmågan att fungera i vardagliga sociala sammanhang.

Individer med socialfobi kan uppleva symtom som hjärtklappning, svettningar, darrningar, illamående och ångest i situationer där de måste interagera med andra människor. De undviker ofta sociala situationer eller uthärdar dem under stor påfrestning. Detta kan leda till en ond cirkel av undvikande och isolering, vilket i sin tur kan påverka individens självkänsla och livskvalitet negativt. Dessutom tenderar oron för situationer att bestå eller öka om de undviks. Att kontinuerligt utsätta sig för de situationer som väcker ångest kan dämpa hjärnans och kroppens tolkning av hur hotfulla dessa situationer egentligen är.

Behandling för socialfobi kan innefatta moment där individen lär sig att identifiera och utmana negativa tankemönster samt gradvis utsätta sig för de sociala situationer som de fruktar.

Individer som lider av socialfobi behöver stöd och förståelse för närstående för hur påfrestande sociala situationer kan upplevas. Annat som kan göra ångest lite lättare att hantera är regelbunden motion, kost och sömn. Det är även bra att undvika att använda till exempel alkohol för att dämpa ångesten, detta kan hjälpa i stunden men förvärra symptomen på lång sikt.

  `;

  return (
    <div className="content-container">
      <p style={{ whiteSpace: "pre-line" }}>
      <span className="standout-text">Om Social Fobi</span>
        <span dangerouslySetInnerHTML={{ __html: multilineText }} />
      </p>
    </div>
  );
}

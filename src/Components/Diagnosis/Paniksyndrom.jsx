import React from "react";

export default function Paniksyndrom() {
  const multilineText = `
  
  Panikångest kännetecknas av plötsliga och intensiva attacker av extrem rädsla och oro, vilket kan leda till fysiska och känslomässiga symtom. En panikattack utlöses av kroppens "kamp-eller-flykt"-respons, en inbyggd mekanism som aktiveras när vi står inför hotfulla situationer. Denna respons frisätter adrenalin och andra stresshormoner, vilket ökar hjärtfrekvensen och förbereder kroppen för snabb handling.
  
  Under en panikattack utsöndras en mängd adrenalin, vilket kan orsaka fysiska symtomen som hjärtklappning, svettningar och skakningar. Andningen blir snabbare för att öka syreleveransen till musklerna, vilket kan resultera i en känsla av yrsel och andnöd då man fortsätter försöka ta in mer syre än vad kroppen faktiskt behöver. Detta är alltså en upplevelse av andnöd som inte stämmer med faktiska omständigheter. Den ökade hjärtfrekvensen kan också leda till obehag. Även om panikattacker kan vara skrämmande och överväldigande, är de i regel helt ofarliga. 
  
  Panikattacker hos någon med paniksyndrom inleds ofta med en känsla av ökad puls eller andra symptom som påminner om en panikattack. Symtomen i sig tolkas som hotfulla av individen vilket i sin tur ökar symptomen än mer. Symtom och tolkning av symptom blir till en spiral av mer och mer stress och ångest.
  
  I psykoterapi för paniksyndrom ligger fokus på att förändra tolkningen av symptomen, i stället för att försöka ändra symptomen i sig. Individen behöver lära om sitt system, i stället för att tolka stressymptom och en begynnande panikattack som fara, bör det i stället tolkas som något naturligt som kommer ebba ut av sig självt. Detta kan uppnås genom att sluta försöka dämpa symtomen vid panikångesten, trots att detta kan väcka mycket obehagliga tankar och känslor. I stället för att försöka lugna dig själv, kan du försöka fortsätta som om symptomen inte alls var där. 
  
  En annan användbar metod att medvetet provocera fram panikattacker, för att lära systemet att dessa attacker är ofarliga och inte behöver undvikas eller hanteras aktivt – de kommer att försvinna på egen hand. En individuell strategi för hur du kan närma dig panikkänslorna och de situationer i vilka de uppstår kan utvecklas i samråd med en terapeut. 
  
  `;

  return (
    <div className="content-container">
      <p style={{ whiteSpace: "pre-line" }}>
      <span className="standout-text">Om Paniksyndrom</span>
        <span dangerouslySetInnerHTML={{ __html: multilineText }} />
      </p>
    </div>
  );
}

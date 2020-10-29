import React from "react";
import "../styles/style.css";

function ProjektHvezdarnaFJGerstnera() {
  return (
    <div>
      <h2>Projekt Hvězdárna F. J. Gerstnera</h2>

      <p>
        Ve středu 24.dubna 2019 v 16:30 hod. jsme v rámci participativního
        rozpočtu města Chomutova v řádném termínu odevzdali náš projekt -
        Hvězdárna F.J.Gerstnera v Chomutově. Ve čtvrtek 23.května 2019 jsme v
        SKKS (knihovně) prezentovali náš projekt malé veřejné hvězdárny, která
        by mohla být vybudována z participativního rozpočtu městě Chomutova.
        Realizací projektu by vznikla malá veřejná hvězdárna přístupná široké
        veřejnosti za účelem popularizace nejen astronomie, ale i dalších
        technických a přírodovědných oborů.
      </p>
      <p>
        Chceme v Chomutově vybudovat veřejnou hvězdárnu, která by se
        spolupodílela na přípravě mladé generace pro technické a přírodovědecké
        obory. Objekt, ve kterém by se setkávali lidé se společným zájmem o
        astronomii a přírodní vědy. Chceme nabídnout dětem, mládeži, jejich
        rodičům, lidem v našem městě a turistům - novou možnost využití volného
        času. Domníváme se, že hvězdárna by výrazně přispěla ke zvýšení
        atraktivity našeho města.
      </p>
      <img
        title="model chystané hvězdárny F. J. Gerstnera  "
        alt="model chystané hvězdárny"
        src={require("../images/2019-3-15-model--2-.jpg")}
      />
      <p>
        Model veřejné hvězdárny F.J.Gerstnera v Chomutově. Rozměry oploceného
        pozemku asi 15m * 30m. Popis: 1) kancelářská buňka 2) meteorologická
        stanice 3) bolidová kamera 4) anténa radioastronomie 5) promítací plocha
        6) hlediště 7) pozorovací plocha
      </p>
    </div>
  );
}

export default ProjektHvezdarnaFJGerstnera;

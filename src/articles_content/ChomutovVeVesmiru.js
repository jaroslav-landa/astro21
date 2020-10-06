import React from "react";
import "../styles/style.css";

function ChomutovVeVesmiru() {
  return (
    <div>
      <h2>Chomutov ve vesmíru</h2>
      <img
        title="18.12.2019 9:54 hod SEČ - start nákladní rakety Sojuz"
        alt="start nákladní rakety Sojuz"
        src={require("../images/2019-12-18-start--3--cheops.jpg")}
      />
      <p>18.12.2019 Chomutov zamířil ke hvězdám</p>
      <p>
        Ve čtvrtek 20.února 2020 od 16:30 hod. se v Obřadní síně MÚ v Chomutově
        konala malá slavnostní akci pro 14 studentů našeho města, jejich
        rodiče,sourozence a další hosty. Tito studenti se před 5 lety pod
        vedením našeho kroužku astronomie zapojili do mezinárodní soutěže
        vyhlášené Evropskou vesmírnou agenturou (ESA).
      </p>
      <p>
        Zástupce našeho města, základní školy, Astronomické společnosti Chomutov
        a České astronomické společnosti společně poděkovali studentům za
        reprezentaci školy, našeho města Chomutova a České republiky. V této
        soutěži, ve které se sešlo více jak 8 000 obrázků, jsme uspěli. Na
        evropské sondě Cheops, která je umístěna ve vesmíru a plní svůj úkol, je
        umístěna většina obrázků, které jsme do soutěže poslali.
      </p>
      <p>
        Studentům přijel z Prahy osobně pogratulovat Pavel Suchan, místopředseda
        České astronomické společnosti a tiskový tajemník Astronomického ústavu
        AV ČR, spolu s Krtečkem, který v květnu 2011 letěl ve vesmíru na palubě
        raketoplánu a Mezinárodní kosmické stanice (ISS).
      </p>
    </div>
  );
}

export default ChomutovVeVesmiru;

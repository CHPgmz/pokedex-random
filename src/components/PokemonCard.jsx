import React from "react";
import "../styles/PokemonCard.css";

export const PokemonCard = ({ name, img, peso, altura, tipo, ataque, defensa }) => {
  

  return (
    <div className='poke-card'>
      <div>
        <h1>{name}</h1>
      </div>
      <img src={img} alt='No se encontro' className='img-pokemon' />
      <div className='cnt-info'>
        <div className='cnt-info-head'>
          <AtributoTop name='Peso' value={peso} />
          <AtributoTop name='Altura' value={altura} />
          <AtributoTop name='Tipo' value={tipo} />
        </div>
        <div className="cnt-info-body">
          <AtributoBody name="Ataque" value={ataque} />
          <AtributoBody name="Defensa" value={defensa} />
        </div>
      </div>
    </div>
  );
};

const AtributoTop = props => {
  return (
    <div className='atributes-cnt-top'>
      <p>
        <span id='atr-name'>{props.name}: </span>
        {props.value}
      </p>
    </div>
  );
};

const AtributoBody = props => {
  return (
    <div className="atributes-cnt-body">
      <div><h1 id="ataque">{props.name}</h1></div>
      <div><p id="defensa">{props.value}</p></div>
  </div>
  );
}


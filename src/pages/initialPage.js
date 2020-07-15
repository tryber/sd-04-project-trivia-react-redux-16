import React from "react";

export default function InitialPage() {

  

  return (

    
    <div>
      <form id="form" method="POST" name="form">
        <div>
          <label data-testid="input-player-name">Nome:</label>
          <input type="text" id="nome" name="name" placeholder="nome do jogador"/>
        </div>
        <div>
          <label data-testid="input-gravatar-email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <input type="submit" value="Jogar" data-testid="btn-play" name="email" placeholder="Email" onClick="formValid()" disabled/>
          {/* <button data-testid="btn-play">Jogar</button> */}
        </div>
      </form>
    </div>
  );
}

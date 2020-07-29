export const UPDATE_PLAYER = 'UPDATE_PLAYERI';
export const RESET_PLAYER = 'RESET_PLAYER';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_RANKING = 'UPDATE_RANKING';

export const updatePlayer = (player) => ({
  // player: {
  //     name,
  //     assertions,
  //     score,
  //     gravatarEmail
  // }
  type: UPDATE_PLAYER,
  player,
});

export const resetPlayer = () => ({
  type: RESET_PLAYER,
});

export const updateScore = (score) => ({
  type: UPDATE_SCORE,
  player: {
    score,
  },
});

export const updateRanking = (newPlayer) => ({
  // [ {name: nome-da-pessoa, score: 10, picture: url-da-foto-no-gravatar} ]
  type: UPDATE_RANKING,
  newPlayer,
});

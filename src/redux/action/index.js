export const UPDATE_PLAYER = 'UPDATE_PLAYER';
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

export const updateScore = (score) => ({
  type: UPDATE_SCORE,
  player: {
    score,
  },
});

export const updateRanking = (ranking) => ({
  // [ {name: nome-da-pessoa, score: 10, picture: url-da-foto-no-gravatar} ]
  type: UPDATE_RANKING,
  ranking,
});

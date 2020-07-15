import md5 from 'crypto-js/md5';

export const getGravatar = (email) => {
  const hash = md5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}`;
};

const getToken = () => fetch('https://opentdb.com/api_token.php?command=request').then((res) => res.json());

export const fetchTrivia = async () => {
  const token = await getToken().token;
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}`).then((res) => res.json());
};

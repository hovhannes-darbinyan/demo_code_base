// TODO add fetch or other http client
const RestClient = () => {
  const get = ({ url, headers }) =>  Promise.resolve(); 

  const post = ({ url, body, headers }) => Promise.resolve();

  return { get, post };
};

export default RestClient

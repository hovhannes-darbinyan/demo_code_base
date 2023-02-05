import RestClient from "../index";

const AuthApi = () => {
  const { get, post } = RestClient();
  const refreshToken = () => {
    const refreshToken = "0xasddfgh"; // TODO get from browser some storages
    return get({ url: "/refreshToken", headers: { oldToken: refreshToken } });
  };

  const signIn = (userName, password) => {
    if('test'.includes(userName) && 'test'.includes(password)) {
        return Promise.resolve()
    }
    return Promise.reject()
    // return post({ url: "/refreshToken", body: { userName, password } });
  };

  return {
    refreshToken,
    signIn,
  }
};

export default AuthApi;

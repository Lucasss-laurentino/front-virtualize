import { createContext, useState } from "react";
import { http } from "../http";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {

  const [user, setUser] = useState({
    EMAIL: "",
    NOME_EMPRESA: "",
    PASSWORD: "",
    CONFIRM_PASSWORD: "",
  });

  const [loader, setLoader] = useState(false);
  const [popup, setPopup] = useState(false);
  const [erroLogin, setErroLogin] = useState("");
  const [loaderLogin, setLoaderLogin] = useState(false);
  const login = () => {
    setLoaderLogin(true)
    http.post('/login/login', { user })
    .then((response) => {
      setLoaderLogin(false);
      window.location.href = '/';
    })
    .catch((error) => {
      setErroLogin("Não foi possivel fazer login, dados incorreto!");
      setLoaderLogin(false);
    });
  }

  const createUserAndLogin = () => {
    
    setLoader(true);
    http.post('/login/createUser', { user })
    .then((response) => {
      setLoader(false);
      setPopup(false);
      window.location.href = '/'
    })
    .catch((error) => {
        setLoader(false);
        setPopup(true);
    });
  ;
  }


  return (
    <LoginContext.Provider value={{
      user, 
      setUser,
      login,
      createUserAndLogin,
      loader,
      setLoader,
      setPopup,
      popup,
      erroLogin,
      loaderLogin,
      setLoaderLogin
    }}>
      {children}
    </LoginContext.Provider>
  );
}
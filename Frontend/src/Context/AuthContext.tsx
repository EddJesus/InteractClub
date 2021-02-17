import React, { createContext, useState, useEffect } from "react";
import api from "../services/Api";

interface AuthContextData {
  signed: boolean;
  user: user | null;
  signIn(email: string, password: string): Promise<void>;
  signOut: Function;
  loading: boolean;
}

interface user {
  email: string;
  name: string;
  role: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = (props: any) => {
  const [signed, setSigned] = useState(false);
  const [user, setUser] = useState<user | null>(null);
  const [token, setToken] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function gettingToken(){
      const getToken = await localStorage.getItem("token");

      if(getToken){
      setToken(JSON.parse(getToken))
      }
    }

    gettingToken()

    if (token) {
      api
        .post("/check-token", {
          token: token,
        })
        .then((res) => {
          if (res.status === 401) {
            localStorage.clear();
            setSigned(false);
            setLoading(false);
          } else {
            setSigned(true);
            setLoading(false);
          }
        })
        .catch((error) => {
        });
    }

    if (signed === true) {
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
      }
    }
  }, [signed, token]);

  async function signIn(email: string, password: string) {
    await api
      .post("/session", {
        headers: {
          content_type: "application/json",
        },
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;

          setUser({
            email: data.email,
            name: data.name,
            role: data.role,
          });

          setSigned(true);

          localStorage.setItem("name", data.name);
          localStorage.setItem("role", data.role);
          localStorage.setItem("token", JSON.stringify(data.token));
          api.defaults.headers.Authorization = `Bearer ${data.token}`;
        }
      })
      .catch((error) => {
        console.log("erro --->" + error);
      });
  }

  async function signOut() {
    localStorage.clear();
    setSigned(false);

    window.location.reload();
  }

  return (
    <AuthContext.Provider
      value={{ signed: signed, user: user, signIn, signOut, loading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

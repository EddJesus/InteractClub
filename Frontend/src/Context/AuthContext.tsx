import React, { createContext, useState, useEffect } from "react";
import api from "../services/Api";

interface AuthContextData {
  signed: boolean;
  user: user | null;
  signIn(email: string, password: string): Promise<void>;
  signOut: Function;
  loading: boolean;
  token?: object | string;
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
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gettingToken = localStorage.getItem("token");

    if (gettingToken) {
      setToken(JSON.parse(gettingToken));
    }

    async function getToken() {
      await api
        .post("/check-token", {
          headers: {
            content_type: "application/json",
          },
          token: token,
        })
        .then((res) => {
          setSigned(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getToken();
    setLoading(false);
  }, [token]);

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

          localStorage.setItem("name", data.name);
          localStorage.setItem("role", data.role);
          localStorage.setItem("token", JSON.stringify(data.token));
          api.defaults.headers.Authorization = `Bearer ${data.token}`;

          setSigned(true);
          window.location.reload();
        }
      })
      .catch((error) => {
        window.location.reload();
        console.error("erro --->" + error);
      });
  }

  async function signOut() {
    localStorage.clear();
    setSigned(false);

    window.location.reload();
  }

  return (
    <AuthContext.Provider
      value={{ signed: signed, user: user, signIn, signOut, loading, token }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

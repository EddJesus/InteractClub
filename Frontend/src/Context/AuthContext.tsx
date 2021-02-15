import React, { createContext, useState } from "react";
import api from "../services/Api";

interface AuthContextData {
  signed: boolean;
  user: user | null;
  signIn(email:string, password:string): Promise<void>;
}

interface user{
  email: string,
  name: string,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = (props: any) => {

  const[user, setUser] = useState<user | null>(null);
  
  async function signIn(email: string, password: string) {
    await api.post("./session", {
      headers: {
        content_type: "application/json",
      },
      email: email,
      password: password,
    }).then((response)=>{
      if(response.status === 200){

        const {data} = response;

        setUser({
          email: data.email,
          name: data.name
        })

        console.log(data)
        
        localStorage.setItem('token', JSON.stringify(data.token));
        api.defaults.headers.Authorization = data.token;
      }
    }).catch((error)=>{
        console.log("erro --->" + error)
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user: user, signIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

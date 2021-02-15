import React, { createContext, useState, useEffect } from "react";
import api from "../services/Api";

interface AuthContextData {
  signed: boolean;
  user: user | null;
  signIn(email:string, password:string): Promise<void>;
  signOut: Function
}

interface user{
  email: string,
  name: string,
  role: string,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = (props: any) => {

  
  const[signed, setSigned] = useState(false);
  const[user, setUser] = useState<user | null>(null);
  
  useEffect(()=>{
    const token = localStorage.getItem('token');

    if(token){
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setSigned(true);
    }
  },[])

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
          name: data.name,
          role: data.role
        })  
        
        console.log(data.role)
        console.log(data)
        setSigned(true);
        
        localStorage.setItem('name', data.name);
        localStorage.setItem('role', data.role);
        localStorage.setItem('token', JSON.stringify(data.token));
        api.defaults.headers.Authorization = `Bearer ${data.token}`;

      }
    }).catch((error)=>{
        console.log("erro --->" + error)
    });
  }

  async function signOut(){
    localStorage.clear();
    setSigned(false);

    window.location.reload();
  }

  return (
    <AuthContext.Provider value={{ signed: signed, user: user, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

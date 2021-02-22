import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../Context/AuthContext";
import NavLink from "./NavLink/index";

import { Formik, Form, Field } from "formik";

import userimage from "../../assets/default-user-image.png";
import logo from "../../assets/logo.png";
import settingsicon from "../../assets/settings-branco.svg";

import "./styles.css";

interface user {
  name?: string | null;
  role?: string | null;
}

const Navbar: React.FC = (props) => {
  const { signIn, signed, signOut, loading, token } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<user>({} as user);

  function handleSignIn(e: any) {
    signIn(e.email, e.password);
  }

  useEffect(() => {
    setUser({
      name: localStorage.getItem("name"),
      role: localStorage.getItem("role"),
    });
  }, [signed]);

  return (
    <div className="container-navbar">
      <img className="img" src={logo} alt="/" />

      <div className="links-navbar">
        <ul>
          {signed === false ? (
            <>
              <NavLink key="1" title="Home" link="/" />
              <NavLink key="2" title="Projetos" link="/projects" />
              <NavLink key="3" title="Loja" link="/market" />
              <NavLink key="4" title="Doações" link="/donations" />
              <NavLink key="5" title="Sobre nós" link="/about-us" />
            </>
          ) : (
            <>
              <NavLink key="1" title="Home" link="/" />
              <NavLink key="2" title="Projetos" link="/projects" />
              <NavLink key="3" title="Loja" link="/market" />
              <NavLink key="4" title="Doações" link="/donations" />
              <NavLink key="5" title="Sobre nós" link="/about-us" />
            </>
          )}
        </ul>
      </div>

      <div className="access-navbar">
        {loading === true ?
            <>
            </>
          :
        signed === true && token !== '' ? (
          <>
          <div className="profile-container">
            <img src={userimage} alt="" />
            <div>
            <h3>{user.name}</h3>
              <p>Administrador do site</p>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="profile-settings"
            >
              <img src={settingsicon} alt="" />
            </button>
          </div>
          <button
            onClick={() => {
              signOut();
            }}
          >
            logout
          </button>
        </>
        ) : (
          <>
          <div className="inputs-navbar">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSignIn}
              >
              <Form>
                <p>É um interactiano? Acesse</p>
                <Field type="email" name="email" placeholder="E-mail"></Field>
                <Field
                  type="password"
                  name="password"
                  placeholder="Senha"
                ></Field>
                <button type="submit">Entrar</button>
              </Form>
            </Formik>
          </div>
          <div className="text-dont">
            Não possui cadastro?<a href="/register">Registre-se aqui</a>
          </div>
        </>

        )}
      </div>
    </div>
  );
};

export default Navbar;

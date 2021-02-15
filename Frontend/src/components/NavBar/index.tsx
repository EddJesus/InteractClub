import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

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
  const { signIn, signed, signOut } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<user | null>({} as user);

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/market">Loja</Link>
          </li>
          <li>
            <Link to="/donations">Doações</Link>
          </li>
          <li>
            <Link to="/about-us">Sobre nós</Link>
          </li>
        </ul>
      </div>

      <div className="access-navbar">
        {signed === false ? (
          <>
            <p>É um interactiano? Acesse</p>
            <div className="inputs-navbar">
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSignIn}
              >
                <Form>
                  <Field type="email" name="email" placeholder="E-mail"></Field>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Senha"
                  ></Field>
                  <button type="submit">OK</button>
                </Form>
              </Formik>
            </div>
            <p className="text-dont">
              Não possui cadastro?<a href="/register">Registre-se aqui</a>
            </p>
          </>
        ) : (
          <>
            <div className="profile-container">
              <img src={userimage} alt="" />
              <div>
                <h3>{user?.name}</h3>
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
        )}
      </div>
    </div>
  );
};

export default Navbar;

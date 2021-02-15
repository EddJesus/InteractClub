import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

import { Formik, Form, Field } from "formik";

import logo from "../../assets/logo.png";

import "./styles.css";

const Navbar: React.FC = (props) => {
  const { signed, signIn, user } = useContext(AuthContext);

  console.log(signed)

  const [pageHome, setPageHome] = useState({});
  const [pageProjects, setPageProjects] = useState({});
  const [pageMarket, setPageMarket] = useState({});
  const [pageDonations, setPageDonations] = useState({});
  const [pageAboutUs, setPageAboutUs] = useState({});

  function handleSignIn(e: any) {
    signIn(e.email, e.password);
  }

  function activatePage(n: number) {
    switch (n) {
      case 1:
        setPageHome({
          fontWeight: 700,
          borderRadius: 10,
          background: "#6eabf0",
          transitionDelay: "10ms",
        });
        break;
      case 2:
        setPageProjects({
          fontWeight: 700,
          borderRadius: 10,
          background: "#6eabf0",
          transitionDelay: "10ms",
        });
        break;
      case 3:
        setPageMarket({
          fontWeight: 700,
          borderRadius: 10,
          background: "#6eabf0",
          transitionDelay: "10ms",
        });
        break;
      case 4:
        setPageDonations({
          fontWeight: 700,
          borderRadius: 10,
          background: "#6eabf0",
          transitionDelay: "10ms",
        });
        break;
      case 5:
        setPageAboutUs({
          fontWeight: 700,
          borderRadius: 10,
          background: "#6eabf0",
          transitionDelay: "10ms",
        });
        break;
      default:
    }
  }
  return (
    <div className="container-navbar">
      <img className="img" src={logo} alt="/" />

      <div className="links-navbar">
        <ul>
          <li>
            <Link onClick={() => activatePage(1)} style={pageHome} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => activatePage(2)}
              style={pageProjects}
              to="/projects"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              onClick={() => activatePage(3)}
              style={pageMarket}
              to="/market"
            >
              Loja
            </Link>
          </li>
          <li>
            <Link
              onClick={() => activatePage(4)}
              style={pageDonations}
              to="/donations"
            >
              Doações
            </Link>
          </li>
          <li>
            <Link
              onClick={() => activatePage(5)}
              style={pageAboutUs}
              to="/about-us"
            >
              Sobre nós
            </Link>
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
          <h1>Olá {user?.name}</h1>
        )}
      </div>
    </div>
  );
};

export default Navbar;

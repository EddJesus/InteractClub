import React, { useState } from "react";

import "./styles.css";

import {Upload} from './UploadFile'

import { ErrorMessage, Formik, Form, Field } from "formik";

import textIcon from "../../assets/type.svg";
import imageIcon from "../../assets/image.svg";
import skipBack from "../../assets/skip-back.svg";

import textArray from "../../interfaces/textArrayInterface";

import { Link } from "react-router-dom";

const CreateProject: React.FC = () => {
  const [texts, setTexts] = useState<textArray[]>([{}]);

  function addText() {
    setTexts([...texts, { type: 2 }]);
  }

  function addImg() {
    setTexts([...texts, { type: 1 }]);
  }

  function handleOnSubmit() {}

  console.log(texts);

  return (
    <>
      <div className="container-createproject">
        <Link className="skip-back-create" to="/projects">
          <img src={skipBack} alt="Voltar" />
          Cancelar
        </Link>
        <h1>Crie um novo projeto</h1>
        <div className="btn-addfield">
          <button onClick={addText}>
            <p>+</p>
            <img alt="Adicione um texto" src={textIcon} />
          </button>
          <button onClick={addImg}>
            <p>+</p>
            <img alt="Adicione um texto" src={imageIcon} />
          </button>
        </div>
        <Formik initialValues={{}} onSubmit={handleOnSubmit}>
          <Form>
            <div className="title-field">
              <Field name="title" placeholder="Título" />
              <ErrorMessage name="title" />
            </div>
            {texts.map((text, index) => {
              switch (text.type) {
                case 2:
                  return (
                    <>
                      <Field
                        name={`text${index}`}
                        as="textarea"
                        placeholder="Texto"
                      />
                      <ErrorMessage name="text" />
                    </>
                  );
                case 1:
                  return (
                    <>
                      <Upload></Upload>
                    </>
                  );
              }
            })}
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default CreateProject;

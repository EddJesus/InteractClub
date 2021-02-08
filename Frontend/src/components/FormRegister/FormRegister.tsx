import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik';
import { Redirect } from 'react-router-dom';



// import { Container } from './styles';

const FormRegister = (props:any) => {

    const redirect = props.redirect
    console.log(redirect)

    if(redirect == 1){
        setTimeout(()=>{
            alert("Usuário criado com sucesso!");
        }, 2000)

        return <Redirect to="/" />
    }

    return (
        <Formik initialValues={props.initialValues} onSubmit={props.OnSubmit} validationSchema={props.validations}>

                <Form className="content-box1">
                    <h1 className="color">Criar Conta</h1>
                    <h4 className="color">Começar com conta existente</h4>
                    <button className="logue-fc">Logue com Facebook</button>
                    <br></br>
                    <button className="logue-gg">Logue com Twitter</button>
                    <br></br>
                    <b>
                        <p className="ou">OU</p>
                    </b>
    
                <Field className="caixas" name="name" type="text" placeholder="Nome completo"/>
                <ErrorMessage name="name" render={(e) => <span className="caixas-error">{e}</span> }/>
                    <span>{props.errorEmail}</span>
                <Field className="caixas" name="email" type="email" placeholder="Email"/>
                <ErrorMessage name="email" render={(e) => <span className="caixas-error">{e}</span> }/>
    
                <Field className="caixas" name="tel"  type="text" placeholder="Número de celular"/>
                <ErrorMessage name="tel" render={(e) => <span className="caixas-error">{e}</span> }/>
    
                <Field className="caixas" as="select" name="role">
                    <option value="presidente">Presidente</option>
                    <option value="diretor_de_projetos">Diretor de Projetos</option>
                    <option value="diretor_de_serviços_internos">Diretor de Serviços Internos</option>
                    <option value="diretor_de_imagem_pública">Diretor de Imagem Pública</option>
                    <option value="administrador_do_site">Administrador do site</option>
                    <option value="rotariano_patrocinador">Rotariano patrocinador</option>
                    <option value="associado">Associado</option>
    
                </Field>
                <ErrorMessage name="role" render={(e) => <span className="caixas-error">{e}</span> }/>
    
                <Field className="caixas" name="interactian_code" type="password" placeholder="Código Interactiano"/>
                <ErrorMessage name="interactian_code" render={(e) => <span className="caixas-error">{e}</span> }/>
            
    
                <Field className="caixas" name="password" type="password" placeholder="Senha"/>
                <ErrorMessage name="password" render={(e) => <span className="caixas-error">{e}</span> }/>
    
                <Field className="caixas" name="repeat_password" type="password" placeholder="Confirmar senha"/>
                <ErrorMessage name="repeat_password" render={(e) => <span className="caixas-error">{e}</span> }/>
    
                <button type="submit" className="btnesse">
                    Cadastrar
                </button>
                <h1 className="created-message">{props.created}</h1>
                <h1 className="not-created-message">{props.notCreated}</h1>


            </Form>
    
        </Formik>

    )
}


export default FormRegister;
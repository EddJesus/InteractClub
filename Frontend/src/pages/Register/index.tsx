import React, { useEffect, useState }  from 'react'

import Navbar from '../../components/NavBar'
import FormRegister from '../../components/FormRegister/FormRegister';
import Footer from '../../components/Footer'
import './styles2.css' 
import * as yup from 'yup'
import api from '../../services/Api';
import { Redirect } from 'react-router-dom';
import { render } from 'react-dom';

const Register: React.FC = () => {

	const [created, setCreated] = useState("");
    const [notCreated, setNotCreated] = useState("");
	const [errorEmail, setErroremail] = useState("");
	const [redirect, setRedirect] = useState(0);



    useEffect(() => {

    },[created])

    useEffect(() => {

    },[errorEmail]);



	return (

		<>
			<Navbar />
			<div className="flex-box1 container-box1">
				<FormRegister
				
						initialValues={
							{
								name:"",
								email:'',
								tel:'',
								password:'',
								role:'',
								interactian_code:'',
								repeat_password:''
							}
						} 
									
						OnSubmit={
							async (values:any)=>{
								const response = await api.post('/interactians', {
									headers:{
										content_type: "application/json"
									},
									name: values.name,
									email: values.email,
									tel: values.tel,
									password: values.password, 
									interactian_code: values.interactian_code,
									role: values.role
								}).then((res) => {
									console.log(res.status);
									if(res.status === 201){
										setErroremail("");
										setCreated("Usuário criado com sucesso!");
										setRedirect(1)
									}else{
										setNotCreated("")
									}
					
								}).catch((error)=>{
									console.log(`Esse é o erro -----> ${error.status}`)
					
									switch(error.message){
										case "Request failed with status code 406":
											setErroremail("*Email em uso!");
												break;
									}
								})
				
							}
						} 
									
						validations={	
										
							yup.object().shape({
								name: yup.string().required("*Campo necessário").min(5),
								email: yup.string().email("*Email inválido").min(3, "Email não é grande o suficiente").required("*Campo necessário"),
								tel: yup.string().required("*Campo necessário").min(11, "Número inválido"),
								password: yup.string().required("*Campo necessário").min(8, "*Senha deve ter no mínimo 8 caracteres"),
								role: yup.string().required("*Campo necessário"),
								interactian_code: yup.string().required("*Campo necessário"),
								repeat_password: yup.string().required("*Campo necessário").oneOf([yup.ref('password'), null], 'Senhas não conferem')
							})
						}

						errorEmail={errorEmail}
						created={created}
						notCreated={notCreated}

						redirect={redirect}
				
				/>
				
				

			</div>

			<Footer />
		</>
	)
}

export default Register

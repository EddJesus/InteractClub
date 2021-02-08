import React from 'react';
import sad from '../../assets/frown.svg';

import './styles.css';

const NotFound:React.FC = () => {
  return (
    <>
      <div className="container-NotFound">
        <h1>Desculpe. Página não encontrada!  <img src={sad} alt=""/></h1>
        <a href="/">Volte para a home</a>        
      </div>
    </>
  )
}

export default NotFound;
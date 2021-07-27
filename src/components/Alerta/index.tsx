import React from 'react';
import {Container} from './styles';

const Alerta = (email : string) => {
  return(
   <Container>
       <h4>Cadastrado com sucesso.</h4>
       <p>As nossas ofertas serao enviadas  para o email {email}</p>
   </Container>
  );
}
 export default Alerta;

import React from 'react';
import {Container} from './styles';
interface iAlertaProps{
    email:string;
}

const Alerta: React.FC<iAlertaProps> = ({email}) => {
  return(
   <Container>
       <h4>Cadastrado com sucesso.</h4>
       <p>Todas as ofertas serao enviadas  para o email {email}</p>
   </Container>
  );
}
 export default Alerta;

import React from 'react';
import {Header,Cronometro, Time} from './styles';
const Landing: React.FC = ()=>{
  return(
    <>
    <Header>
        <section>
            <h1>Black friday</h1>
            <p>Esta chegando...</p>
            <p>As melhores ofertas com até <b>50%</b> de desconto.</p>
            <Cronometro>
               <div>
                    <Time>12</Time>
                    <Time>13</Time>
                    <Time>12</Time>
               </div>
               <div>
                    <span>Horas</span>
                    <span>Minutos</span>
                    <span>Segundos</span>
               </div>
            </Cronometro>
        </section>
    </Header>
    </>
  );
}
export default Landing;

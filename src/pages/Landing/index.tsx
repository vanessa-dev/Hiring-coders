import React from 'react';
import {Header,Cronometro, Time, ContainerProduto} from './styles';
import Produto from  '../../components/Produto';
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
    <ContainerProduto>
        <h4>Confira os nossos Produtos mais vendidos!</h4>
        <div className="list">
            <Produto price="320,00" nome="Produto Teste Hiring Coders"/>
            <Produto price="220,00" nome="Produto Teste Hiring Coders 2"/>
            <Produto price="120,00" nome="Produto Teste Hiring Coders 3"/>
        </div>
    </ContainerProduto>


    </>
  );
}
export default Landing;

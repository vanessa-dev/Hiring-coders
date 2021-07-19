import React from 'react';
import {Header,ContainerProduto, ContainerCadastro, Rodape} from './styles';
import Produto from  '../../components/Produto';
const Landing: React.FC = ()=>{
  return(
    <>
    <Header>
        <section>
            <h1>Black friday</h1>
            <p>Esta chegando...</p>
            <p>As melhores ofertas com até <b>50%</b> de desconto.</p>
            {/* <Cronometro>
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
            </Cronometro> */}
        </section>
        <a>QUERO SER AVISADO!</a>
    </Header>
    <ContainerCadastro>
        <div className="descricao">
            <h3>Receba as ofertas no seu email!</h3>
            <p> Não perca nenhum de nossos descontos.</p>
        </div>
        <div className="formulario">
            <form>
                <input placeholder="Nome" />
                <input placeholder="Email" />
                <button>Enviar</button>
            </form>
        </div>
    </ContainerCadastro>
    <ContainerProduto>
        <h4>Confira os nossos Produtos mais vendidos!</h4>
        <div className="list">
            <Produto price="320,00" nome="Produto Teste Hiring Coders"/>
            <Produto price="220,00" nome="Produto Teste Hiring Coders 2"/>
            <Produto price="120,00" nome="Produto Teste Hiring Coders 3"/>
        </div>
    </ContainerProduto>
    <Rodape>
        <p>Desafio Hiring Coders</p>
    </Rodape>
    </>
  );
}
export default Landing;

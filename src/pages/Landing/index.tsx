import React, { FormEvent, useState,useCallback } from 'react';
import {Header,ContainerProduto, ContainerCadastro, Rodape} from './styles';
import Produto from  '../../components/Produto';
const Landing: React.FC = ()=>{
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback((event :  FormEvent<HTMLFormElement>):void =>{
    event.preventDefault();
    nome && localStorage.setItem('@nome', nome);
    email && localStorage.setItem('@email', email);
  },[]);

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
        <a href="#form">QUERO SER AVISADO!</a>
    </Header>
    <ContainerProduto>
        <h4>Confira os nossos Produtos mais vendidos!</h4>
        <div className="list">
            <Produto price="320,00" nome="Produto Teste Hiring Coders"/>
            <Produto price="220,00" nome="Produto Teste Hiring Coders 2"/>
            <Produto price="120,00" nome="Produto Teste Hiring Coders 3"/>
        </div>
    </ContainerProduto>
    <ContainerCadastro id="form">
        <div className="descricao">
            <h3>Receba as ofertas no seu email!</h3>
            <p> Não perca nenhum de nossos descontos.</p>
        </div>
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu Nome" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu Email" />
                <button>Enviar</button>
            </form>
        </div>
    </ContainerCadastro>
    <Rodape>
        <p>Desafio Hiring Coders</p>
    </Rodape>
    </>
  );
}
export default Landing;

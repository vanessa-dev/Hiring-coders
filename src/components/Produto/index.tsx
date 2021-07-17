import React from 'react';
import {Container} from './styles';
import imgProduto from '../../assets/promocao.jpg';

interface iProdutosProps{
    price:string;
    nome:string;
}

const Produto: React.FC<iProdutosProps> = ({price,nome}) =>{
  return (
    <Container>
        <img src={imgProduto} alt="" />
        <p>{nome}</p>
        <div className="info-produto">
            <b>R$ {price}</b>
        </div>
    </Container>
  );
}

export default Produto;

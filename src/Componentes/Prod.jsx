import React from "react";

export default props => 
    <>
    <img src={props.image_produto} id="img_prod"/>
    <div className="div_dados">
    <h1>{props.nome}</h1>
    <h2>{props.preco}</h2>
    <p>{props.descricao}</p>
    <button type="submiy" name="Adicionar"></button>
    </div>
    </>
import React, { useState } from "react";
import "./styles.css";
import Botao1 from "./Componentes/Botao1/Botao1";

export default function App() {
  function mensagem() {
    alert("Hello world");
  }

  const [texto, setTexto] = useState("Abacate");

  function mudando1() {
    setTexto("Morango");
  }

  const [numero, setNumero] = useState(0);
  function aumentandoNumero() {
    setNumero(numero + 1);
  }

  return (
    <>
      <div>
        <h1>Ex3 - Contador Simples</h1>
        <h4>Você clicou {numero} vezes.</h4>
        <button onClick={aumentandoNumero}>Aumentar número</button>
      </div>
      <div>
        <h1>Exercício 2: mudança de texto simples ao clicar em botão</h1>
        <h3>Necessidades aprendidas: usar useState()</h3>
        <h4>{texto}</h4>
        <button onClick={mudando1}>Mudar texto</button>
      </div>
      {/* Lembrete que é assim que comenta em React */}

      <div>
        <h1>Exercício 1: Hello World</h1>
        <Botao1 onClick={mensagem} />
      </div>
    </>
  );
}

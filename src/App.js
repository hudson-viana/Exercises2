import React, { useState } from "react";
import "./styles.css";
import Botao1 from "./Componentes/Botao1/Botao1";
import Form1 from "./Componentes/Ex4/Form1";
import Form2 from "./Componentes/Ex4/Form2";
import Form3 from "./Componentes/Ex5/Form3";

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

  {
    /* Definitions for Ex4 */
  }

  const [value, setValue] = useState("");

  function handleChange() {
    setValue(event.target.value);
  }

  return (
    <>
      <div>
        <h1>Ex5 - Film form</h1>
        <Form3 />
        {/* <Button2 />
        <FilmList /> */}
      </div>
      <div>
        <h1>
          Ex4.2 - Aplicação do useState e event.targe.value no componente pai
        </h1>
        <Form2 whenChanged={handleChange} value={value} />
        <p>You typed: {value} </p>
      </div>
      <div>
        <h1>
          Ex4.1 - Aplicação do useState e event.targe.value no componente de
          entrada (filho)
        </h1>
        <Form1 />
      </div>

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
        <h1>Ex1: Hello World</h1>
        <Botao1 onClick={mensagem} />
      </div>
    </>
  );
}

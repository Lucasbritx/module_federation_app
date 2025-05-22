import React, { useState } from "react";
import "./index.css";

const questions = [
  {
    question: "Como funciona o processo de compra?",
    answer:
      "O processo de compra é simples e rápido. Você escolhe o produto, adiciona ao carrinho e finaliza a compra.",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Aceitamos cartões de crédito, débito, PayPal e transferência bancária.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer:
      "O prazo de entrega varia de acordo com a sua localização. Você pode consultar o prazo estimado no momento da compra.",
  },
  {
    question: "Como posso rastrear meu pedido?",
    answer:
      "Após a confirmação do envio, você receberá um e-mail com o código de rastreamento do seu pedido.",
  },
  {
    question: "Posso devolver um produto?",
    answer:
      "Sim, você pode devolver um produto em até 30 dias após a compra. Consulte nossa política de devolução para mais detalhes.",
  },
];

const QA = () => {
  const [openIndex, setOpenIndex] = (useState < number) | (null > null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1 className="title">Perguntas frequentes</h1>
      <div className="questions">
        {questions.map((item, index) => (
          <div key={index} className="question-item">
            <button
              className="question"
              onClick={() => handleToggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`answer-${index}`}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                font: "inherit",
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
              }}
            >
              {item.question}
            </button>
            {openIndex === index && (
              <p className="answer" id={`answer-${index}`}>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QA;

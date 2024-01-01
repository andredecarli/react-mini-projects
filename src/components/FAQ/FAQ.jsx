import { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  return (
    <>
      {questions.map((q) => <Question question={q} key={q.id} />)}
    </>
  )
}

function Question({question}) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }


  return (
    <div className="question-box">
      <p>{question.question}</p>
      <button onClick={toggleShow}>{show ? "-" : "+"}</button>
      {show && <p>{question.answer}</p>}
    </div>
  )
}

const questions = [
  {
    id: 1,
    question: "question 1",
    answer: "answer 1"
  },
  {
    id: 2,
    question: "question 2",
    answer: "answer 2"
  },
  {
    id: 3,
    question: "question 3",
    answer: "answer 3"
  }
]
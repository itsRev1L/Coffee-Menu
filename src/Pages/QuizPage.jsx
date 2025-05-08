import React from "react";
import QuestionPageStats from "../Componnents/QuizPage/QuizStats/QuizStats";
import QuestionPagePuzzle from "../Componnents/QuizPage/QuizPuzzle/QuizPuzzle";
import QuestionPageInput from "../Componnents/QuizPage/QuizInput/QuizInput";

const questions = [
  {
    id: 1,
    question: "What has keys but can’t pick locks? ",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Bumpkey.jpg",
    hint: "Piano frequency",
    score: 100,
  },
  {
    id: 2,
    question: "What has a head, a tail, is brown, and has no legs?",
    image: "image2.jpg",
    hint: "url",
    score: 40,
  },
];

const QuestionPage = () => {
  return (
    <>
      <QuestionPageStats />
      <QuestionPagePuzzle
        question={questions[0].question}
        image={questions[0].image}
        hint={questions[0].hint}
        score={questions[0].score}
      />
      <QuestionPageInput />
    </>
  );
};

export default QuestionPage;

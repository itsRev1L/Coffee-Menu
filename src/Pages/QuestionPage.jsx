import React from "react";
import QuestionPageStats from "../Componnents/QuestionPage/QuestionPageStats/QuestionPageStats";
import QuestionPageHeader from "../Componnents/QuestionPage/QuestionPageHeader/QuestionPageHeader";
import QuestionPagePuzzle from "../Componnents/QuestionPage/QuestionPagePuzzle/QuestionPagePuzzle";
import QuestionPageInput from "../Componnents/QuestionPage/QuestionPageInput/QuestionPageInput";

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
      <QuestionPageHeader />
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

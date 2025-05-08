import React from "react";
import QuizStats from "../Componnents/QuizPage/QuizStats/QuizStats";
import QuizPuzzle from "../Componnents/QuizPage/QuizPuzzle/QuizPuzzle";
import QuizInput from "../Componnents/QuizPage/QuizInput/QuizInput";

const questions = [
  {
    id: 1,
    question:
      "چه نوع قهوه‌ای از اسپرسو و شیر بخار داده شده تشکیل شده است و طعمی نرم و خامه‌ای دارد؟",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Cappuccino_milk_froth.jpg",
    hint: "شیر بخار",
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
      <QuizStats />
      <QuizPuzzle
        question={questions[0].question}
        image={questions[0].image}
        hint={questions[0].hint}
        score={questions[0].score}
      />
      <QuizInput />
    </>
  );
};

export default QuestionPage;

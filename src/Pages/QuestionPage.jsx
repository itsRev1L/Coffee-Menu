import React from "react";
import QuestionPageStats from "../Componnents/QuestionPage/QuestionPageStats/QuestionPageStats";
import QuestionPageHeader from "../Componnents/QuestionPage/QuestionPageHeader/QuestionPageHeader";
import QuestionPagePuzzle from "../Componnents/QuestionPage/QuestionPagePuzzle/QuestionPagePuzzle";
import QuestionPageInput from "../Componnents/QuestionPage/QuestionPageInput/QuestionPageInput";
const QuestionPage = () => {
  return (
    <>
      <QuestionPageHeader />
      <QuestionPageStats />
      <QuestionPagePuzzle />
      <QuestionPageInput />
    </>
  );
};

export default QuestionPage;

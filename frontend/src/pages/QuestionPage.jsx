import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo.png";
import Question from "../components/Questions";
import allData from "../data/questionList";

function QuestionPage() {
  const [questNumber, setQuestNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <Link to="/" className="Logo_content">
        <img src={logo} alt="Logo Vroommm" className="logo_vroommm" />
      </Link>

      <div>
        <Question
          questionData={allData[questNumber]}
          setQuestNumber={setQuestNumber}
          setCurrentPage={setCurrentPage}
          questNumber={questNumber}
          currentPage={currentPage}
          setGenre=""
        />
      </div>
    </>
  );
}

export default QuestionPage;

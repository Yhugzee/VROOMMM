import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo.png";
import Question from "../components/Questions";
import allData from "../data/questionList";

function QuestionPage() {
  const [questNumber, setQuestNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <Link to="/" className="Logo_content">
        <img src={logo} alt="Logo Vroommm" className="logo_vroommm" />
      </Link>

      <div>
        {currentPage === 0 && (
          <Question
            questionData={allData.find((data) => data.id === questNumber)}
            setQuestNumber={setQuestNumber}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "CarTest" && <p>car test !!!</p>}
      </div>
    </>
  );
}

export default QuestionPage;

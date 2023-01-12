import PropTypes from "prop-types";
import React from "react";
import "../styles/Questions.css";

function Question({ questionData, setQuestNumber, setCurrentPage }) {
  return (
    <section className="question-bloc">
      <h2>{questionData.title}</h2>
      <div className="question-genre">
        {questionData.answers.map(({ text, nextQuestionId }) => (
          <button
            className="button_question"
            key={text}
            type="button"
            onClick={() => {
              if (questionData.label === "Utilitaire" && text === "Oui") {
                setCurrentPage("Utilitaire");
              }
              if (
                questionData.label === "Utilitaire" &&
                text === "Non" &&
                nextQuestionId === 2
              ) {
                setQuestNumber(2);
              }
              if (
                questionData.label === "Passagers" &&
                text === "1" &&
                nextQuestionId === 3
              ) {
                setQuestNumber(3);
              }
              if (
                questionData.label === "Passagers" &&
                text === "Entre 2 et 4" &&
                nextQuestionId === 3
              ) {
                setQuestNumber(3);
              }
              if (questionData.label === "Passagers" && text === "5 et plus") {
                setCurrentPage("Utilitaire");
              }
              if (
                questionData.label === "Bagages" &&
                text === "Oui" &&
                nextQuestionId === 4
              ) {
                setQuestNumber(4);
              }
              if (
                questionData.label === "Bagages" &&
                text === "Non" &&
                nextQuestionId === 5
              ) {
                setQuestNumber(5);
              }
              if (questionData.label === "SUV/BER" && text === "SUV") {
                setCurrentPage("SUV");
              }
              if (questionData.label === "SUV/BER" && text === "Berline") {
                setCurrentPage("Berline");
              }
              if (
                questionData.label === "Citadine/Berline" &&
                text === "Citadine"
              ) {
                setCurrentPage("Citadine");
              }
              if (
                questionData.label === "Citadine/Berline" &&
                text === "Berline"
              ) {
                setCurrentPage("Berline");
              }
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </section>
  );
}

Question.propTypes = {
  questionData: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    title: PropTypes.string,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  setQuestNumber: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Question;

const allData = [
  {
    id: 1,
    label: "Utilitaire",
    title: "Souhaitez-vous un utilitaire ?",
    answers: [
      {
        text: "Oui",
      },
      {
        text: "Non",
        nextQuestionId: 2,
      },
    ],
  },
  {
    id: 2,
    label: "Passagers",
    title: "Combien serez-vous à bord ?",
    answers: [
      {
        text: "1",
        nextQuestionId: 3,
      },
      {
        text: "Entre 2 et 4",
        nextQuestionId: 3,
      },
      {
        text: "5 et plus",
      },
    ],
  },
  {
    id: 3,
    label: "Bagages",
    title: "Transporterez-vous beaucoup de bagages ?",
    answers: [
      {
        text: "Oui",
        nextQuestionId: 4,
      },
      {
        text: "Non",
        nextQuestionId: 5,
      },
    ],
  },
  {
    id: 4,
    label: "SUV/BER",
    title: "Quel type de véhicules désirez-vous ?",
    answers: [
      {
        text: "SUV",
      },
      {
        text: "Berline",
      },
    ],
  },
  {
    id: 5,
    label: "Citadine/Berline",
    title: "Quel type de véhicules désirez-vous ?",
    answers: [
      {
        text: "Citadine",
      },
      {
        text: "Berline",
      },
    ],
  },
];

export default allData;

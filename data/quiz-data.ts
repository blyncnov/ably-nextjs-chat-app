import { Quiztypes } from "../types/types";

export const QuizData: Quiztypes[] = [
  {
    id: "1",
    question: "Rolex is a company that specialized in what type of products ?",
    answers: [
      {
        option: "A",
        text: "Phone",
        correct: false,
      },
      {
        option: "B",
        text: "Watches",
        correct: true,
      },
      {
        option: "C",
        text: "Car",
        correct: false,
      },
      {
        option: "D",
        text: "laptops",
        correct: false,
      },
    ],
  },
  {
    id: "2",
    question: "Is CSS is a programming language ?",
    answers: [
      {
        option: "A",
        text: "True",
        correct: false,
      },
      {
        option: "B",
        text: "False",
        correct: true,
      },
      {
        option: "C",
        text: "Maybe",
        correct: false,
      },
      {
        option: "D",
        text: "Nah",
        correct: false,
      },
    ],
  },
  {
    id: "3",
    question:
      "Is JAVA is a programming language that is widely use all over the world ?",
    answers: [
      {
        option: "A",
        text: "True",
        correct: false,
      },
      {
        option: "B",
        text: "False",
        correct: false,
      },
      {
        option: "C",
        text: "very certain",
        correct: true,
      },
      {
        option: "D",
        text: "Nah",
        correct: false,
      },
    ],
  },
];

export default QuizData;

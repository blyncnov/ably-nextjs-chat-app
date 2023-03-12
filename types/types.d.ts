export interface Quiztypes {
  id: string;
  question: string;
  answers: {
    option: string;
    text: string;
    correct: boolean;
  }[];
}

export default FeaturedHostel;

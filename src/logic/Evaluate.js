// import keypad from '../Keypad.js';

var questions = [];

export default function evaluate(value) {
  if (value !== "") {
    questions.push(value);
  }
  console.log(questions);
  return questions.toString();
}

import { useState } from 'react'
import './App.css'

const questions = [
      // JavaScript Questions
    {
      category: "JavaScript",
      question: "What is the correct way to declare a variable in JavaScript?",
      options: {
        A: "var myVar;",
        B: "variable myVar;",
        C: "let myVar;",
        D: "const myVar;",
      },
      correctAnswer: "A",
    },
    {
      category: "JavaScript",
      question: "Which method is used to parse a JSON string?",
      options: {
        A: "JSON.parse()",
        B: "JSON.stringify()",
        C: "JSON.decode()",
        D: "JSON.convert()",
      },
      correctAnswer: "A",
    },
    {
      category: "JavaScript",
      question: "What will `console.log(typeof NaN)` output?",
      options: { A: '"number"', B: '"NaN"', C: '"undefined"', D: '"object"' },
      correctAnswer: "A",
    },
    {
      category: "JavaScript",
      question:
        "Which of the following is NOT a primitive data type in JavaScript?",
      options: { A: "String", B: "Number", C: "Object", D: "Boolean" },
      correctAnswer: "C",
    },
    {
      category: "JavaScript",
      question: "What does the `push()` method do?",
      options: {
        A: "Adds an element to the beginning of an array",
        B: "Adds an element to the end of an array",
        C: "Removes the last element of an array",
        D: "Removes the first element of an array",
      },
      correctAnswer: "B",
    },
    {
      category: "JavaScript",
      question: "Which keyword is used to define an asynchronous function?",
      options: { A: "async", B: "await", C: "promise", D: "defer" },
      correctAnswer: "A",
    },
    {
      category: "JavaScript",
      question: 'What will the following code return: `Boolean("")`?',
      options: { A: "true", B: "false", C: "undefined", D: "null" },
      correctAnswer: "B",
    },
    {
      category: "JavaScript",
      question: "Which operator is used to compare both value and type?",
      options: { A: "==", B: "===", C: "!=", D: "!==" },
      correctAnswer: "B",
    },
    {
      category: "JavaScript",
      question: "What does the `map()` function do?",
      options: {
        A: "Transforms each element in an array",
        B: "Filters elements in an array",
        C: "Finds an element in an array",
        D: "Sorts an array",
      },
      correctAnswer: "A",
    },
    {
      category: "JavaScript",
      question: "Which of the following statements is true about `null`?",
      options: {
        A: "It is an object",
        B: "It is a primitive data type",
        C: "It represents an intentional absence of any value",
        D: "All of the above",
      },
      correctAnswer: "D",
    },
    {
      category: "JavaScript",
      question: "What is the output of `typeof []`?",
      options: { A: "array", B: "object", C: "undefined", D: "list" },
      correctAnswer: "B",
    },
  
    // React Questions
    {
      category: "React",
      question: "What is the default export of a React component?",
      options: { A: "Component", B: "React", C: "render", D: "default" },
      correctAnswer: "A",
    },
    {
      category: "React",
      question: "Which hook is used to manage state in functional components?",
      options: {
        A: "useState",
        B: "useEffect",
        C: "useReducer",
        D: "useContext",
      },
      correctAnswer: "A",
    },
    {
      category: "React",
      question: "What is the purpose of `useEffect`?",
      options: {
        A: "To manage component state",
        B: "To perform side effects in function components",
        C: "To memoize values",
        D: "To create context",
      },
      correctAnswer: "B",
    },
    {
      category: "React",
      question: "What does the `key` prop do in React?",
      options: {
        A: "Identifies which items have changed",
        B: "Sets a unique identifier for each component",
        C: "Controls component re-renders",
        D: "All of the above",
      },
      correctAnswer: "A",
    },
    {
      category: "React",
      question: "How do you create a functional component in React?",
      options: {
        A: "function MyComponent() {}",
        B: "const MyComponent = () => {}",
        C: "Both A and B",
        D: "class MyComponent extends Component {}",
      },
      correctAnswer: "C",
    },
    {
      category: "React",
      question: "What is the purpose of `React.Fragment`?",
      options: {
        A: "To return multiple elements without a parent node",
        B: "To define a component",
        C: "To manage state",
        D: "To create context",
      },
      correctAnswer: "A",
    },
    {
      category: "React",
      question:
        "Which lifecycle method is called when a component is first rendered?",
      options: {
        A: "componentDidMount",
        B: "render",
        C: "componentDidUpdate",
        D: "constructor",
      },
      correctAnswer: "A",
    },
    {
      category: "React",
      question: "What does `useContext` hook do?",
      options: {
        A: "Manages local component state",
        B: "Accesses context API",
        C: "Handles side effects",
        D: "Memoizes values",
      },
      correctAnswer: "B",
    },
    {
      category: "React",
      question: "What is a controlled component?",
      options: {
        A: "A component that doesn't hold its own state",
        B: "A component that uses hooks",
        C: "A component that handles its own state",
        D: "A component that renders a list",
      },
      correctAnswer: "A",
    },
    {
      category: "React",
      question: "Which method is used to update the state in a class component?",
      options: {
        A: "setState",
        B: "updateState",
        C: "changeState",
        D: "modifyState",
      },
      correctAnswer: "A",
    },
  ];
  const App = () => {
    const [game, setGame] = useState("");
    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [feedback, setFeedback] = useState("");
  
    const handleAnswerClick = (answer) => {
      setSelectedAnswer(answer);
      setIsAnswered(true);
  
      if (answer === questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 1);
        setFeedback("Correct!");
      } else {
        setFeedback("Incorrect!");
      }
    };
  
    const handleNextQuestion = () => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
      setFeedback("");
    };
  
    return (
      <div className="mainContainer">
        <h1>Who wants to become a millionaire?</h1>
        <div>
         
          <Button text="Start Game" /> 
          <Button text="Score" score={score} />
        </div>
  
        <div className="questionContainer">
          <h2>Question {currentQuestionIndex + 1}:</h2>
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="options">
            {Object.entries(questions[currentQuestionIndex].options).map(
              ([key, option]) => (
                <button
                  key={key}
                  onClick={() => handleAnswerClick(key)}
                  disabled={isAnswered}
                  className={
                    isAnswered && key === selectedAnswer
                      ? key === questions[currentQuestionIndex].correctAnswer
                        ? "correct"
                        : "incorrect"
                      : ""
                  }
                >
                  {key}: {option}
                </button>
              )
            )}
          </div>
  
          {isAnswered && (
            <div>
              <h3>{feedback}</h3>
              <button onClick={handleNextQuestion}>Next Question</button>
            </div>
          )}
        </div>
  
        <div className="scoreSection">
          <h3>Total Score: {score}</h3>
        </div>
      </div>
    );
  };
  
  const Button = ({ text, score }) => (
    <button>{text} {text === "Score" && `: ${score}`}</button>
  );
  
  export default App;



import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
import { data } from "../mocks/data"; // Import static data

function QuestionList() {
  const [questions, setQuestions] = useState([]); // Holds the list of questions
  const [loading, setLoading] = useState(true);  // To track loading state

  useEffect(() => {
    // Simulating the fetch call with static data
    setQuestions(data); // Update state with static questions
    setLoading(false);  // Set loading to false after "fetching" data
  }, []); // Empty array ensures this only runs once, on mount

  return (
    <section>
      <h1>Quiz Questions</h1>
      {loading ? (
        <p>Loading...</p> // Show loading text while data is being "fetched"
      ) : (
        <ul>
          {questions.map((question) => (
            <QuestionItem
              key={question.id}  // Unique key for each QuestionItem
              question={question} // Passing each question object to QuestionItem
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default QuestionList;


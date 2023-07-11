import "./GPA_style.css";
import React from "react";
import { useState } from "react";

function GPA() {
  const [semester, setSemester] = useState(1);
  const [prevGPA, setprevGPA] = useState(0);
  const [semGPA, setsemGPA] = useState(0);
  const [GPA, setGPA] = useState(0);
  const credits = [19, 19, 19, 19, 18, 19, 17, 16];
  const calcGPA = (prevGPA, semGPA, semester) => {
    let totalCredits = credits
      .slice(0, semester - 1)
      .reduce((a, b) => a + b, 0);
    return (
      (prevGPA * totalCredits + semGPA * credits[semester - 1]) /
      (totalCredits + credits[semester - 1])
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setGPA(Math.round(calcGPA(prevGPA, semGPA, semester) * 1000) / 1000);
  };
  const reset = () => {
    setSemester(1);
    setprevGPA(0);
    setsemGPA(0);
    setGPA(0);
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="semester">Semester: </label>
        <select
          name="semester"
          id="semester"
          onChange={(e) => setSemester(e.target.value)}
          value={semester}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <br />
        <label htmlFor="prevGPA">Previous GPA: </label>
        <input
          type="number"
          name="prevGPA"
          id="prevGPA"
          min={0}
          max={5}
          step={0.001}
          onChange={(e) => setprevGPA(e.target.value)}
          value={prevGPA}
        />
        <br />
        <label htmlFor="semGPA">Semester GPA: </label>
        <input
          type="number"
          name="semGPA"
          id="semGPA"
          min={0}
          max={5}
          step={0.001}
          onChange={(e) => setsemGPA(e.target.value)}
          value={semGPA}
        />
        <br />
        <button type="submit">Calculate</button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
      <p>
        Cumulative GPA: <span className="GPA">{GPA}</span>
      </p>
    </div>
  );
}

export default GPA;

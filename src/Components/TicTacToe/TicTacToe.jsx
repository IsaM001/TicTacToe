import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import Circle from "../Assets/Circle.png";
import Cross from "../Assets/Cross.png";

// Initial state for the Tic Tac Toe board
let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  // State for the number of moves and game lock
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  // Refs for elements on the page
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  // Array of box refs
  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  // Function to handle a player's move
  const toggle = (e, num) => {
    // Check if the game is locked or the box is already marked
    if (lock || data[num] !== "") {
      return;
    }

    // Determine the player's symbol based on the move count
    if (count % 2 === 0) {
      // Player X's turn
      e.target.innerHTML = `<img src="${Cross}">`;
      data[num] = "x";
    } else {
      // Player O's turn
      e.target.innerHTML = `<img src="${Circle}">`;
      data[num] = "o";
    }

    // Increment the move count
    setCount((prevCount) => prevCount + 1);

    // Check for a win after each move
    checkWin();
  };

  // Function to check for a win
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  // Function to handle a win
  const won = (winner) => {
    setLock(true);

    // Display the winner's symbol in the title
    if (winner === "x") {
      titleRef.current.innerHTML = `Player <img src=${Cross}> is the winner.`;
      document.body.style.background = "#FFBF46";
    } else {
      titleRef.current.innerHTML = `Player <img src=${Circle}> is the winner.`;
      document.body.style.background = "#4CE0B3";
    }

    // Add a class to trigger the transition
    document.body.classList.add("background-transition");
  };

  // Function to reset the game
  const reset = () => {
    // Reset game state and unlock the game
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe Made in <span>React</span>";
    document.body.style.background = "#E2ADF2";

    // Reset the innerHTML of each box
    box_array.forEach((box) => {
      box.current.innerHTML = "";
    });

    // Reset the move count
    setCount(0);
  };

  // Render the Tic Tac Toe board
  return (
    <div className="container">
      <h1 className="title hidden" ref={titleRef}>
        Tic Tac Toe Made using <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            ref={box2}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            ref={box3}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            ref={box4}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            ref={box5}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            ref={box6}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            ref={box7}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            ref={box8}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            ref={box9}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>

      {/* Reset button */}
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;

import React, { useState } from "react";
import { Button, Box } from "@material-ui/core";
import "./App.css";

function App() {
  const [human, setHuman] = useState("");
  const [ai, setAi] = useState("");
  const [board, setBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [channel0, setChannel0] = useState("");
  const [channel1, setChannel1] = useState("");
  const [channel2, setChannel2] = useState("");
  const [channel3, setChannel3] = useState("");
  const [channel4, setChannel4] = useState("");
  const [channel5, setChannel5] = useState("");
  const [channel6, setChannel6] = useState("");
  const [channel7, setChannel7] = useState("");
  const [channel8, setChannel8] = useState("");
  const [round, setRound] = useState(0);
  // console.log("board", board);

  const handleClickTable = (index, player) => {
    if (board[index] !== "X" && board[index] !== "O") {
      setRound(round + 2);
      // console.log("round", round);
      let newboard = board;
      newboard[index] = human;
      setBoard(newboard);
      console.log("board", board);
      if (winning(board, player)) {
        setTimeout(function () {
          alert("YOU WIN");
          reset();
        }, 500);
        return;
      } else if (round > 7) {
        setTimeout(function () {
          alert("TIE");
          reset();
        }, 500);
        return;
      } else {
        // setRound(round + 1);
        // console.log('roundAi', round)
        let aiIndex = minimax(board, ai).index;
        console.log('minimax(board, ai)', minimax(board, ai))
        let newboard = board;
        newboard[aiIndex] = ai;
        setBoard(newboard);
        if (aiIndex === 0) {
          setChannel0(ai);
        } else if (aiIndex === 1) {
          setChannel1(ai);
        } else if (aiIndex === 2) {
          setChannel2(ai);
        } else if (aiIndex === 3) {
          setChannel3(ai);
        } else if (aiIndex === 4) {
          setChannel4(ai);
        } else if (aiIndex === 5) {
          setChannel5(ai);
        } else if (aiIndex === 6) {
          setChannel6(ai);
        } else if (aiIndex === 7) {
          setChannel7(ai);
        } else {
          setChannel8(ai);
        }
        console.log("board", board);
        if (winning(board, ai)) {
          setTimeout(function () {
            alert("YOU LOSE");
            reset();
          }, 500);
          return;
        }
        else if (round > 7) {
          setTimeout(function () {
            alert("tie");
            reset();
          }, 500);
          return;
        }
      }
    }
  };

  function winning(board, player) {
    if (
      (board[0] === player && board[1] === player && board[2] === player) ||
      (board[3] === player && board[4] === player && board[5] === player) ||
      (board[6] === player && board[7] === player && board[8] === player) ||
      (board[0] === player && board[3] === player && board[6] === player) ||
      (board[1] === player && board[4] === player && board[7] === player) ||
      (board[2] === player && board[5] === player && board[8] === player) ||
      (board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function minimax(reboard, player) {
    let allAvailIndex = avail(reboard);
    if (winning(reboard, human)) {
      return {
        score: -10,
      };
    } else if (winning(reboard, ai)) {
      return {
        score: 10,
      };
    } else if (allAvailIndex.length === 0) {
      return {
        score: 0,
      };
    }

    let moves = [];
    for (let i = 0; i < allAvailIndex.length; i++) {
      let move = {};

      move.index = reboard[allAvailIndex[i]];
      reboard[allAvailIndex[i]] = player;

      if (player === ai) {
        let g1 = minimax(reboard, human);
        move.score = g1.score;
      } else {
        let g2 = minimax(reboard, ai);
        move.score = g2.score;
      }
      reboard[allAvailIndex[i]] = move.index;
      moves.push(move);
    }

    let bestMove;
    if (player === ai) {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  }
  function avail(reboard) {
    return reboard.filter((s) => s !== "X" && s !== "O");
  }

  function reset() {
    setRound(0);
    setBoard([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    setChannel0("");
    setChannel1("");
    setChannel2("");
    setChannel3("");
    setChannel4("");
    setChannel5("");
    setChannel6("");
    setChannel7("");
    setChannel8("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TIC-TAC-TOE</h1>
        {human === "" ? (
          <>
            <p>Choose "X" or "O" before starting</p>
            <Box display="flex" flexDirection="row">
              <Button
                variant="contained"
                onClick={() => {
                  setHuman("X");
                  setAi("O");
                }}
              >
                X
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setHuman("O");
                  setAi("X");
                }}
              >
                O
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Box display="flex" flexDirection="row">
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(0, human);
                  setChannel0(human);
                }}
              >
                {channel0}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(1, human);
                  setChannel1(human);
                }}
              >
                {channel1}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(2, human);
                  setChannel2(human);
                }}
              >
                {channel2}
              </Box>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(3, human);
                  setChannel3(human);
                }}
              >
                {channel3}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(4, human);
                  setChannel4(human);
                }}
              >
                {channel4}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(5, human);
                  setChannel5(human);
                }}
              >
                {channel5}
              </Box>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(6, human);
                  setChannel6(human);
                }}
              >
                {channel6}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(7, human);
                  setChannel7(human);
                }}
              >
                {channel7}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(8, human);
                  setChannel8(human);
                }}
              >
                {channel8}
              </Box>
            </Box>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Button, Box } from "@material-ui/core";
import "./App.css";

function App() {
  const [human, setHuman] = useState("");
  const [ai, setAi] = useState("");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [channel0, setChannel0] = useState("");
  const [channel1, setChannel1] = useState("");
  const [channel2, setChannel2] = useState("");
  const [channel3, setChannel3] = useState("");
  const [channel4, setChannel4] = useState("");
  const [channel5, setChannel5] = useState("");
  const [channel6, setChannel6] = useState("");
  const [channel7, setChannel7] = useState("");
  const [channel8, setChannel8] = useState("");
  console.log("human", human);
  console.log("ai", ai);
  console.log("board", board);
  console.log("board[0]", board[0]);

  const handleClickTable = (index) => {
    let newboard = board;
    newboard[index] = human;
    setBoard(newboard);
    console.log("board", board);
    return;
  };

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
                  handleClickTable(0);
                  setChannel0(human);
                }}
              >
                {channel0}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(1);
                  setChannel1(human);
                }}
              >
                {channel1}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(2);
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
                  handleClickTable(3);
                  setChannel3(human);
                }}
              >
                {channel3}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(4);
                  setChannel4(human);
                }}
              >
                {channel4}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(5);
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
                  handleClickTable(6);
                  setChannel6(human);
                }}
              >
                {channel6}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(7);
                  setChannel7(human);
                }}
              >
                {channel7}
              </Box>
              <Box
                my="auto"
                className="box"
                onClick={() => {
                  handleClickTable(8);
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

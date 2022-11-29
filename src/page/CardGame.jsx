import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import History from "./History";

const styleInput = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const history = [
  {score: [], result: 0},
  {score: [], result: 0},
  {score: [], result: 0},
  {score: [], result: 0}
]

const scoreInput = {
  scoreUser1: "",
  scoreUser2: "",
  scoreUser3: "",
  scoreUser4: "",
}

const CardGame = ({ players, setPalayers, playerList }) => {
  const navigate = useNavigate()
  const [round, setRound] = useState(0);
  const [scoreHistory, setScoreHistory] = useState(history)
  const [score, setScore] = useState(scoreInput);

  const onchangeScore = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (value.length > 3) {
      value = parseInt(value.substring(0, 4));
    }

    setScore({
      ...score,
      [name]: value,
    });
  };

  const isValid = () => {
    if (
      (score && score.scoreUser1 === "") ||
      score.scoreUser2 === "" ||
      score.scoreUser3 === "" ||
      score.scoreUser4 === ""
    ) {
      return false;
    }
    return true;
  };

  const handleSaveScore = () => {
    if (!isValid()) {
      alert("Vui lòng nhập đầy đủ điểm");
      return;
    }

    const newScoreHistory = [...scoreHistory]
    newScoreHistory[0]?.score.push(score.scoreUser1)
    newScoreHistory[1]?.score.push(score.scoreUser2)
    newScoreHistory[2]?.score.push(score.scoreUser3)
    newScoreHistory[3]?.score.push(score.scoreUser4)

    for(let x=0; x < newScoreHistory.length; x++){
      let sum = 0
      for(let i=0; i < newScoreHistory[x].score.length; i++){
        sum += (+newScoreHistory[x].score[i])
      }
      newScoreHistory[x].result = sum
    }
   
    setScoreHistory(newScoreHistory)
    setScore(scoreInput)
    setRound((prev) => prev + 1)
  };

  const resetGame = async () => {
    setPalayers(playerList)
    setRound(0)
    setScore(scoreInput)
    setScoreHistory([
      {score: [], result: 0},
      {score: [], result: 0},
      {score: [], result: 0},
      {score: [], result: 0}
    ])
  }

  return (
    <div>
      <Typography
        variant="h5"
        style={{ color: "#FF0000", textAlign: "center" }}
      >
        Ván {round + 1}
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card style={{ width: "23.8%", margin: "2px 2px" }}>
          <CardContent style={styleInput}>
            <Typography variant="h5" style={{fontWeight: "bold", color: "#483D8B"}}>{players[0].player}</Typography>
            <TextField
              size="small"
              fullWidth
              type="number"
              value={score.scoreUser1}
              name="scoreUser1"
              onChange={onchangeScore}
            />
          </CardContent>
        </Card>
        <Card style={{ width: "23.8%", margin: "2px 2px" }}>
          <CardContent style={styleInput}>
            <Typography variant="h5" style={{fontWeight: "bold", color: "#FF0000"}}>{players[1].player}</Typography>
            <TextField
              size="small"
              fullWidth
              type="number"
              value={score.scoreUser2}
              name="scoreUser2"
              onChange={onchangeScore}
            />
          </CardContent>
        </Card>
        <Card style={{ width: "23.8%", margin: "2px 2px" }}>
          <CardContent style={styleInput}>
            <Typography variant="h5" style={{fontWeight: "bold", color: "#228B22"}}>{players[2].player}</Typography>
            <TextField
              size="small"
              fullWidth
              type="number"
              value={score.scoreUser3}
              name="scoreUser3"
              onChange={onchangeScore}
            />
          </CardContent>
        </Card>
        <Card style={{ width: "23.8%", margin: "2px 2px" }}>
          <CardContent style={styleInput}>
            <Typography variant="h5" style={{fontWeight: "bold", color: "#4682B4"}}>{players[3].player}</Typography>
            <TextField
              size="small"
              fullWidth
              type="number"
              value={score.scoreUser4}
              name="scoreUser4"
              onChange={onchangeScore}
            />
          </CardContent>
        </Card>
      </div>

      <div
        style={{ marginTop: "15px", display: "flex", justifyContent: "center" }}
      >
        <div>
          <Button variant="outlined" size="small" onClick={resetGame} style={{marginRight: "15px"}}>
            Làm lại
          </Button>
          <Button size="small" variant="contained" onClick={handleSaveScore}>
            OK
          </Button>
        </div>
      </div>

      <div style={{marginTop: "20px"}}>
        <Typography style={{textAlign: "center"}} variant="h5">Lịch sử</Typography>

        <History scoreHistory={scoreHistory} players={players}/>
      </div>
    </div>
  );
};

export default CardGame;

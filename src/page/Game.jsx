import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardGame from "./CardGame";

const list = [
  { player: ""},
  { player: ""},
  { player: ""},
  { player: ""},
];

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [players, setPalayers] = useState(list);

  useEffect(() => {
    if(!location.state?.user){
        navigate("/")
    }
    const user = location.state?.user;
    const players = [...list];
    if(user){
      Object.values(user).map((item, index) => (players[index].player = item));
    }
    setPalayers(players);
  }, []);

  return (
    <div style={{ margin: "20px 10px" }}>
      <CardGame players={players} setPalayers={setPalayers} playerList={list}/>
    </div>
  );
};

export default Game;

import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InitialGame = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    user1: "",
    user2: "",
    user3: "",
    user4: "",
  });

  const onChangeUser = (e) => {
    const name = e.target.name;
    setUser({
      ...user,
      [name]:
        e.target.value.length > 6
          ? e.target.value.substring(0, 6)
          : e.target.value,
    });
  };

  const isValid = () => {
    if (
      (user && user.user1 === "") ||
      user.user2 === "" ||
      user.user3 === "" ||
      user.user4 === ""
    ) {
      return false;
    }
    return true;
  };

  const redirectToGame = () => {
    if (!isValid()) {
      alert("Vui lòng nhập đầy đủ tên 4 thần bài");
      return;
    }
    navigate("/game", {
      state: {
        user: user,
      },
    });
  };

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <fieldset style={{ width: "90%" }}>
          <legend>Vui lòng nhập tên các thần bài</legend>
          <div style={{ margin: "15px 5px" }}>
            <TextField
              fullWidth
              label="Thần bài 1"
              size="small"
              name="user1"
              value={user.user1}
              onChange={onChangeUser}
            />
          </div>
          <div style={{ margin: "15px 5px" }}>
            <TextField
              fullWidth
              label="Thần bài 2"
              size="small"
              name="user2"
              value={user.user2}
              onChange={onChangeUser}
            />
          </div>
          <div style={{ margin: "15px 5px" }}>
            <TextField
              fullWidth
              label="Thần bài 3"
              size="small"
              name="user3"
              value={user.user3}
              onChange={onChangeUser}
            />
          </div>
          <div style={{ margin: "15px 5px" }}>
            <TextField
              fullWidth
              label="Thần bài 4"
              size="small"
              name="user4"
              value={user.user4}
              onChange={onChangeUser}
            />
          </div>
        </fieldset>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Button size="small" variant="contained" onClick={redirectToGame}>
          Vào game
        </Button>
      </div>
    </div>
  );
};

export default InitialGame;

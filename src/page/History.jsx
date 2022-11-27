import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const History = ({ players, scoreHistory }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Ván</TableCell>
              <TableCell>{players[0].player}</TableCell>
              <TableCell>{players[1].player}</TableCell>
              <TableCell>{players[2].player}</TableCell>
              <TableCell>{players[3].player}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scoreHistory[0]?.score.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{scoreHistory[0].score[index]}</TableCell>
                <TableCell>{scoreHistory[1].score[index]}</TableCell>
                <TableCell>{scoreHistory[2].score[index]}</TableCell>
                <TableCell>{scoreHistory[3].score[index]}</TableCell>
              </TableRow>
            ))}
             <TableRow>
                <TableCell component="th" scope="row">Tổng</TableCell>
                <TableCell>{scoreHistory[0].result}</TableCell>
                <TableCell>{scoreHistory[1].result}</TableCell>
                <TableCell>{scoreHistory[2].result}</TableCell>
                <TableCell>{scoreHistory[3].result}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div>
          
      </div>
    </div>
  );
};

export default History;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Mathan Jayakumar (Front-End Developer)", "Sri Lanka Head Office", "2019 - 09 - 10", "Sesto Software Development"),
  createData("Viyookan (Developer)", "Sri Lanka Head Office", "2021 - 05 - 10", "Sesto Maintenance")
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: ' ',
      color: '',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '',
      color: '',
    }
  }
  else{
    return{
      background: '',
      color: '',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Welcome to Zelora Pvt.Ltd</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Hired Date</TableCell>
                <TableCell align="left">Department</TableCell>
                <TableCell align="left">Birthday</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">-</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}

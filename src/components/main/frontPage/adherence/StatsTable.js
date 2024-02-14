import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





function StatsTable ({stats}) {

    let names = stats.map((i, index) =>  (i.NAME));
    let calls = stats.map((i, index) =>  (i.CALLS));
    let callExperience = stats.map((i, index) =>  (i.CALL_EXPERIENCE));
    let sfCallLog = stats.map((i, index) =>  (i.SF_CALL_LOG_PERCENTAGE));
    let averageHoldTime = stats.map((i, index) =>  (i.AHT));
    let chats = stats.map((i, index) =>  (i.CHATS));


    function createData(name, calls, callExperience, sfCallLog, averageHoldTime, chats) {
        return { name, calls, callExperience, sfCallLog, averageHoldTime, chats};
      }

    let rows = [];

    for (let i = 0; i < names.length; i++) {
        rows.push(createData(names[i], calls[i], callExperience[i], sfCallLog[i], averageHoldTime[i], chats[i]));
         
    }


    return (
        <>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Calls</StyledTableCell>
                    <StyledTableCell align="right">Call Experience</StyledTableCell>
                    <StyledTableCell align="right">Sf call logs</StyledTableCell>
                    <StyledTableCell align="right">AHT</StyledTableCell>
                    <StyledTableCell align="right">Chats</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calls}</StyledTableCell>
                    <StyledTableCell align="right">{row.callExperience}</StyledTableCell>
                    <StyledTableCell align="right">{row.sfCallLog}</StyledTableCell>
                    <StyledTableCell align="right">{row.averageHoldTime}</StyledTableCell>
                    <StyledTableCell align="right">{row.chats}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>

        </>

    )
}

export default StatsTable;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
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
function clientData(
    id: string,
    name: string,
    contactName: string,
    contactEmail: string,
    totalBilled: number,
    taxCode: string,
    iban: string,
    address: string,
    userId: string,
    invoiceCount: number
) {
    return { id, name, contactName, contactEmail, totalBilled, taxCode, iban, address, userId,  invoiceCount};
}

const clientDataRows = [
    clientData('8d4864d9-16e0-4a6d-8434-77fcf9278430', 'Diana', '1649990667218', '3923', 45, '52a976e8-7e91-4bfe-a7e4-a80d6a1f4185', 'Macejkovic Group', 'Jill Lesch','', 1),
    clientData('11dd9997-029b-445e-b5f0-b2214ad9d9c7', 'Adrian', '1650011833214', '375', 67, 'b4268f8e-6732-419a-b0f8-ee6f1f644e21', 'Altenwerth Inc', 'Brandi Hamill','', 1),
    clientData('c1759b52-f4da-4d4c-ac67-98a507a18d0d', 'Ionut', '1649970573926', '3715', 89, 'b4074523-1dd0-4634-89e6-09d468abe860', 'McLaughlin, Sipes and Mayert', 'Javier Jerde','', 3),
    clientData('35441309-204a-4190-8ab6-67d008389832', 'Stefan', '1649992924727', '3632', 23, '52a976e8-7e91-4bfe-a7e4-a80d6a1f4185', 'Macejkovic Group', 'Jill Lesch','', 3),
];

function invoiceData(
    id: string,
    date: string,
    dueDate: string,
    total: number,
    clientId: string,
    companyName: string,
    contactName: string,
    contactEmail: string
) {
    return { id, date, dueDate, total, clientId, companyName, contactName, contactEmail };
}

const invoiceDataRows = [
    invoiceData('8d4864d9-16e0-4a6d-8434-77fcf9278430', '1649898593451', '1649990667218', 3923, '52a976e8-7e91-4bfe-a7e4-a80d6a1f4185', 'Macejkovic Group', 'Jill Lesch', 'Felicita_Orn@gmail.com'),
    invoiceData('11dd9997-029b-445e-b5f0-b2214ad9d9c7', '1649908146971', '1650011833214', 3757, 'b4268f8e-6732-419a-b0f8-ee6f1f644e21', 'Altenwerth Inc', 'Brandi Hamill', 'Obie.Thiel@yahoo.com'),
    invoiceData('c1759b52-f4da-4d4c-ac67-98a507a18d0d', '1649871541756', '1649970573926', 3715, 'b4074523-1dd0-4634-89e6-09d468abe860', 'McLaughlin, Sipes and Mayert', 'Javier Jerde', 'Jessy6@hotmail.com'),
    invoiceData('35441309-204a-4190-8ab6-67d008389832', '1649864157029', '1649992924727', 3632, '52a976e8-7e91-4bfe-a7e4-a80d6a1f4185', 'Macejkovic Group', 'Jill Lesch', 'Felicita_Orn@gmail.com'),
];

export default function Clients() {
    return (
        <>
            <Grid xs={6} md={8}
                style={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '600px'
                }}
            >
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Client Name</StyledTableCell>
                                <StyledTableCell align="right">Total billed</StyledTableCell>
                                <StyledTableCell align="right">Invoices Count</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {clientDataRows.map((rows) => (
                                <StyledTableRow key={rows.name}>
                                    <StyledTableCell component="th" scope="rows"> {rows.name} </StyledTableCell>
                                    <StyledTableCell align="right">{rows.totalBilled}</StyledTableCell>
                                    <StyledTableCell align="right">{rows.invoiceCount}</StyledTableCell>
                                
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid xs={6} md={4}
                style={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '700px'
                }}
            >
                <TableContainer component={Paper}>

                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Company Name</StyledTableCell>
                                <StyledTableCell align="right">Date</StyledTableCell>
                                <StyledTableCell align="right">Value</StyledTableCell>
                                <StyledTableCell align="right">Client Name</StyledTableCell>
                                <StyledTableCell align="right">Due Date</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoiceDataRows.map((row) => (
                                <StyledTableRow key={row.companyName}>
                                    <StyledTableCell component="th" scope="row"> {row.companyName} </StyledTableCell>
                                    <StyledTableCell align="right">{row.date}</StyledTableCell>
                                    <StyledTableCell align="right">{row.total}</StyledTableCell>
                                    <StyledTableCell align="right">{row.contactName}</StyledTableCell>
                                    <StyledTableCell align="right">{row.dueDate}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    )
}
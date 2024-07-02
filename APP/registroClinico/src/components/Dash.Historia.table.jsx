import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDocuments } from '../context/documents.context';

const columns = [
    { id: '#', label: '#', minWidth: 10 },
    { id: 'name', label: 'Nombre', minWidth: 80 },
    {
        id: 'apellido',
        label: 'Apellido',
        minWidth: 80,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'typedocument',
        label: 'Tipo de documento',
        minWidth: 40,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}



export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const { Documentos } = useDocuments()
 console.log(Documentos)
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 150 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Documentos && Documentos.map((item, index) => (
                            <TableRow hover role="checkbox" tabIndex={-1} >
                                <TableCell  >
                                    {index}
                                </TableCell>
                                <TableCell  >
                                    {item.name}
                                </TableCell>
                                <TableCell  >
                                    {item.lastname}
                                </TableCell>
                                <TableCell  >
                                    {item.typeDocument}
                                </TableCell>
                                <TableCell  >
                                    {item.document}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={Documentos.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
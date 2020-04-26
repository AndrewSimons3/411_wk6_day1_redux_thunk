import React from 'react'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Container from '@material-ui/core/Container'
import { MoreVert } from '@material-ui/icons'

const Import = (props) => {
    // fill out this component

    return (
        <Container>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>
                Import
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                        <MoreVert></MoreVert>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, idx) => (
                        <TableRow key={make.id}>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>{make.MakeId}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
        
    )
}

export default Import
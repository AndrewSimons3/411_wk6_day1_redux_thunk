import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Menu, MenuItem } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'


const Import = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [MakeId, selectMakeId] = React.useState(null)

    const handleClick = (event, idx) => {
        setAnchorEl(event.currentTarget);
        selectMakeId(idx)
    };

    const handleClose = () => {
        setAnchorEl(null);
        props.deleteMake(MakeId)
    };


    // fill out this component

    return (
        <div>
        <Container>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>
                Import
            </Button>
            <h2>Count: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, idx) => (
                        <TableRow key={make.id}>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell><MoreVert onClick= {(event) => handleClick(event, idx)}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>

        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
        </div>
        
    )
}

export default Import
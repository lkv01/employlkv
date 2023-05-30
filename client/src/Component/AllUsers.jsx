import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Employee-UserId</TableCell>
                    <TableCell>Employee-Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Employee-Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user._id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserDetails(user._id)} >Delete</Button>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>


        // <Table>
        //     <TableHead>
        //         <TableRow>
        //             <TableCell>Id</TableCell>
        //             <TableCell>Name</TableCell>
        //             <TableCell>Username</TableCell>
        //             <TableCell>Email</TableCell>
        //             <TableCell>Phone</TableCell>
        //         </TableRow>
        //     </TableHead>

        //     <TableBody>
        //     {users.map((user) => (
        //             <TableRow key={user.id}>
        //                 <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
        //                 <TableCell>{user.name}</TableCell>
        //                 <TableCell>{user.username}</TableCell>
        //                 <TableCell>{user.email}</TableCell>
        //                 <TableCell>{user.phone}</TableCell>
        //             </TableRow>
        //         ))}
        //     </TableBody>
        // </Table>

        // <p>hello for AllUsers</p>
    )
}

export default AllUsers;
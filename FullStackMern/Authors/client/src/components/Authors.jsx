import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Authors = (props) => {
    const [authors , setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/authors')
            .then(response => {
                setAuthors(response.data);
                console.log(response.data);
                console.log("authors" +authors);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
        
    }

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/author/' + authorId)
            .then(res => {
                removeFromDom(authorId);  
            })
            .catch(err => console.error(err));
    }


    

    return (
        <>
            <Typography variant="h4">Favorite Authors</Typography>
            <Link to={"/authors/new"}>
                <Button variant="contained" color="primary">
                    Add New Author
                </Button>
            </Link>
            <Typography variant="h6">List of Authors</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Actions available</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {authors.map((author, index) => (
                            <TableRow key={index}>
                                <TableCell>{author.name}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={'/author/'+ author._id +'/edit'} variant="contained" color="primary">
                                        Edit
                                    </Button>
                                    <Button variant="contained" 
                                            color="secondary" 
                                            onClick= {e => {deleteAuthor(author._id)}}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
export default Authors; 

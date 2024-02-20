import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './basicTable.css';


function BasicTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <h3 align='center'>Table Generation Using Axios</h3>
    <TableContainer className='TableContainer' component={Paper}>
      <Table className='Table' sx={{ maxWidth:'950px', margin: '0 auto' }} aria-label="simple table">
        <TableHead className='TableHeadCell'>
          <TableRow>
            <TableCell align='center' style={{fontWeight:'bold',color:'white',fontSize:'16px'}}>User ID</TableCell>
            <TableCell align='center' style={{fontWeight:'bold',color:'white',fontSize:'16px'}}>ID</TableCell>
            <TableCell align='center' style={{fontWeight:'bold',color:'white',fontSize:'16px'}}>Title</TableCell>
            <TableCell align='center' style={{fontWeight:'bold',color:'white',fontSize:'16px'}}>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='TableCell'>
          {data.map(row => (
            <TableRow key={row.id} className='TableRow'>
              <TableCell align='center'>{row.userId}</TableCell>
              <TableCell align='center'>{row.id}</TableCell>
              <TableCell align='center'>{row.title}</TableCell>
              <TableCell align='center'>{row.completed ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default BasicTable;

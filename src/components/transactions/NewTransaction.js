import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

function NewTransaction({ addTransactions }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const newTransactions = (e) => {
    if (text.length === 0 && amount.length === 0) {
      return alert('Please enter a transaction');
    }
    const transaction = {
      id: Math.floor(Math.random() * 1000000000),
      text: text,
      amount: +amount,
    };
    addTransactions(transaction);
    setText('');
    setAmount('');
  };
  return (
    <Box sx={{ padding: 2 }}>
      <Typography sx={{ fontWeight: 900, marginBottom: 2 }}>
        New Transactions:
      </Typography>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box>
          <TextField
            value={text}
            label="Enter Text"
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            value={amount}
            label="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Button onClick={newTransactions} sx={{ marginTop: 2 }}>
          Add Transaction
        </Button>
      </Box>
    </Box>
  );
}

export default NewTransaction;

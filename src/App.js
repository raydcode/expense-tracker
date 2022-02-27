import React, { useState } from 'react';
import { NewTransaction, Transactions } from './components/transactions';
import Balance from './components/balance';
import Expense from './components/expense';
import { Typography, Paper } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
const useStyles = makeStyles({
  root: {
    padding: 0,
    borderRadius: 20,
    width: 700,
    '&> *': {
      padding: 10,
    },
  },
});

function App() {
  const classes = useStyles();

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: 'Books',
      amount: -300,
    },
    {
      id: 2,
      text: 'Netflix',
      amount: -199,
    },
    {
      id: 3,
      text: 'Food',
      amount: -3000,
    },
    {
      id: 4,
      text: 'Rent',
      amount: -5000,
    },
    {
      id: 5,
      text: 'Clothes',
      amount: -3000,
    },
    {
      id: 6,
      text: 'Salary',
      amount: 30000,
    },
  ]);

  const addTransactions = (data) => {
    const newTransactions = [...transactions, data];
    setTransactions(newTransactions);
  };

  const removeTransaction = (id) => {
    const filteredTransactions = transactions.filter((item) => item.id !== id);

    setTransactions(filteredTransactions);
  };

  return (
    <div className="App">
      <Typography sx={{ marginBottom: 5, fontWeight: 'bold', marginTop: 2,color: 'white' }}>
        Expense Tracker
      </Typography>
      <Paper elevation={3} className={classes.root}>
        <Balance transactions={transactions} />
        <Expense transactions={transactions} />
        <Transactions
          transactions={transactions}
          removeTransaction={removeTransaction}
        />
        <NewTransaction addTransactions={addTransactions} />
      </Paper>
    </div>
  );
}

export default App;

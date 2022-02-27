import React from 'react';

import { Card, CardContent, Typography, Box } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  trade: {
    flex: 1,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
  },

  income: {
    color: 'green',
    paddingLeft: 5,
  },
  expense: {
    color: 'red',
    paddingLeft: 5,
  },
});

function Expense({ transactions }) {
  const styles = useStyles();
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc = acc + item), 0)
    .toFixed(2);
  const expense = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc = acc + item), 0)
    .toFixed(2);
  return (
    <Box>
      <Card className={styles.container}>
        <CardContent className={styles.trade}>
          <Typography>Income </Typography>
          <Typography className={styles.income}>+{income}</Typography>
        </CardContent>
        <CardContent className={styles.trade}>
          <Typography>Expenses </Typography>
          <Typography className={styles.expense}>{expense}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Expense;

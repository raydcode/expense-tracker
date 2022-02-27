import React from 'react';

import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    fontSize: '2em',
    fontWeight: 900,
  },
});

function Balance({ transactions }) {
  const classes = useStyles();
  const amount = transactions.map((item) => item.amount);

  const total = amount
    .reduce((amount, item) => (amount = amount + item), 0)
    .toFixed(2);

  return (
    <Box>
      <Typography className={classes.root} sx={{ fontWeight: 'bold' }}>
        Balance : ₹ {total}
      </Typography>
    </Box>
  );
}

export default Balance;

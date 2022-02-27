import React from 'react';

import { Typography, Box, List, Divider } from '@mui/material';
import { Transaction } from '.';

function Transactions({ transactions, removeTransaction }) {
  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold' }}>History :</Typography>
      <Divider style={{ width: '100%' }} />
      <List>
        {transactions.map((transaction) => {
          return (
            <Transaction
              transaction={transaction}
              removeTransaction={removeTransaction}
            />
          );
        })}
      </List>
    </Box>
  );
}

export default Transactions;

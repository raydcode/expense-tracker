import React from 'react';

import { ListItemText, ListItem, ListItemIcon } from '@mui/material';

import { makeStyles } from '@mui/styles';

import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    marginTop: 10,
    border: '1px solid #F6F6F6',
  },
});

function Transaction({ transaction, removeTransaction }) {
  const styles = useStyles();

  const sign = transaction.amount > 0 ? '+ ₹' : '- ₹';
  const amount = sign + Math.abs(transaction.amount);
  const color = transaction.amount > 0 ? 'Green ' : 'Red';
  return (
    <ListItem
      style={{ borderRight: `5px solid ${color}` }}
      className={styles.list}
    >
      <ListItemIcon>
        <DeleteIcon onClick={() => removeTransaction(transaction.id)} />
      </ListItemIcon>
      <ListItemText primary={transaction.text} />
      <ListItemText primary={amount} />
    </ListItem>
  );
}

export default Transaction;

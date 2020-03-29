import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
  list: {
    width: 200,
    top: 50,
  },
  fullList: {
    width: 'auto',
  },
  teste: {
    top: 50,
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [right, setRight] = useState(false);


  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => setRight(false)}
      onKeyDown={() => setRight(false)}
    >

    </div>
  );

  return (
    <div>

      <Button onClick={() => setRight(true)}>Right</Button>
      <Drawer anchor='right' BackdropProps={{ invisible: true }} classes={{ paper: classes.teste }} open={right} onClose={() => setRight(false)}>
        {list()}
      </Drawer>

    </div>
  );
}
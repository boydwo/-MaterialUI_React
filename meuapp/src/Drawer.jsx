import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
  list: {
    width: 200,
    marginTop: 30,
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
    opacity: 0,
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

      </List>
    </div>
  );

  return (
    <div>

      <Button onClick={toggleDrawer('right', true)}>Right</Button>
      <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>

    </div>
  );
}
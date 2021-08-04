import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  }
})


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { classes, name } = this.props;

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        edge="start"
                        aria-label="menu"
                    >
                      <MenuIcon/>  
                    </IconButton>
                    {
                      name === "" ?
                        <Typography variant="h5">
                          Pokemon Shop
                        </Typography>
                      :
                      <Typography variant="h5">
                        {name}'s Pokemon Shop
                      </Typography>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
  }

}

export default withStyles(styles)(Header);

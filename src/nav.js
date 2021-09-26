import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h5">
                            <Link href="/" color="inherit" underline="none">
                                Home
                            </Link>
                        </Typography>
                        <span className="navRight">
                            <Typography variant="h5" color="inherit">
                               React Github Application
                             </Typography>
                        </span>
                    </Toolbar>
                </AppBar>
            </div >
        );
    }
}
export default NavBar;
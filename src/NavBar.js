import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Counter from './Counter';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
function NavBar() {
  
    return (
        <>
            <AppBar position="static">
            <Toolbar variant="dense">
            <Typography variant="subtitle2" color="inherit">
                <Link to="/">Munneshwara - Daimaku</Link>
            </Typography>
            <div className="counter"><Counter></Counter></div>
            </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;
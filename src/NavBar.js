import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function NavBar() {
  
    return (
        <>
            <AppBar position="static">
            <Toolbar variant="dense">
            <Typography variant="subtitle2" color="inherit">
                Munneshwara District - Daimaku Count
            </Typography>
            </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;
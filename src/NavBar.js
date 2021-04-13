import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import {useTotalCountHook} from "./useTotalCountHook";

function NavBar() {

    const { totalCount } = useTotalCountHook();
  
    return (
        <>
            <AppBar position="static">
            <Toolbar variant="dense">
            <Typography variant="subtitle2" color="inherit">
                <Link to="/">Munneshwara - Daimaku Count</Link>
            </Typography>
            <div className='header-total-count'>{totalCount} mins</div>
            </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;
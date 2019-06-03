import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import './Home.css'
import four_dots from '../images/four_dots.jpg';
import {HashLink as Link} from 'react-router-hash-link';
import C from '../constants/constant';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Paper from '@material-ui/core/Paper';

let items

if (localStorage.getItem('cartList')) {
  items = JSON.parse(localStorage.getItem('cartList'))
} else {
  items = []
}

const useStyles = makeStyles(theme => ({
  root: {
   flexGrow: 1,
   maxWidth: 752,
 },
 paper1: {
  padding: theme.spacing(4),
  textAlign: 'center',
  marginTop: 10,
  marginLeft: 30,
  marginRight: 30
},
 demo: {
   height: '100%'
 },
 title: {
   margin: theme.spacing(4, 0, 2),
 },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  textField: {
    maxWidth: '40%',
    minWidth: '20%',
    marginRight: '10%'
  },
  typography1: {
    textAlign: 'center',
    paddingTop: 70,
    color: 'white',
  },
  typography2: {
    textAlign: 'center',
    paddingTop: 70,
    backgroundColor: 'white',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  button1: {
    margin: theme.spacing(1),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  listItem: {
  },
 bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
  margin: {
   marginRight: theme.spacing(3),
 },
  bigAvatar1: {
     width: 50,
     height: 50,
   },
   bigAvatar2: {
      width: 50,
      height: 50,
    },
}));

function Cart() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [values, setValues] = React.useState({
      quantity: 1
    });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [navOpen, setnavOpen] = React.useState(false);
  var viewList = []
  if ( items && items.length > 0){
    for(var i = 0; i < items.length; i++) {
       var obj = items[i];
       console.log("obj",obj.picture_url)
       viewList.push(
             <Paper className={classes.paper1}>
               <ListItem>
                 <ListItemAvatar>
                   <Avatar alt="cart Items" src={obj.picture_url} className={classes.bigAvatar} />
                 </ListItemAvatar>
                 <ListItemText
                   primary={<Typography variant="h5" style={{ color: '#000' }}>{obj.name}</Typography>}
                 />
                 <TextField
                    id="outlined-number"
                    label="Quantity"
                    value={values.quantity}
                    onChange={handleChange('quantity')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                 />
                 <ListItemSecondaryAction>
                   <IconButton edge="end" aria-label="Delete">
                     <DeleteIcon className={classes.bigAvatar2}/>
                   </IconButton>
                 </ListItemSecondaryAction>
               </ListItem>
             </Paper>
     )
   }
 }

   function triggerNav() {
       setnavOpen(!navOpen);
   }

  return(
    <div className="landing">
    <header>
        <div className="float-left">
            <Link to={C.ROUTE_PATH_HOME}>
                <p className="main-tag">
                  My Shop</p>
            </Link>
        </div>
        <div className="float-right">
            <a className="nav-trigger" href="#"
               onClick={triggerNav}>
                <img src={four_dots} alt="Menu"/>
            </a>
            <nav className={`${navOpen ? 'shown' : 'hidden'}`}>
                <ul>
                    <li>
                        <Link className="link-food-items"
                              to={C.ROUTE_PATH_ITEMS}>
                            FOOD ITEMS
                        </Link>
                    </li>
                    <li className="about_us">
                        <Link className="link-cart"
                              to={C.ROUTE_PATH_CART}>
                            CART
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
      <div className={classes.demo}>
          <Typography variant="h4" component="h2" className={classes.typography1}>
              <Badge className={classes.margin} badgeContent={items.length} color="primary">
                  <ShoppingCart className={classes.bigAvatar1}/>
               </Badge>    My Cart
          </Typography>
          { viewList && viewList.length > 0 ?
         <List dense={dense}>
          {viewList}
         </List>  : <Typography variant="h4" component="h2" className={classes.typography2}>No Item in cart</Typography>}
      </div>
  </div>
  )

}

export default Cart;

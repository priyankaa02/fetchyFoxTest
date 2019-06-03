import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import jsonData from '../items.json';
import './Home.css'
import four_dots from '../images/four_dots.jpg';
import {HashLink as Link} from 'react-router-hash-link';
import C from '../constants/constant';
import Button from '@material-ui/core/Button';
import ShoppingCart from '@material-ui/icons/ShoppingCart'

const loadData = () => JSON.parse(JSON.stringify(jsonData));
var cartList = []

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    width: 350,
    paddingTop: '56.25%', // 16:9
  },
  snackbar: {
    marginTop: 70,
    marginRight: 70
  },
  button: {
    margin: theme.spacing(1),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  typography: {
    width: 300
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  paper: {
   padding: theme.spacing(4),
   textAlign: 'center',
   background: "#4f064f",
   marginTop: 60,
   marginLeft: 40
 },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Items() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [navOpen, setnavOpen] = React.useState(false);
  var viewList = []
  var data = loadData()
  for(var i = 0; i < data.length; i++) {
     var obj = data[i];
     var price = (obj.price.base_unit ^ obj.price.exponent) * .01
     viewList.push(
        <Card className={classes.card}>
        <CardHeader
         action={
           <Typography variant="h4" component="h2">
             {(Math.ceil(price)+'$')}
           </Typography>
         }
         title={obj.name}
       />
       <CardMedia
         className={classes.media}
         image={obj.picture_url}
         title="Paella dish"
       />
       <CardContent>
         <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
           {obj.description}
         </Typography>
       </CardContent>
       <CardActions disableSpacing>
          <Button variant="contained" color="secondary" onClick={e => cartClick(obj, e)} className={classes.button}>
             Add To Cart
             <ShoppingCart className={classes.rightIcon} />
         </Button>
         <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            className={classes.snackbar}
            autoHideDuration={2000}
            onClose={handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Added to cart :)</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>,
            ]}
         />
         <IconButton
           className={clsx(classes.expand, {
             [classes.expandOpen]: expanded,
           })}
           onClick={handleExpandClick}
           aria-expanded={expanded}
           aria-label="Show more"
           >
           <ExpandMoreIcon />
         </IconButton>
       </CardActions>
       <Collapse in={expanded} timeout="auto" unmountOnExit>
       <CardContent>

       </CardContent>
     </Collapse>
     </Card>
     )
   }

   function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

     setOpen(false);
   }

   function cartClick(obj,e) {
       cartList.push(obj);
       localStorage.setItem("cartList",JSON.stringify(cartList))
       console.log("obj",obj)
       setOpen(true);
   }

   function triggerNav() {
       setnavOpen(!navOpen);
   }

  function handleExpandClick() {
    setExpanded(!expanded);
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
                              to={{
                                pathname: C.ROUTE_PATH_CART,
                                data: cartList
                              }}>
                            CART
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <Grid container spacing={2} className={classes.grid}>
    {viewList.map(value => (
           <Grid key={value} item>
             <Paper className={classes.paper}>{value} </Paper>
           </Grid>
    ))}
    </Grid>
    </div>
  )

}

export default Items;

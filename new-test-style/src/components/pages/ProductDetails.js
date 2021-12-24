import * as React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Box, Container } from '@mui/material';
import FadeIn from 'react-fade-in';
import '../common.css';
import { AppConst } from '../../AppsConst/AppsConst';
import StraightenIcon from '@mui/icons-material/Straighten';

//
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { deepOrange, green } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const { id } = 1124452;
const product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductDetails() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sizes = [
    {
      value: 'M',
      label: 'Medium',
    },
    {
      value: 'XL',
      label: 'XL',
    },
    {
      value: 'L',
      label: 'Large',
    },
    {
      value: 'S',
      label: 'Small',
    },
  ];

  const [size, setSize] = React.useState('M');

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (

    <Box
      component="main"
      sx={{
        flexGrow: 1,

      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12} sm={12} lg={12} xl={12} className='text-center' pb={4} marginTop={8}>
            <h2 className='business-name'>
              {AppConst.businessInfo.name}
            </h2>
          </Grid>
          <Grid item lg={6} sm={12} xl={6} xs={12} md={6} paddingTop={8} paddingBottom={12} paddingLeft={8} className='product-details text-center'>
            <FadeIn>
              <img src='https://bridaltrunk.co.uk/pub/media/catalog/product/cache/049394699a5b86abb7217f915a419e80/v/a/vaani_deep_green_kurta_sharara_set.jpg'></img>
              <Grid
                container
                spacing={2}
              >
                <Grid item lg={12} sm={12} xl={12} xs={12} md={12} paddingTop={8} className='text-center' >
                <Typography className='product-sub-img'>
                  <img src='https://bridaltrunk.co.uk/pub/media/catalog/product/cache/049394699a5b86abb7217f915a419e80/v/a/vaani_deep_green_kurta_sharara_set.jpg'></img>
                  <img src='https://bridaltrunk.co.uk/pub/media/catalog/product/cache/049394699a5b86abb7217f915a419e80/v/a/vaani_deep_green_kurta_sharara_set.jpg'></img>
                  <img src='https://bridaltrunk.co.uk/pub/media/catalog/product/cache/049394699a5b86abb7217f915a419e80/v/a/vaani_deep_green_kurta_sharara_set.jpg'></img>
                  <img src='https://bridaltrunk.co.uk/pub/media/catalog/product/cache/049394699a5b86abb7217f915a419e80/v/a/vaani_deep_green_kurta_sharara_set.jpg'></img>
                  <img src='https://bridaltrunk.co.uk/pub/media/catalog/product/cache/049394699a5b86abb7217f915a419e80/v/a/vaani_deep_green_kurta_sharara_set.jpg'></img>
 
              </Typography>
                </Grid>
              </Grid>
            </FadeIn>
          </Grid>

          <Grid item lg={6} sm={12} xl={6} xs={12} md={6} paddingTop={8} paddingBottom={12} paddingLeft={8} className='color-black-light card-data'>
            <FadeIn>
              <Typography>
                <h1 className='font-math'>
                  Prodcut Name
                </h1>
              </Typography>

              <Typography mt={4}>
                <h3 className='font-math'>
                  $ 12
                </h3>
              </Typography>

              <Typography>
                <h3 className='font-math'>
                  Availability: In stock
                </h3>
              </Typography>
              <Typography mt={4}>
                <Button variant="outlined" onClick={handleClickOpen}>
                  <StraightenIcon></StraightenIcon>
                </Button>
              </Typography>

              <Typography mt={2}>
                <h3 className='font-math'>
                  Color: Red
                </h3>
              </Typography>

              <Typography mt={4}>
                <h3 className='font-math'>
                  Product Size
                </h3>
                <TextField
                  className='width-220'
                  select
                  value={size}
                  onChange={handleChange}
                >
                  {sizes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

              </Typography>

              <Typography mt={4}>
                <h3 className='font-math'>
                  Quantity :
                </h3>
                <TextField
                  value='1'
                  onChange={handleChange}
                >
                </TextField>
              </Typography>

              <Typography mt={4}>
                <Button disableElevation mt={4} className='app-color color-white'>
                  Add to cart
                </Button>
              </Typography>
            </FadeIn>
          </Grid>

        </Grid>

      </Container>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        </DialogTitle>
        <DialogContent>
          <img src='https://bridaltrunk.co.uk//pub/media/icons/size_chart.jpeg' className='width-fit-content'>
          </img>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>

  );
}

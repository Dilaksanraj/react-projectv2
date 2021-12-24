import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../Budget';
import SwipeableTextMobileStepper from '../slider/Slider';
import '../common.css';
import { AppConst } from '../../AppsConst/AppsConst';
import Divider from '@mui/material/Divider';
const product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]


const Home = () => (
  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={0}
        >
          <Grid item xs={12} sm={12} lg={12} xl={12}>
            <SwipeableTextMobileStepper />
            <div className="banner_text">
                <h4>{AppConst.businessInfo.name}</h4>
                <p className="banner_txt">{AppConst.businessInfo.location}</p>
                <a className="img_link" title="Shop Now" href="https://bridaltrunk.co.uk/designer/vvani-vats/">Shop Now</a>
              </div>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={12} className='text-center' pb={4}>
            <h2 className='business-name'>
              {AppConst.businessInfo.name}
            </h2>
            <Divider variant="inset" />
          </Grid>

          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <div className='bs-banner_second'>
              <img src="https://bridaltrunk.co.uk/pub/media/wysiwyg/vv3.jpg" alt="" className='header-image' />

              {/* <div className="banner_text">
                <h4>VVANI VATS</h4>
                <p className="banner_txt">CHAND</p>
                <a className="img_link" title="Shop Now" href="https://bridaltrunk.co.uk/designer/vvani-vats/">Shop Now</a>
              </div> */}

            </div>



          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={12}>

            <div className='bs-banner_second'>
              <img src="https://bridaltrunk.co.uk/pub/media/wysiwyg/pdp2.jpg" alt="" className='header-image' />
              {/* <div className="banner_text">
                <h4>VVANI VATS</h4>
                <p className="banner_txt">CHAND</p>
                <a className="img_link" title="Shop Now" href="https://bridaltrunk.co.uk/designer/vvani-vats/">Shop Now</a>
              </div> */}
            </div>


          </Grid>

        </Grid>

      </Container>
    </Box>
  </>
);

export default Home;

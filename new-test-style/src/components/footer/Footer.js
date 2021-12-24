import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../Budget';
import SwipeableTextMobileStepper from '../slider/Slider';
import FadeIn from 'react-fade-in';
import Divider from '@mui/material/Divider';
import { AppConst } from '../../AppsConst/AppsConst';

import './footer.css'

const Footer = () => (
    <>
        <Box
            component="main" className='footer-main'
            sx={{
                flexGrow: 1,
                py: 8,
            }}
        >
            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item lg={3} sm={6} xl={3} xs={12} >
                        <p>
                            {AppConst.businessInfo.address}
                            {AppConst.businessInfo.postCode}
                        </p>
                    </Grid>
                    <Grid item lg={3} sm={6} xl={3} xs={12} >
                        <p>
                            {AppConst.businessInfo.shopMobile}
                        </p>
                    </Grid>
                    <Grid item lg={3} sm={6} xl={3} xs={12} >
                        <p>
                            {AppConst.businessInfo.about}

                        </p>
                    </Grid>

                    <Grid item lg={3} sm={6} xl={3} xs={12} >
                        <p>
                            site map
                            site map
                            site map
                            site map
                            site map
                            site map
                            site map
                            site map
                            site map
                            site map
                        </p>
                    </Grid>

                    <Grid item lg={12} sm={12} xl={12} xs={12} className='text-align-center' mt={4}>
                        <p>
                            Developed by <a href='#'>{AppConst.businessInfo.developedBy}</a>
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);

export default Footer;
import * as React from 'react';
import { Grid } from '@mui/material';
import { Box, Container } from '@mui/material';
import FadeIn from 'react-fade-in';
import '../common.css';
import { AppConst } from '../../AppsConst/AppsConst';
import ContactForm from '../contact/Forms';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

export default function ContactUs() {


  return (

    <Box
      component="main"
    >
      <Container maxWidth={false} className='p-0'>
        <Grid
          container
        >

          <Grid item xs={12} sm={12} lg={12} xl={12} className='text-center' pb={4} pt={8}>
            <h2 className='business-name'>
              {AppConst.businessInfo.name}
            </h2>
          </Grid>

          <Grid item lg={12} sm={12} xl={12} xs={12} className='contact-img'>
            <FadeIn>
              <img src='static/images/contact/banner_contact.jpg'></img>
            </FadeIn>
          </Grid>

          <Grid item xs={12} sm={12} lg={12} xl={12} className='text-center' pb={4} pt={8} ml={8}>
            <h1 className='font-custom'>
            {'Contact Us'.toUpperCase()}
            </h1>
          </Grid>

          <Grid item lg={6} sm={12} xl={6} xs={12} md={6} paddingTop={8} paddingBottom={12} paddingLeft={8}>
            <p className='font-math color-black'>
              SEND US A MESSAGE
            </p>
            <ContactForm />
          </Grid>

          <Grid item lg={6} sm={12} xl={6} xs={12} md={6} paddingTop={8} paddingBottom={12} paddingLeft={8} className='text-center'>
            <p className='font-math color-black'>
              GET OFFICE INFO
            </p>
            <Grid
              container
            >
              <Grid item lg={2} sm={2} xl={2} xs={2} md={2} paddingTop={2} paddingBottom={0} paddingLeft={2}>
                <LocationOnIcon />
              </Grid>
              <Grid item lg={10} sm={10} xl={10} xs={10} md={10} paddingTop={2} paddingBottom={0} paddingLeft={2} className='text-left'>
                {AppConst.businessInfo.address}
              </Grid>

              <Grid item lg={2} sm={2} xl={2} xs={2} md={2} paddingTop={2} paddingBottom={0} paddingLeft={2}>
                <PhoneIcon />
              </Grid>
              <Grid item lg={10} sm={10} xl={10} xs={10} md={10} paddingTop={2} paddingBottom={0} paddingLeft={2} className='text-left'>
                {AppConst.businessInfo.shopMobile}
              </Grid>

              <Grid item lg={2} sm={2} xl={2} xs={2} md={2} paddingTop={2} paddingBottom={0} paddingLeft={2}>
                <MailIcon/>
              </Grid>
              <Grid item lg={10} sm={10} xl={10} xs={10} md={10} paddingTop={2} paddingBottom={0} paddingLeft={2} className='text-left'>
                {AppConst.businessInfo.email}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </Box>

  );
}

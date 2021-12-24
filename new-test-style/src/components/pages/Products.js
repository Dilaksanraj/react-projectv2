import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Grid } from '@mui/material';
import { Box, Container } from '@mui/material';
import FadeIn from 'react-fade-in';
import '../common.css';

const product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
export default function Products() {

  return (

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        paddingTop: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={2}
        >
          {product.map((index) => (
            <Grid item lg={2} sm={3} xl={2} xs={12}>
              <FadeIn>
                <Card className='card-zoom' onClick={() => {window.location = '/1224'}}>
                  <CardContent>
                    <Grid
                      container
                      spacing={3}
                      sx={{ justifyContent: 'space-between' }}
                    >
                      <Grid item>
                        <CardHeader
                          title="Shrimp"
                        />
                        <CardMedia
                          className='card-img'
                          component="img"
                          height="auto"
                          image="https://www.kalaniketan.com/media/catalog/product/cache/1/small_image/300x450/17f82f742ffe127f42dca9de82fb58b1/S/u/Sunehri_104.jpg"
                          alt="Paella dish"
                        />
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                          </IconButton>
                          <IconButton aria-label="share">
                            <ShareIcon />
                          </IconButton>
                        </CardActions>

                      </Grid>
                    </Grid>
                  </CardContent>

                </Card>
              </FadeIn>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>

  );
}

// Components
import { ButtonGroup,Button, Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container, makeStyles, CardMedia } from '@mui/material';
// Icons
// https://mui.com/material-ui/material-icons/
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

function App() {
  return (
   <>

    {/* header */}
    <CssBaseline/>
    <AppBar position='relative' >
        <Toolbar> 
          <InsertPhotoIcon/>
          <Typography variant='h6'>Photo</Typography>
        </Toolbar >
    </AppBar >
    <br />
    <div>
      <Container maxWidth='sm'>
          <Typography align='center' color="text.primary" variant="h4" component="h2" gutterBottom>
           Login
        </Typography>
        <Typography align='center' color="text.secondary"  paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, blanditiis, omnis illo unde aliquid quibusdam quidem itaque sapiente assumenda provident eveniet cupiditate incidunt eaque natus labore et excepturi ea odio.
        </Typography>

          <Grid style={{display:'flex', justifyContent:'center'}} gutterBottom>
            <ButtonGroup  variant="contained" aria-label="outlined primary button group">
                <Button>Login</Button>
                <Button>Register</Button>
            </ButtonGroup>
          </Grid>
          <br />
          <Grid container spacing={3} justifyContent="center">
            <Grid item><Button variant='contained' color="primary">+</Button></Grid>
            <Grid item><Button variant='outlined' color="primary">-</Button></Grid>
          </Grid>
      </Container>
      <br />
      <CardContent maxWidth="md">
        <Grid container spacing={4}  justifyContent="center">
          <Grid item>
              <Card variant="outlined" sx={{ maxWidth: 345 }}>
                <CardMedia 
                title="my image"
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbrelfhiBl1iDWsd1FQHOqC5ASCx4_GPDNlTtEppogAV2ZnSLbNSA4vhUDvt_Jt50WSk&usqp=CAU"
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom>
                  Lorem ipsum Velit sit odit veritatis possimus? Harum ducimus alias ad impedit. Atque sint provident numquam iure, excepturi accusamus perferendis distinctio ab nisi cupiditate?
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
          <Grid item>
              <Card variant="outlined" sx={{ maxWidth: 345 }}>
                <CardMedia 
                title="my image"
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbrelfhiBl1iDWsd1FQHOqC5ASCx4_GPDNlTtEppogAV2ZnSLbNSA4vhUDvt_Jt50WSk&usqp=CAU"
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom>
                  Lorem ipsum Velit sit odit veritatis possimus? Harum ducimus alias ad impedit. Atque sint provident numquam iure, excepturi accusamus perferendis distinctio ab nisi cupiditate?
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
          <Grid item>
              <Card variant="outlined" sx={{ maxWidth: 345 }}>
                <CardMedia 
                title="my image"
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbrelfhiBl1iDWsd1FQHOqC5ASCx4_GPDNlTtEppogAV2ZnSLbNSA4vhUDvt_Jt50WSk&usqp=CAU"
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom>
                  Lorem ipsum Velit sit odit veritatis possimus? Harum ducimus alias ad impedit. Atque sint provident numquam iure, excepturi accusamus perferendis distinctio ab nisi cupiditate?
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
          <Grid item>
              <Card variant="outlined" sx={{ maxWidth: 345 }}>
                <CardMedia 
                title="my image"
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbrelfhiBl1iDWsd1FQHOqC5ASCx4_GPDNlTtEppogAV2ZnSLbNSA4vhUDvt_Jt50WSk&usqp=CAU"
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom>
                  Lorem ipsum Velit sit odit veritatis possimus? Harum ducimus alias ad impedit. Atque sint provident numquam iure, excepturi accusamus perferendis distinctio ab nisi cupiditate?
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
        </Grid>
      </CardContent>
    </div>
    
    


   </>
  );
}

export default App;

import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const UserCard = (props) => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12}>
                    <Card >
                        <CardMedia
                            style={{
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,0.2)',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 100,
                                height: 100,
                                backgroundColor: '#fff',
                                borderRadius: 50,
                                margin: "auto"
                            }}
                            image={props.image}
                            title="Random user"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                User Name: @{props.userName}
                            </Typography>
                            <Typography>
                                {props.bio}
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button size="medium" color="primary" href={props.linkUrl} target="_blank">
                                VIEW PROFILE
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Repostitory
                                </Typography>
                            <Typography>
                                {props.noOfRepo}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Followers
                                </Typography>
                            <Typography>
                                {props.followers}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Following
                                </Typography>
                            <Typography>
                                {props.following}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
export default UserCard;
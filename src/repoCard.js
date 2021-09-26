import React from 'react';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const RepoCard = (props) => {

    return (
        <Grid item xs={12} sm={12} md={3}>
            <Card variant="outlined" >
                <CardContent>
                    <Typography variant="h6" component="h6">
                        {props.repoName}
                    </Typography>
                    <br />

                    <Typography variant="body2" component="p">
                        {props.description}
                    </Typography>
                    <br />
                    <Typography color="textSecondary">
                        {props.launguage}
                    </Typography>
                    <br />
                    <Typography component="p">
                        Created At:{props.created}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default RepoCard;
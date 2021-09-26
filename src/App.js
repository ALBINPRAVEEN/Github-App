import React, { Component } from 'react';
import './App.css';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import NavBar from './nav';
import UserCard from './UserCard';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import RepoCard from './repoCard';
import PieDemo from './chart';


const axios = require('axios');
const GhPolyglot = require("gh-polyglot");


class App extends Component {
  state = {
    status: "",
    userName: '',
    name: '',
    imageUrl: '',
    linkUrl: '',
    noOfRepo: '',
    followers: '',
    following: '',
    bio: '',
    location: '',
    repoList: [],
    label: [],
    value: [],
    color: []
  }

  handleChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let x = this.state.userName;
    axios.get(`https://api.github.com/users/${x}`)
      .then((res) => {
        // console.log(res.data)
        this.setState({
          name: res.data.name,
          imageUrl: res.data.avatar_url,
          linkUrl: res.data.html_url,
          noOfRepo: res.data.public_repos,
          followers: res.data.followers,
          following: res.data.following,
          bio: res.data.bio,
          location: res.data.location,
          status: "200"

        })
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          status: "400"
        })
      });

    const me = new GhPolyglot(`${x}/git-stats`);
    me.userStats((err, stats) => {
      if (err) {
        console.log(err.message);
      }
      else {
        var i;
        let newLabel = [];
        let newValue = [];
        let newColor = [];
        for (i = 0; i < stats.length; i++) {
          newLabel.push(stats[i].label);
          newValue.push(stats[i].value);
          newColor.push(stats[i].color);
        }
        this.setState({
          label: newLabel,
          value: newValue,
          color: newColor
        })
      }
    });
    me.getAllRepos((err, stats) => {
      if (err) {
        console.log(err.message);
      }
      else {
        this.setState({
          repoList: stats
        })
      }
      // console.log(this.state.repoList);
    });
  }

  render() {
    if (this.state.status === "200") {
      const userCard =
        <UserCard name={this.state.name} userName={this.state.userName}
          noOfRepo={this.state.noOfRepo}
          followers={this.state.followers}
          following={this.state.following}
          bio={this.state.bio}
          image={this.state.imageUrl}
          linkUrl={this.state.linkUrl}
          location={this.state.location}
        />

      const repos = [];
      let i;
      for (i = 0; i < this.state.repoList.length; i++) {
        repos.push(<RepoCard key={i} repoName={this.state.repoList[i].name}
          description={this.state.repoList[i].description}
          launguage={this.state.repoList[i].language}
          created={this.state.repoList[i].created_at.split('T', 1)} />);
      }
      const data = {
        labels: this.state.label,
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: this.state.color,
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.state.value
          }
        ]
      };

      return (
        <div style={{ textAlign: "center" }}>
          <NavBar />
          <Grid container spacing={2} style={{ paddingTop: "90px" }}> {userCard}</Grid>
          <Grid container spacing={2} style={{ paddingTop: "20px" }}> {repos}</Grid>
          <PieDemo data={data} />
        </div>
      )

    }
    else if (this.state.status === "400") {
      const errorCard =
        <Card >
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Sry No User found.
            </Typography>
          </CardContent>
        </Card>
      return (
        <div>
          <NavBar />
          <Grid style={{ paddingTop: "90px", textAlign: "center" }}> {errorCard}</Grid>
        </div>
      );
    }

    return (

      <div className="App">
        <NavBar />
        <ValidatorForm
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <img src={require('./images/git.png')} alt="git" height={100} ></img>
          <br />
          < TextValidator
            label="Enter Your User Name"
            onChange={this.handleChange}
            type="text"
            value={this.state.userName}
            id="outlined-basic"
            variant="outlined"
            validators={['required']}
            errorMessages={['This field is required']}
            size='medium'
          />
          <br /><br />
          <Button variant="contained" color="primary" type="submit">
            Get Detail </Button>
        </ValidatorForm>
      </div>
    );
  }
}


export default App;

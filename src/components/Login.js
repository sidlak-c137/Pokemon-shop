import React from 'react';
import { Typography, Button, TextField, Container } from '@material-ui/core';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
    }
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.updateName(this.state.username);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({username: e.target.value});
    
  }

  render() {
    return (
        <Container 
            maxWidth="sm" 
            style={{display: "flex", justifyContent: "center"}}
            >
            <form
                style={{display: "flex", justifyContent: "center", marginTop: 20, flexDirection: "column"}}
                noValidate
                autoComplete="off"
                autoCapitalize="on"
                onSubmit={this.handleSubmit}
                >
                <Typography variant="h6" style={{textAlign: "center"}}>
                    What is your name?
                </Typography>

                <TextField
                    style={{marginTop: 10, width: '20vw', minWidth: 200}}
                    required
                    variant="outlined"
                    label="Name"
                    helperText="Please fill out this field."
                    onChange={this.handleChange}
                />
                <Button
                    style={{marginTop: 10, width: 100, alignSelf: "center"}}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    >
                    Submit
                </Button>
            </form>
        </Container>
    )
  }

}

export default Login;

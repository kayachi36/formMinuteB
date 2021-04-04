import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //HAVE TO EXPORT DATA TO AN API 
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar 
                    style = {{backgroundColor: '#d3643c'}} 
                    title = "Votre mission a été postée avec succès." />
                    <h1>Merci pour votre confiance en MinuteBrico!</h1>
                    <p>Veuillez vérfier votre e-mail pour plus d'informations</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;

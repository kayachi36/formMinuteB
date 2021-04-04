import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormCoord extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar 
                    style = {{backgroundColor: '#d3643c'}} 
                    title = "Dites nous ce dont vous avez besoin, contactez nos MinuteBricoleurs, visualisez leurs portofolios et discutez avec eux! "/>
                    <TextField 
                      hintText = "Location "
                      floatingLabelText = "Adresse de votre mission"
                      onChange = {handleChange('location')}
                      defaultValue = {values.location}
                      />
                    <br/>
                    <TextField 
                      hintText = "ZIP"
                      floatingLabelText = "Zip Code"
                      onChange = {handleChange('zipcode')}
                      defaultValue = {values.zipcode}
                      />
                      <br/>
                    <TextField 
                      hintText = "Pricing"
                      floatingLabelText = "Fourchette de prix"
                      onChange = {handleChange('pricerange')}
                      defaultValue = {values.pricerange}
                      />

                    <br/>
                    <RaisedButton 
                        label="Précédent"
                        primary={false}
                        styles={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton 
                        label="Suivant"
                        primary={true}
                        styles={styles.button}
                        onClick={this.continue}
                    />
                   

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormCoord

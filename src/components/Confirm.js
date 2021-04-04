import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
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
        const { values: {title, description, category, location, zipcode, pricerange} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                      <AppBar
                    style = {{backgroundColor: '#d3643c'}} 
                    title = "Confirmation de votre mission: "/>
                    <List>
                        <ListItem
                            primaryText= "Titre de mission: "
                            secondaryText={ title }
                        />
                        <ListItem
                            primaryText= "Description de mission: "
                            secondaryText={ description }
                        />
                        <ListItem
                            primaryText= "Catégories choisies: "
                            secondaryText={ category }
                        />
                        <ListItem
                            primaryText= "Adresse de mission: "
                            secondaryText={ location }
                        />
                        <ListItem
                            primaryText= "Zip Code: "
                            secondaryText={ zipcode}
                        />
                        <ListItem
                            primaryText= "Fourchette de prix: "
                            secondaryText={ pricerange }
                        />

                    </List>

                    <RaisedButton 
                        label="Précédent"
                        primary={false}
                        styles={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton 
                        label="Confirmer et poster ma mission"
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

export default Confirm

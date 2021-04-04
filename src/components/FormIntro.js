import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem'

export class FormIntro extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    state = {
        value: 1
      };
    
      handleChange = (event, index, value) => this.setState({ value });
    
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                      <AppBar
                      style = {{backgroundColor: '#d3643c'}} 
                      title = "Dites nous ce dont vous avez besoin, contactez nos MinuteBricoleurs, visualisez leurs portofolios et discutez avec eux! "/>
                    <TextField 
                      hintText = "Titre de mission"
                      floatingLabelText = "Titre de mission"
                      onChange = {handleChange('title')}
                      defaultValue = {values.title}
                      />
                    <br/>
                    <TextField 
                      hintText = "Description de mission"
                      floatingLabelText = "Description de mission"
                      onChange = {handleChange('description')}
                      defaultValue = {values.description}
                      />
                      <br/>

                    <SelectField
                    floatingLabelText="Categorie"
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                        <MenuItem value={1} primaryText="Peinture" />
                        <MenuItem value={2} primaryText="Plomberie" />
                        <MenuItem value={3} primaryText="Menuiserie" />
                        <MenuItem value={4} primaryText="Jardinage" />
                        <MenuItem value={5} primaryText="Bricolage Maison" />
                        <MenuItem value={6} primaryText="Electricité" />
                        <MenuItem value={7} primaryText="Montage de meubles" />
                        <MenuItem value={8} primaryText="Déménagement" />
                     </SelectField>

                    <br/>
                    <RaisedButton 
                        color = "inherit"
                        label="Suivant"
                        primary={true}
                        styles={styles.button}
                        onClick={this.continue}
                        className = "button"
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

const style = {
    background : '#e28743'
}

export default FormIntro

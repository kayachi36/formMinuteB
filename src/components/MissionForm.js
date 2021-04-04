import React, { Component } from 'react';
import FormIntro from './FormIntro';
import FormCoord from './FormCoord';
import Confirm from './Confirm';
import Success from './Success';

export class MissionForm extends Component {
    state = {
        step: 1,
        title: '', 
        description: '',
        category: '',
        location: '',
        zipcode: '',
        pricerange: ''
    }


    //Proceed to next
    nextStep = () => {
         const {step} = this.state; 
         this.setState({
             step : step + 1
         })
    }
    //Go back to previous
    prevStep = () => {
        const {step} = this.state; 
        this.setState({
            step : step - 1
        })
   }

   // Change fields handle
   handleChange = input => e => {
       this.setState({[input]: e.target.value});
   }

    render() {
        const { step } = this.state;
        const { title, description, category, location, zipcode, pricerange } = this.state;
        const values = { title, description, category, location, zipcode, pricerange }
        
        switch (step) {
            case 1: 
                return (
                    <FormIntro 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2: 
                return (
                    <FormCoord 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
              )
            case 3: 
                return (
                    <Confirm 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                    />
            )            
            case 4: 
                return <Success/>
        }
    }
}

export default MissionForm

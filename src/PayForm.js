import React, { Component } from 'react';
import './Property.css';
import * as MUI from 'material-ui';
// import images from './images/Home.png';


export default class PayForm extends Component {


    constructor(props) {
        super(props);
        this.state = {

            cardnumber: '',
            expiryDate: '',
            securityCode: ''




        };
    }

    handleCardnumber = (event) => {
        this.setState({ cardnumber: event.target.value })
    }

    handleExpiryDate = () => {
        this.setState({ expiryDate: event.target.value })
    }

    handleSecurityCode = () => {
        this.setState({ securityCode: event.target.value })
    }

    handlePay = () => {


        var date = document.querySelector("date");
        console.log(date.value);
    }


    render() {
        return (
            <div>

                
                
                <div className="centerPaymenttable">
                    <img src={require('./images/Major-Credit.png')} alt="pic" className="creditpic" />
                <p className="paytitle">PAY YOUR BILL NOW!</p>
                    <table>
                        <tr>
                            <td>Card Number</td>
                            <td><MUI.TextField value={this.state.cardnumber} onChange={this.handleCardnumber} floatingLabelText="Card Number" /></td>
                        </tr>
                        <tr>
                            <td>Expiry Date</td>
                            <td><MUI.DatePicker hintText="Expiry Date" id="date" /> </td>
                        </tr>
                        <tr>
                            <td>Security Code</td>
                            <td><MUI.TextField value={this.state.securityCode} onChange={this.handleSecurityCode} floatingLabelText="Security Number" /></td>
                        </tr>
                        <br />
                        <br />
                        <MUI.RaisedButton label="Proceed" onClick={this.handlePay} primary={true} className="proceedbtn" />
                        <br />
                        <br />
                    </table>
                    <br />
                </div>
            </div>
        );
    }
}


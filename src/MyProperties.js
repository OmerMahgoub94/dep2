import React, { Component } from 'react';
import './Property.css';
import * as MUI from 'material-ui';
import images from './images/Home.png';


export default class MyProperties extends Component {

    render() {
        return (
            <div>
                <div className="wrapper">
                    <h2 className="titleprop"> My Properties </h2>
                    <div className="property1">
                        <table>
                            <tr>
                                <th><img src={images} alt="property" className="notification" /></th>
                                <th>Details</th>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Monique</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>123, Al Sadd, Doha Qatar</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>Villa</td>
                            </tr>
                            <tr>
                                <td>Property Description</td>
                                <td>This property is getting rented</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>On going</td>
                            </tr>
                            <tr>
                                <td>Details</td>
                                <td><MUI.RaisedButton primary={true} label="View Details" /></td>
                            </tr>
                             <tr>
                                <td>Shift Service</td>
                                <td><MUI.RaisedButton primary={true} label="Shift Service" /></td>
                            </tr>

                             <tr>
                                <td>Remove Service</td>
                                <td><MUI.RaisedButton primary={true} label="Remove Service" /></td>
                            </tr>
                        </table>
                        <br />
                    </div>

                    <div className="propertiesDetail">
                        <div className="title"><h2> Property Details </h2></div>
                        <div className="cont">
                            <div className="centerThis">
                                <img src={images} alt="property" className="notification" />
                                <br />
                                <br />
                                Owner name: <strong> Monique Pascual </strong>
                                <br />
                                <br />
                                Address: 123, Al Sadd, Doha Qatar
                                 <br />
                                <br />
                                Type: Villa
                                <br />
                                <br />
                            </div>

                            <div className="containerrr">
                                <div className="box">
                                    <h3> Electricity number </h3>
                                    <br />
                                    <h1> 55689236536 </h1>
                                    <br />
                                </div>

                                <div className="box">
                                    <h3> Consumption </h3>
                                    <br />
                                    Current Reading: ** code here **
                                    <br />
                                    <br />
                                    Date: ** code here ** 
                                    <br />
                                    <br />
                                     Meter Usage: ** code here ** 
                                    <br />
                                    <br />
                                     Rate: ** code here **
                                    <br />
                                </div>

                                <div className="box">
                                    <h3> My Bill </h3>
                                    <br />
                                     <br />
                                     Current month: ** code here **
                                    <br />
                                     <br />
                                     Amount: ** code here **
                                    <br />
                                     <br />
                                     <MUI.RaisedButton label="View My Bill" />
                                    <br />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


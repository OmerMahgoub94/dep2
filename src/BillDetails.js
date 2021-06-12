import React, { Component } from 'react';
import './Trial.css';
import * as MUI from 'material-ui';
import { Link } from 'react-router'
import DB from './DB';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,

    },
    slide: {
        padding: 10,

    },
};

export default class BillDetails extends Component {

       componentDidMount() {
        var id = location.search.split('=')[1];
        console.log("you sent " + id)
        // var id = location.query.id;
        //  console.log("you sent id " + this.id)
        this.db.findOne(id, (data) => this.setState({ bill: data }))
    }
    
  state = {
        bill: null
    }

    db = new DB('http://localhost:55317/api/bills')


    render() {
        return (
            <div className="billing">
                <div className="billBox1">
                    <h2 className="h1font" className="titleprop"> Bill Detials </h2>
                    <div className="monthcard">
                        <MUI.Avatar src={require
                            ('./images/calendar.png')}
                            size={100} />
                        <h2> **  Date here (month) ** </h2>
                    </div>
                    <br />
                    <div className="boxBillDetail">
                        <table>
                            <tr>
                                <td>
                                    Owner Name:
                                </td>
                                <td>
                                    {this.state.bill.consumer_owner_unit.owner.account.LastName}, {this.state.bill.consumer_owner_unit.owner.account.FirstName}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Bill Number:
                                </td>
                                <td>
                                    {this.state.bill.Id}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Electricity Number:
                                </td>
                                <td>
                                    <span style={{backgroundColor: 'red'}}>NOT AVAILABLE</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Address:
                                </td>
                                <td>
                                    {this.state.bill.consumer_owner_unit.service.ZoneNo},{this.state.bill.consumer_owner_unit.service.StreetNo},{this.state.bill.consumer_owner_unit.service.BuildingNo}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Status:
                                </td>
                                <td>
                                    {this.state.bill.Status}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="billBox2">
                    <h2  className="h1font"  className="titleprop"> Electricity Overview </h2>
                    <p> graph here </p>
                </div>
                <div className="billBox3">

                    <h2  className="h1font"  className="titleprop"> Bill Summary </h2>
                    <div className="boxLeft">
                        <p> Amount usage: {this.state.bill.AmountUsed} </p>
                        <p> Issue Date: {this.state.bill.IssueDate} </p>
                        <p> Due Date: {this.state.bill.DueDate} </p>
                        <p> Meter Type: {this.state.bill.AmountUsed} </p>
                        <p> Meter Reading: {this.state.bill.AmountUsed} </p>
                    </div>
                    <div className="boxRight">
                        <h3> Total Amount: {this.state.bill.Charge} </h3>
                        <h4> Please Pay you Bill charged by {this.state.bill.DueDate} </h4>
                        <br/>
                        <br/>
                        <MUI.RaisedButton containerElement={<Link to="/PayForm" />} primary={true} label="Pay Now" />
                        <br/>
                        <br/>
                        <MUI.RaisedButton containerElement={<Link to="/Bill" />} primary={true} label="Back to My Bills" />
                    </div>
                </div>
            </div>
        );
    }
}


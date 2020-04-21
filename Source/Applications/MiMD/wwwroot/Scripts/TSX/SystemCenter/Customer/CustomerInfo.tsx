//******************************************************************************************************
//  ConnectionInfo.tsx - Gbtc
//
//  Copyright © 2019, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  09/11/2019 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
import * as React from 'react';
import * as _ from 'lodash';
import { SystemCenter } from '../global';
import AssetAttributes from '../AssetAttribute/Asset';
import FormTextArea from '../CommonComponents/FormTextArea';
import FormInput from '../CommonComponents/FormInput';
declare var homePath: string;

export default class CustomerInfoWindow extends React.Component<{ Customer: SystemCenter.Customer, stateSetter: (customer: SystemCenter.Customer) => void }, { Customer: SystemCenter.Customer}, {}> {
    jqueryHandle: JQuery.jqXHR;
    constructor(props, context) {
        super(props, context);
        this.state = {
            Customer: this.props.Customer
        }
        this.valid = this.valid.bind(this);
    }


    componentDidMount() {
    }

    componentWillReceiveProps(nextProps): void {
        this.setState({ Customer: nextProps.Customer})
    }

    updateCustomer(): JQuery.jqXHR {
        var customer = _.clone(this.state.Customer);

       return $.ajax({
            type: "PATCH",
           url: `${homePath}api/SystemCenter/Customer/Update`,
            contentType: "application/json; charset=utf-8",
           data: JSON.stringify(this.state.Customer),
            dataType: 'json',
            cache: true,
            async: true
       }).done((LocationID: number) => {
           this.props.stateSetter(customer);
       });
    }

    valid(field: keyof (SystemCenter.Customer)): boolean {
        if (field == 'AccountName')
            return this.state.Customer.AccountName != null && this.state.Customer.AccountName.length > 0 && this.state.Customer.AccountName.length <= 25;
        else if (field == 'Name')
            return this.state.Customer.Name == null || this.state.Customer.Name.length <= 100;
        else if (field == 'Phone')
            return this.state.Customer.Phone == null || this.state.Customer.Phone.length <= 20;
        else if (field == 'Description')
            return this.state.Customer.Description == null || this.state.Customer.Description.length <= 200;
        return false;
    }

    render() {
        return (
            <div className="card" style={{ marginBottom: 10 }}>
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h4>Customer Information:</h4>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <FormInput<SystemCenter.Customer> Record={this.state.Customer} Field={'AccountName'} Feedback={'AccountName of less than 25 characters is required.'} Valid={this.valid} Setter={(record) => this.setState({Customer: record})} />
                            <FormInput<SystemCenter.Customer> Record={this.state.Customer} Field={'Name'} Feedback={'Name must be less than 100 characters.'} Valid={this.valid} Setter={(record) => this.setState({ Customer: record })} />
                            <FormInput<SystemCenter.Customer> Record={this.state.Customer} Field={'Phone'} Feedback={'Phone must be less than 20 characters.'} Valid={this.valid} Setter={(record) => this.setState({ Customer: record })} />
                            <FormTextArea<SystemCenter.Customer> Rows={3} Record={this.state.Customer} Field={'Description'} Feedback={'Description must be less than 200 characters.'} Valid={this.valid} Setter={(record) => this.setState({ Customer: record })} />
                        </div>

                    </div>
                </div>
                <div className="card-footer">
                    <div className="btn-group mr-2">
                        <button className="btn btn-primary" onClick={() => this.updateCustomer()} hidden={this.state.Customer.ID == 0} disabled={this.state.Customer == this.props.Customer}>Update</button>
                    </div>
                    <div className="btn-group mr-2">
                        <button className="btn btn-default" onClick={() => this.setState({ Customer: this.props.Customer })} disabled={this.state.Customer == this.props.Customer}>Reset</button>
                    </div>
                </div>


            </div>
        );
    }
}
"use strict";

import React from 'react';

import { ProfileList } from '../../components/ProfileList/ProfileList';
import ProfileService from '../../services/ProfileService';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Page from "../../components/Page/Page";

export class ProfileListView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: []
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        ProfileService.getProfiles().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Page>
                <ProfileList data={this.state.data}/>
            </Page>
        );
    }
}

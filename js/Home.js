import React, {Component} from "react";
import {View} from "react-native";
import {Container, Header, Footer, FooterTab, Button, Icon, Text, Badge, Left, Right, Body, Title} from "native-base";

import JobsList from "./JobsList";
import PersonList from "./PersonList";
import CompanyList from "./CompanyList";
import renderIf from "./utils";
import config from "../config.json";

export class MainHeader extends Component {
    render() {
        return (
            <Header style={{backgroundColor: config.headerBgColor}}>
                <Left>
                    <Button transparent>
                        <Icon style={{"color": config.headerTextColor}} ios="ios-menu" android="md-menu"/>
                    </Button>
                </Left>
                <Body>
                <Title style={{"color": config.headerTextColor}}>
                    {config.title}
                </Title>
                </Body>
                <Right/>
            </Header>
        );
    }
}

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false
        };
    }

    toggleTab1() {
        this.setState({
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false
        });
    }

    toggleTab2() {
        this.setState({
            tab1: false,
            tab2: true,
            tab3: false,
            tab4: false
        });
    }

    toggleTab3() {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false
        });
    }

    toggleTab4() {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: true
        });
    }

    //Native base doesn't work with FlatList, so use View instead
    render() {
        return (
            <Container>
                <MainHeader/>
                <View style={{flex: 1}}>
                    {renderIf(this.state.tab1, <CompanyList/>)}
                    {renderIf(this.state.tab2, <JobsList/>)}
                    {renderIf(this.state.tab3, <PersonList/>)}
                </View>
                <Footer>
                    <FooterTab>
                        <Button active={this.state.tab1} onPress={() => this.toggleTab1()} vertical>
                            <Icon name="apps"/>
                            <Text>企业</Text>
                        </Button>
                        <Button active={this.state.tab2} onPress={() => this.toggleTab2()} vertical>
                            <Icon name="construct"/>
                            <Text>职位</Text>
                        </Button>
                        <Button active={this.state.tab3} onPress={() => this.toggleTab3()} vertical>
                            <Icon active name="navigate"/>
                            <Text>找人</Text>
                        </Button>
                        <Button active={this.state.tab4} onPress={() => this.toggleTab4()} vertical>
                            <Icon name="contact"/>
                            <Text>我的</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

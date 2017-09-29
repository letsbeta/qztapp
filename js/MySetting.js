import React, {Component} from "react";
import {FlatList, StyleSheet, View, Dimensions} from "react-native";
import {
    Button,
    Icon,
    Header,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Text,
    Item,
    Input,
    Grid,
    Col,
    Row,
    Card,
    CardItem
} from "native-base";
import config from "../config.json";

const {width, height} = Dimensions.get("window");

export default class MySetting extends Component {

    render() {
        return (
            <Grid style={styles.page}>
                {/*用户信息展示区域*/}
                <Row style={{height: 80}}>
                    <Grid style={styles.board}>
                        <Col size={1} style={{alignItems: "center"}}>
                            <Thumbnail source={{uri: config.endpoint + "static/avatar/female.jpg"}}
                                       style={styles.avatar}></Thumbnail>
                        </Col>
                        <Col size={3} style={{marginLeft: 15}}>
                            <Text style={styles.personinfo}>周舒桐</Text>
                            <Text style={styles.phone}>13182762105</Text>
                        </Col>
                        <Col size={1} style={{alignItems: "center"}}>
                            <Icon style={{color: "white"}} ios="ios-settings-outline"
                                  android="md-settings-outline"></Icon>
                        </Col>
                    </Grid>
                </Row>

                <Row style={{height: 80}}>
                    <Grid style={styles.company}>
                        <Col size={1}>
                            <Thumbnail square source={{uri: config.endpoint + "static/logo/ydlogo.jpg"}}/>
                        </Col>
                        <Col size={1}>
                            <Thumbnail source={{uri: config.endpoint + "static/vip/bjvip.png"}}/>
                        </Col>
                        <Col size={2}>
                            <Text style={{}}>雅迪电动车</Text>
                        </Col>
                        <Col size={1} style={{alignItems: "center"}}>
                            <Icon style={{color: "green"}} ios="ios-create-outline" android="md-create-outline"></Icon>
                        </Col>
                    </Grid>
                </Row>

                <Row style={{height: 80}}>

                    <Grid style={styles.announcement}>
                        <Row><Text style={styles.anntitle}>公告(2017-09-27)</Text></Row>
                        <Row><Text style={styles.annbody}>后台服务器将于今日进行维护，届时将会导致部分业务中断。请耐心等会。对给您带来的不便深表歉意。</Text></Row>

                    </Grid>
                </Row>

                {/*页面的下半部分*/}
                <Row>
                    <View style={{flex: 4, marginTop: 5, backgroundColor: "white"}}>
                        <Text>HH</Text>
                    </View>
                </Row>

            </Grid>

        );

    }

}

const styles = {
    page: {
        backgroundColor: "#f6f6f6"
    },
    board: {
        backgroundColor: config.headerBgColor,
        alignItems: "center"
    },
    avatar: {
        borderColor: "white",
        borderWidth: 1.5,
    },
    personinfo: {
        color: "white",
        fontSize: 21
    },
    phone: {
        color: "white",
        marginTop: 5
    },
    company: {
        backgroundColor: "white",
        alignItems: "center",
    },
    announcement: {
        backgroundColor: "white",
        marginTop: 5
    },
    anntitle: {
        marginLeft: 5,
        marginRight: 2,
        color: '#2ba9f5'
    },
    annbody: {
        marginLeft: 5,
        marginRight: 2
    }

};
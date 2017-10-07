import React, {Component} from "react";
import {FlatList, StyleSheet, View, Dimensions, Image} from "react-native";
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
                            <Thumbnail source={{uri: config.endpoint + "static/avatar/female.png"}}
                                       style={styles.avatar}></Thumbnail>
                        </Col>
                        <Col size={3} style={{marginLeft: 15}}>
                            <Text style={styles.personinfo}>周舒桐</Text>
                            <Text style={styles.phone}>13182762105</Text>
                        </Col>
                        <Col size={1} style={{alignItems: "center"}}>
                            <Button transparent>
                                <Image style={{width: 25, height: 25}} source={{uri: config.endpoint + "static/btn/setting.png"}} />
                            </Button>
                        </Col>
                    </Grid>
                </Row>

                <Row style={{height: 80}}>
                    <Grid style={styles.company}>
                        <Col size={1}>
                            <Thumbnail square source={{uri: config.endpoint + "static/logo/letsbeta.jpg"}}/>
                        </Col>
                        <Col size={1}>
                            <Image style={{width: 60, height: 36}}
                                   source={{uri: config.endpoint + "static/vip/bj.png"}}/>
                        </Col>
                        <Col size={2}>
                            <Text style={{}}>雅迪电动车</Text>
                        </Col>
                        <Col size={1} style={{alignItems: "center"}}>
                            <Button transparent>
                                <Image style={{width: 25, height: 25}} source={{uri: config.endpoint + "static/btn/modify.png"}} />
                            </Button>
                        </Col>
                    </Grid>
                </Row>

                <Row style={{height: 90}}>

                    <Grid style={styles.announcement}>
                        <Row size={1}><Text style={styles.anntitle}>公告(2017-09-27)</Text></Row>
                        <Row size={2}><Text style={styles.annbody}>后台服务器将于近日进行维护，届时将会导致部分业务中断。请耐心等候。对给您带来的不便深表歉意。</Text></Row>
                    </Grid>
                </Row>

                <Row style={{height: 80}}>
                    <Grid style={styles.tool}>
                        <Col style={{alignItems: "center", justifyContent: "center"}}>
                            <View>
                                <Button transparent vertical>
                                    <Image style={{width: 30, height: 30}} source={{uri: config.endpoint + "static/btn/yuangong.png"}}></Image>
                                    <Text style={{color: "black", fontSize: 14, marginTop: 3}}>我的员工</Text>
                                </Button></View></Col>
                        <Col style={{alignItems: "center", justifyContent: "center"}}><View><Button transparent
                                                                                                    vertical>
                            <Image style={{width: 30, height: 30}}
                                   source={{uri: config.endpoint + "static/btn/zhigong.png"}}></Image>
                            <Text style={{color: "black", fontSize: 14, marginTop: 3}}>我的职工</Text>
                        </Button></View></Col>
                        <Col style={{alignItems: "center", justifyContent: "center"}}><View><Button transparent
                                                                                                    vertical>
                            <Image style={{width: 30, height: 30}}
                                   source={{uri: config.endpoint + "static/btn/kehu.png"}}></Image>
                            <Text style={{color: "black", fontSize: 14, marginTop: 3}}>我的客户</Text>
                        </Button></View></Col>
                    </Grid>
                </Row>

                {/*页面的下半部分*/}
                <Row>
                    <View style={{flex: 4, marginTop: 5, backgroundColor: "white"}}>
                        <Text></Text>
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
        color: "#2ba9f5",
    },
    annbody: {
        marginLeft: 5,
        marginRight: 2
    },
    tool: {
        backgroundColor: "white",
        marginTop: 5
    },

};
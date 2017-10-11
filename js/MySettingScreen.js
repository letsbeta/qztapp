import React, { Component } from "react";
import { View, Text } from "react-native";
import { Grid, Col, Row, Icon, Button } from "native-base";
import config from "../config.json";
import { alertMe } from "./utils";
import { ProfileCard, EntProfileCard, TextButton, NoticeBoard } from "./widget/index";


export class MySettingScreen extends Component {

    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="contact" style={{color: tintColor}}/>
        ),
    };

    _onPress = () => {
        alertMe("It is pressed");
    };

    render() {
        return (
            <Grid style={styles.page}>
                {/*用户信息展示区域*/}
                <Row style={{height: 80}}>
                    <ProfileCard avatar={config.endpoint + "static/avatar/female.png"}
                                 name={"周舒桐"} tel={"13182762105"}
                                 setting={config.endpoint + "static/btn/setting.png"}
                                 onPress={this._onPress}/>
                </Row>

                <Row style={{height: 80}}>
                    <EntProfileCard logo={config.endpoint + "static/logo/letsbeta.jpg"}
                                    vip={config.endpoint + "static/vip/bj.png"}
                                    entname={"雅迪电动车"} edit={config.endpoint + "static/btn/edit.png"}
                                    onPress={this._onPress}/>
                </Row>

                <Row style={{height: 80}}>
                    <Grid style={styles.tool}>
                        <Col style={{alignItems: "center", justifyContent: "center"}}>
                            <TextButton icon={config.endpoint + "static/btn/todo.png"}
                                        text={"待办事项"} onPress={this._onPress}/>
                        </Col>
                        <Col style={{alignItems: "center", justifyContent: "center"}}>
                            <TextButton icon={config.endpoint + "static/btn/yuangong.png"}
                                        text={"我的员工"} onPress={this._onPress}/>
                        </Col>
                        <Col style={{alignItems: "center", justifyContent: "center"}}>
                            <TextButton icon={config.endpoint + "static/btn/zhigong.png"}
                                        text={"我的职工"} onPress={this._onPress}/>
                        </Col>
                        <Col style={{alignItems: "center", justifyContent: "center"}}>
                            <TextButton icon={config.endpoint + "static/btn/kehu.png"}
                                        text={"我的客户"} onPress={this._onPress}/>
                        </Col>
                    </Grid>
                </Row>

                <Row style={{height: 80}}>
                    <Grid style={styles.tool}>
                        <Col style={{alignItems: "center", justifyContent: "center"}}>
                            <TextButton icon={config.endpoint + "static/btn/changepw.png"}
                                        text={"修改密码"} onPress={this._onPress}/>
                        </Col>
                        <Col style={{alignItems: "center", justifyContent: "center"}}>
                            <TextButton icon={config.endpoint + "static/btn/refreshcv.png"}
                                        text={"刷新简历"} onPress={this._onPress}/>
                        </Col>
                        <Col style={{alignItems: "center", justifyContent: "center"}}>
                        </Col>
                        <Col style={{alignItems: "center", justifyContent: "center"}}>
                        </Col>
                    </Grid>
                </Row>

                <Row style={{height: 90}}>
                    <NoticeBoard title={"公告(2017-09-27)"}
                                 content={"后台服务器将于近日进行维护，届时将会导致部分业务中断。请耐心等候。对给您带来的不便深表歉意。"}/>
                </Row>

                <Row style={{height: 90}}>
                    <NoticeBoard title={"公告(2017-08-27)"}
                                 content={"后台服务器将于近日进行维护，届时将会导致部分业务中断。请耐心等候。对给您带来的不便深表歉意。"}/>
                </Row>

                {/*退出登录*/}
                <Button block danger style={{margin: 5}}>
                    <Text style={{color: 'white', fontSize: 16}}>退出登录</Text>
                </Button>

            </Grid>

        );

    }

}

const styles = {
    page: {
        backgroundColor: "#f6f6f6"
    },
    tool: {
        backgroundColor: "white",
        marginTop: 5
    }
};
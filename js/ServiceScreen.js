import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { Item, Icon, Input, List, ListItem, Left, Right, Body } from "native-base";
import config from "../config.json";
import { alertMe } from "./utils";
import { ServiceItem } from "./widget/index";

export class ServiceScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={{backgroundColor: 'white'}}>
                <Item style={{backgroundColor: "white"}}>
                    <Input placeholder='姓名/电话' onSubmitEditing={(event) => {
                        alertMe(event.nativeEvent.text);
                    }}/>
                    <Icon active name='search'/>
                </Item>

                <View style={{marginTop: 10}}>
                    <List>
                        <ServiceItem icon={config.endpoint + "static/btn/enterprise.png"}
                                     name={"企业入住"} onPress={() => alertMe("pressed")}/>
                        <ServiceItem icon={config.endpoint + "static/btn/opjobs.png"}
                                     name={"职位管理"} onPress={() => alertMe("pressed")}/>
                        <ServiceItem icon={config.endpoint + "static/btn/export.png"}
                                     name={"导出职工"} onPress={() => alertMe("pressed")}/>
                    </List>
                </View>
            </View>
        );
    }
}
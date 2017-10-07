import React, {Component} from "react";
import {FlatList, StyleSheet, Alert, Text} from "react-native";
import {JobItem} from "./widget/index.js";
import config from "../config.json";

export default class JobsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                }
            ]
        };
    }

    _onEndReached = ({onEndReached}) => {
        var size = this.state.data.length;
        this.setState({
            data: this.state.data.concat([
                {
                    id: size + 1
                }
            ])
        });
    };

    _footer() {
        return (
            <Text style={styles.loadmore}>
                加载更多...
            </Text>
        );
    }

    _onPress = (index) => {
        Alert.alert("Pressed"+index);
    };

    _renderItem = ({item, index}) => {
        return (
            <JobItem logo={config.endpoint + "static/logo/letsbeta.jpg"}
                     title={"安镇雅迪喷漆工" + (index + 1)} desc={"环境好，待遇优。提供住宿，公司食堂。工资月结，欲投从速。"}
                     updated_at={"2017-10-26 13:00:02"} viewed={"999"}
                     onPress={this._onPress.bind(this, index)} />
        );
    };

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => item.id}
                ListFooterComponent={this._footer.bind(this)}
                onEndReached={this._onEndReached.bind(this)}
                onEndReachedThreshold={0}>
            </FlatList>
        );
    }
}

const styles = StyleSheet.create({
    loadmore: {
        textAlign: "center",
        fontSize: 13,
        color: "#99bbff",
        marginTop: 8
    }
});

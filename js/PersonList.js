import React, {Component} from "react";
import {FlatList, StyleSheet, View, Alert, Text} from "react-native";
import {CandidateItem} from "./widget/index.js";
import config from "../config.json";

export default class PersonList extends Component {

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
            <CandidateItem avatar={config.endpoint + "static/avatar/male.png"}
              name={"张三"} desc={"三年以上电焊经验，熟练掌握鱼鳞焊等工艺，吃苦耐劳 . ."}
              updated_at={"3:43 pm"}
              onPress={this._onPress.bind(this, index)}/>
        )
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => item.id}
                    ListFooterComponent={this._footer.bind(this)}
                    onEndReached={this._onEndReached.bind(this)}
                    onEndReachedThreshold={0}>
                </FlatList>
            </View>
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
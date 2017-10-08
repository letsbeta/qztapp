import React, {Component} from "react";
import {FlatList, View, Text, RefreshControl} from "react-native";
import {alertMe} from "./utils";
import {CandidateItem, LoadMore} from "./widget/index";
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
            ],
            refreshing: false
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
            <LoadMore/>
        );
    }

    _onPress = (index) => {
        alertMe("Pressed"+index);
    };

    _onRefresh = () => {
        // 需要首先设置refreshing为true
        this.setState({refreshing: true});

        //异步操作完成之后设置refreshing为false
        setTimeout(
            () => {alertMe("timer"); this.setState({refreshing: false});},
            2000
            );
    };

    _renderItem = ({item, index}) => {
        return (
            <CandidateItem avatar={config.endpoint + "static/avatar/male.png"}
              name={"张三"} desc={"三年以上电焊经验，熟练掌握鱼鳞焊等工艺，吃苦耐劳 . ."}
              updated_at={"10-08"}
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
                    onEndReachedThreshold={0}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />}
                />
            </View>
        );

    }
}

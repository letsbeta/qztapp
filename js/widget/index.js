import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity
} from "react-native";
import {
    Thumbnail,
    ListItem,
    Body,
    Grid,
    Col,
    Left,
    Right,
} from "native-base";

const {width, height} = Dimensions.get("window");
const equalWidth = (width / 2 );

/*企业展示卡片*/
export class EnterpriseCard extends Component {
    constructor(props) {
        super(props);
    }

    /*
    * bg: uri
    * name: string
    * slogan: string
    * tel: string
    * vip: uri
    * logo: uri
    * onPress: func*/

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Image style={{width: equalWidth - 6, height: equalWidth * 0.6, margin: 3}}
                       source={{uri: this.props.bg}}>
                    <View style={{flex: 1, flexDirection: "column"}}>
                        <View style={{flex: 1, backgroundColor: "transparent", marginTop: 8, marginLeft: 5}}><Text
                            style={{color: "white", fontSize: 16, fontWeight: "bold"}}>{this.props.name}</Text>
                            <Text
                                style={{color: "white", fontSize: 12}}>{this.props.slogan}</Text>
                        </View>

                        <View style={{flex: 2}}>
                            <View style={{flex: 1, flexDirection: "row"}}>
                                <View style={{flex: 2}}>
                                    <View style={{
                                        flex: 1,
                                        backgroundColor: "transparent",
                                        justifyContent: "space-around"
                                    }}>
                                        <Text style={{color: "white", marginLeft: 5}}>{this.props.tel}</Text>
                                        <Image style={{width: 40, height: 26}}
                                               source={{uri: this.props.vip}}/>
                                    </View>
                                </View>

                                <View style={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <Image style={{width: 60, height: 60}}
                                           source={{uri: this.props.logo}}/>
                                </View>

                            </View>
                        </View>

                    </View>
                </Image>
            </TouchableOpacity>
        );
    }

}

/*职位列表项*/
export class JobItem extends Component {
    constructor(props) {
        super(props);
    }

    /*
    * logo: uri
    * title: string
    * desc: string
    * updated_at: string
    * viewed: string
    * onPress: func*/

    render() {
        return (

            <ListItem>
                <Thumbnail square large source={{uri: this.props.logo}}/>

                <Body>
                <TouchableOpacity onPress={this.props.onPress}>
                    {/*职位名称*/}
                    <Text style={{fontWeight: "bold"}}>
                        {this.props.title}
                    </Text>

                    {/*职位描述*/}
                    <Text style={{fontSize: 12, color: "gray", paddingTop: 5}}>
                        {this.props.desc}
                    </Text>

                    <Grid style={{marginTop: 10, marginLeft: 0}}>
                        {/*更新时间*/}
                        <Col style={{height: 20, justifyContent: "center"}}>
                            <Text style={{marginLeft: 0, fontSize: 10, color: "gray"}}>
                                {this.props.updated_at}
                            </Text>
                        </Col>
                        {/*浏览次数*/}
                        <Col style={{height: 20, justifyContent: "center", alignItems: "flex-end"}}>
                            <Text style={{marginLeft: 0, fontSize: 10, color: "gray"}}>浏览: {this.props.viewed}</Text>
                        </Col>
                    </Grid>
                </TouchableOpacity>
                </Body>
            </ListItem>
        );
    }
}

/*候选人列表项*/
export class CandidateItem extends Component {
    constructor(props) {
        super(props);
    }

    /*
    * avatar: uri
    * name: string
    * desc: string
    * updated_at: string
    * onPress: func*/

    render() {
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{uri: this.props.avatar}}/>
                </Left>
                <Body>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Text>{this.props.name}</Text>
                    <Text style={{fontSize: 13, paddingTop: 5, color: "gray"}}>{this.props.desc}</Text>
                </TouchableOpacity>
                </Body>
                <Right>
                    <Text style={{fontSize: 10, color: "gray"}}>{this.props.updated_at}</Text>
                </Right>
            </ListItem>
        );
    }
}

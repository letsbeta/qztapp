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
    Row,
    Left,
    Right,
    Button
} from "native-base";

const {width, height} = Dimensions.get("window");
const equalWidth = (width / 2 );

/*列表尾部加载更多标签*/
export class LoadMore extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text style={{textAlign: "center", fontSize: 13, color: "#99bbff", marginTop: 8}}>
                加载更多...
            </Text>
        );
    }
}

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


/*个人信息卡片*/
export class ProfileCard extends Component {
    constructor(props) {
        super(props);
    }

    /*
    * avatar: uri
    * name: string
    * tel: string
    * setting: uri
    * onPress: func*/

    render() {
        return (
            <Grid style={{backgroundColor: "#53BDF8", alignItems: "center"}}>
                <Col size={1} style={{alignItems: "center"}}>
                    <Thumbnail source={{uri: this.props.avatar}}
                               style={{borderColor: "white", borderWidth: 1.5}}/>
                </Col>
                <Col size={3} style={{marginLeft: 15}}>
                    <Text style={{color: "white", fontSize: 18}}>{this.props.name}</Text>
                    <Text style={{color: "white", marginTop: 5}}>{this.props.tel}</Text>
                </Col>
                <Col size={1} style={{alignItems: "center"}}>
                    <Button transparent onPress={this.props.onPress}>
                        <Image style={{width: 25, height: 25}} source={{uri: this.props.setting}}/>
                    </Button>
                </Col>
            </Grid>
        );
    }
}

/*企业信息卡片*/
export class EntProfileCard extends Component {
    constructor(props) {
        super(props);
    }

    /*
    * logo: uri
    * vip: uri
    * entname: string
    * edit: uri
    * onPress: func*/

    render() {
        return (
            <Grid style={{backgroundColor: "white", alignItems: "center"}}>
                <Col size={1}>
                    <Thumbnail square source={{uri: this.props.logo}}/>
                </Col>
                <Col size={1}>
                    <Image style={{width: 60, height: 36}}
                           source={{uri: this.props.vip}}/>
                </Col>
                <Col size={2}>
                    <Text>{this.props.entname}</Text>
                </Col>
                <Col size={1} style={{alignItems: "center"}}>
                    <Button transparent onPress={this.props.onPress}>
                        <Image style={{width: 25, height: 25}} source={{uri: this.props.edit}}/>
                    </Button>
                </Col>
            </Grid>
        );
    }
}

/*带文字的按钮*/
export class TextButton extends Component {
    constructor(props) {
        super(props);
    }

    /*
    * icon: uri
    * text: string
    * onPress: func*/

    render() {
        return (
            <View>
                <Button transparent vertical onPress={this.props.onPress}>
                    <Image style={{width: 30, height: 30}} source={{uri: this.props.icon}}></Image>
                    <Text style={{color: "black", fontSize: 14, marginTop: 3}}>{this.props.text}</Text>
                </Button>
            </View>
        );
    }
}

/*公告栏*/
export class NoticeBoard extends Component {
    constructor(props) {
        super(props);
    }

    /*
    * title: string
    * content: string
    * */

    render() {
        return (
            <Grid style={{backgroundColor: "white", marginTop: 5}}>
                <Row size={1}><Text style={{marginLeft: 5, marginRight: 2, color: "#2ba9f5"}}>{this.props.title}</Text></Row>
                <Row size={2}><Text style={{marginLeft: 5, marginRight: 2}}>{this.props.content}</Text></Row>
            </Grid>
        );
    }
}

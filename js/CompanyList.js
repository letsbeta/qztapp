import React, {Component} from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import config from "../config.json";

const {width, height} = Dimensions.get("window");
const equalWidth = (width / 2 );

const styles = {
    swipercontainer: {
        height: 160
    },
    banner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB"
    },
    logocontainer: {
        borderColor: "#DDDDDD",
        borderBottomWidth: 1,
        borderRightWidth: 1
    },
    logoimg: {
        height: equalWidth,
        width: equalWidth
    },
    vipimg: {
        position: "absolute",
        left: 0,
        top: 0,
        height: 40,
        width: 40
    },
    companyname: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "#99CCFF",
        color: "white"
    }
};

export default class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            data: [{"id": 1, "vip": 3}, {"id": 2, "vip": 2}, {"id": 3, "vip": 1}, {"id": 4, "vip": 0}]
        };
    }

    componentDidMount() {
        this.setState({
            items: [
                {title: "Hello Swiper", img: config.endpoint + "static/banner/yadibanner.jpg"},
                {title: "Beautiful", img: config.endpoint + "static/banner/xinribanner.jpg"},
                {title: "And simple", img: config.endpoint + "static/banner/aimabanner.jpg"}
            ]
        });
    }

    _keyExtractor = (item, index) => item.id;

    _getVipImage(level) {
        if (level == 0) {
            vip = "static/vip/novip.png";
        }
        else if (level == 1) {
            vip = "static/vip/hjvip.png";
        }
        else if (level == 2) {
            vip = "static/vip/bjvip.png";
        }
        else if (level == 3) {
            vip = "static/vip/zsvip.png";
        }
        return config.endpoint + vip;
    }

    renderRowItem = ({item, index}) => {
        return (
            <View style={styles.logocontainer}>
                <Image style={styles.logoimg} source={{uri: config.endpoint + "static/logo/ydlogo.jpg"}}
                       resizeMode='cover'/>
                <Image style={styles.vipimg} source={{uri: this._getVipImage(item.vip)}} resizeMode='cover'/>
                <Text style={styles.companyname}>雅迪科技</Text>
            </View>
        );
    };

    /* The swiper size is (width)375 & (height)160 */
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.swipercontainer}>
                    <Swiper autoplay>
                        {this.state.items.map((item, key) => {
                            return (
                                <Image
                                    key={key}
                                    style={styles.banner}
                                    source={{uri: item.img}}
                                />
                            );
                        })}
                    </Swiper>
                </View>
                <View style={{flex: 1}}>
                    <FlatList
                        data={this.state.data}
                        numColumns={2}
                        keyExtractor={this._keyExtractor}
                        renderItem={this.renderRowItem}
                    />
                </View>
            </View>
        );
    }
}
import React, {Component} from "react";
import {
    View,
    Image,
    FlatList,
    Dimensions
} from "react-native";
import Swiper from "react-native-swiper";
import {alertMe} from "./utils";
import {EnterpriseCard} from "./widget/index";
import config from "../config.json";

const {width, height} = Dimensions.get("window");
const equalWidth = (width / 2 );

const styles = {
    swipercontainer: {
        height: width*0.42
    },
    banner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB"
    }
};

export default class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            data: [{"id": 1, "vip": 4}, {"id": 2, "vip": 3}, {"id": 3, "vip": 2}, {"id": 4, "vip": 1},
                {"id": 5, "vip": 0}, {"id": 6, "vip": 0}, {"id": 7, "vip": 0}, {"id": 8, "vip": 0}]
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
            vip = "static/vip/qt.png";
        }
        else if (level == 1) {
            vip = "static/vip/by.png";
        }
        else if (level == 2) {
            vip = "static/vip/hj.png";
        }
        else if (level == 3) {
            vip = "static/vip/bj.png";
        }
        else if (level == 4) {
            vip = "static/vip/zs.png";
        }
        return config.endpoint + vip;
    }

    _getBgImage(index) {
        bgs = ["static/bg/bgblue.png", "static/bg/bgyellow.png", "static/bg/bgpink.png", "static/bg/bggreen.png"]
        var idx = index % 4;
        return config.endpoint + bgs[idx];
    }

    _onPress (index) {
        alertMe("Pressed"+index);
    };

    renderRowItem = ({item, index}) => {
        return (
            <EnterpriseCard bg={this._getBgImage(index)}
              name={"雅迪电动车"} slogan={"行业领导者，高端销量遥遥领先"}
              tel={"13182762105"} vip={this._getVipImage(item.vip)}
              logo={config.endpoint + "static/logo/letsbeta.jpg"}
              onPress={this._onPress.bind(this, index)}/>
        );
    };

    /* The swiper size is (width)375 & (height)160 */
    render() {
        return (
            <View style={{flex: 1}}>
                {/*轮播图片展示区*/}
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

                {/*企业列表*/}
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
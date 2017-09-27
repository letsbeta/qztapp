import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native'
import Swiper from 'react-native-swiper'

const styles = {
  swipercontainer: {
      height: 160
  },
  banner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

const { width, height } = Dimensions.get('window');

const equalWidth =  (width / 2 )

export default class CompanyList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      data: [{'id': 1}, {'id': 2}, {'id': 3}]
    }
  }
  
  componentDidMount () {
    this.setState({
      items: [
        { title: 'Hello Swiper', img: 'https://qzt.letsbeta.com/static/yadibanner.jpg' },
        { title: 'Beautiful', img: 'https://qzt.letsbeta.com/static/xinribanner.jpg' },
        { title: 'And simple', img: 'https://qzt.letsbeta.com/static/aimabanner.jpg' }
      ]
    });
  }

  _keyExtractor = (item, index) => item.id;
  
    renderRowItem = (itemData) => {
      return (
        <View style={{borderColor: 'gray', borderWidth: 0.5}}>
          <Image style={{ height: equalWidth,  width : equalWidth}} source={{ uri: 'https://qzt.letsbeta.com/static/ydlogo.jpg' }} resizeMode='cover' />
        </View>
      )
    }

  /* The swiper size is (width)375 & (height)160 */
  render () {
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
                    )
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
import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Grid, Col, ListItem, Thumbnail, Text, Body } from 'native-base';

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
    }

    _footer() {
        return (
            <Text style={ styles.loadmore }>
              加载更多...
            </Text>
            );
    }

    _renderItem({item, index}) {
        return (
            <ListItem>
              <Thumbnail square large source={ { uri: 'https://facebook.github.io/react/img/logo_og.png' } } />
              <Body>
                <Text style={ styles.jobtitle }>
                  安镇雅迪喷漆工
                  { index + 1 }
                </Text>
                <Text style={ styles.jobdesc }>
                  环境好，待遇优。提供住宿，公司食堂。工资月结，欲投从速。
                </Text>
                <Grid style={ styles.banner }>
                  <Col style={ styles.bannercol }>
                  <Text style={ styles.bannertext }>
                    2017-10-26 13:00:02
                  </Text>
                  </Col>
                  <Col style={ [styles.bannercol, styles.textright] }>
                  <Text style={ styles.bannertext }>浏览: 99999</Text>
                  </Col>
                </Grid>
              </Body>
            </ListItem>
            );
    }

    render() {
        return (
            <FlatList
              data={ this.state.data } 
              renderItem={ this._renderItem } 
              keyExtractor={ (item, index) => item.id } 
              ListFooterComponent={ this._footer.bind(this) } 
              onEndReached={ this._onEndReached.bind(this) }
              onEndReachedThreshold={ 0 }>
              </FlatList>
            );
    }
}

const styles = StyleSheet.create({
    jobtitle: {
        fontWeight: 'bold'
    },
    jobdesc: {
        fontSize: 12,
        paddingTop: 5,
        color: 'gray'
    },
    banner: {
        marginTop: 10,
        marginLeft: 9
    },
    bannercol: {
        height: 20,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textright: {
        alignItems: 'flex-end'
    },
    bannertext: {
        marginLeft: 0,
        fontSize: 10,
        color: 'gray'
    },
    loadmore: {
        textAlign: 'center',
        fontSize: 13,
        color: '#99bbff',
        marginTop: 8
    }
});

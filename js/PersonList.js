import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Button, Icon, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
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
        <ListItem avatar>
                <Left>
                  <Thumbnail source={ { uri: 'https://qzt.letsbeta.com/static/nobody.jpg' } } />
                </Left>
                <Body>
                  <Text>张三</Text>
                  <Text style={styles.persondesc}>三年以上电焊经验，熟练掌握鱼鳞焊等工艺，吃苦耐劳 . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
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
  persondesc: {
    fontSize: 13,
    paddingTop: 5,
    color: 'gray'
  },
  loadmore: {
      textAlign: 'center',
      fontSize: 13,
      color: '#99bbff',
      marginTop: 8
  }
});
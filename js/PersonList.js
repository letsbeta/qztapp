import React, { Component } from 'react';
import { Button, Icon, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class PersonList extends Component {
    render() {
        return (

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={ { uri: 'https://facebook.github.io/react/img/logo_og.png' } } />
                </Left>
                <Body>
                  <Text>张三</Text>
                  <Text note>三年以上电焊经验，熟练掌握鱼鳞焊等工艺，吃苦耐劳 . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>
            );
    }
}

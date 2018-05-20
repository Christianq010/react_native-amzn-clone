import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import {createDrawerNavigator} from 'react-navigation';

// Screens
import HomeScreen from './screens/HomeScreen';

// NativeBase Components
import {Container, Content, Header, Left, Right, Icon, Item, Input, ListItem} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawNavigator />
    );
  }
}

// Our Sidemenu bar screen
const CustomDrawerContentComponent = (props) => {
  return (
    <Container>
      <Header style={{
        backgroundColor: '#3a455c',
        height: 90
      }}>
        <Left 
          style={{
            flex:1,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
          <Icon name="person" style={{color: 'white'}} />
          <Text 
            style={{
              marginLeft: 5, 
              fontSize: 22, 
              color: 'white', 
              fontStyle: 'italic'}}> Hello, Chris
          </Text>
        </Left>
      </Header>
        <Content>

          <FlatList
            style={{borderTopWidth: 0.5, borderTopColor: '#f0f0f0'}}
            data={['Home', 'Shop by Category', "Today's Deals"]}
            renderItem={({item}) => (
              <ListItem noBorder>
                <Text> {item} </Text>
              </ListItem>
            )}
          />
          <FlatList
            style={{borderTopWidth: 0.5, borderTopColor: '#f0f0f0'}}
            data={['Your Wish List', 'Your Account', "Amazon Pay", 'Prime', 'Sell on Amazon']}
            renderItem={({item}) => (
              <ListItem noBorder>
                <Text> {item} </Text>
              </ListItem>
            )}
          />
          <FlatList
            style={{borderTopWidth: 0.5, borderTopColor: '#f0f0f0'}}
            data={['Settings', 'Customer Service']}
            renderItem={({item}) => (
              <ListItem noBorder>
                <Text> {item} </Text>
              </ListItem>
            )}
          />
          
        </Content>
    </Container>
  )
}

const AppDrawNavigator = new createDrawerNavigator ({

  HomeScreen: {screen: HomeScreen}
}, {
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'openDrawer',
  drawerCloseRoute: 'closeDrawer',
  drawerToggleRoute: 'toggleDrawer'
}

)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

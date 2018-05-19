import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Design Components
import {Container, Content, Header, Left, Right, Icon, Item, Input} from 'native-base';

// Icons
import FAIcon from 'react-native-vector-icons/FontAwesome';

class Homescreen extends Component {
  render() {
    return (
        <Container>
            <Header style={styles.header}>
                <Left style={styles.leftContainer} >
                    <Icon name="md-menu" style={styles.menuIcon} />
                    <FAIcon name="amazon" style={styles.logoIcon} />
                </Left>
                <Right>
                    <Icon name="md-cart" style={styles.cartIcon} />
                </Right>
            </Header>
            <View style={styles.SectionTwo} >
                <TouchableOpacity>
                    <View 
                        style={{
                            width: 100, 
                            backgroundColor: '#e7e7eb',
                            height: 50,
                            borderRadius: 4,
                            padding: 10
                        }}>
                        <Text style={{fontSize: 12}}>
                            Shop by 
                            <Text style={{fontWeight: 'bold'}}> Category</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <View 
                    style={{
                        flex: 1,
                        height: '100%',
                        marginLeft: 5,
                        justifyContent: 'center'
                    }}>
                    <Item 
                        style={{backgroundColor: 'white',
                        paddingHorizontal: 10,
                        borderRadius: 4
                    }}>
                        <Icon name="search" style={{fontSize: 20, paddingTop: 5}} />
                        <Input placeholder="Search" />
                    </Item>
                </View>
            </View>
            <Content 
                style={{
                    backgroundColor: '#d5d5d6',
                    marginTop: 0
                }}>
                <View 
                    style={{
                        height: 50,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        paddingHorizontal: 5,
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <Text>Hello, Chris Quyn</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Your Account</Text>
                        <Icon name="arrow-forward" style={{fontSize: 18, marginLeft: 2}}/>
                    </View>
                </View>
            </Content>
        </Container>
    );
  }
}

export default Homescreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3a455c',
        height: 90,
        borderBottomColor: '#757575'
    },
    leftContainer: {
        flexDirection: 'row'
    },
    menuIcon: {
        color: 'white',
        marginLeft: 5,
        marginRight: 15
    },
    logoIcon: {
        fontSize: 30,
        color: 'white'
    },
    cartIcon: {
        color: 'white'
    },
    SectionTwo: {
        // position: 'absolute',
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: '#3a455c',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
    }

});

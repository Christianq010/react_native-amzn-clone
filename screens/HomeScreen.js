import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// Native Base Components
import {Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem} from 'native-base';

// Icons
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

// Other Components
import RecommendedCardItem from '../components/RecommendedCardItem';

class Homescreen extends Component {
  render() {
    return (
        <Container>
            <Header style={styles.header}>
                <Left style={styles.leftContainer} >
                    <Icon 
                        name="md-menu" 
                        onPress={() => this.props.navigation.openDrawer()} 
                        style={styles.menuIcon}
                    />
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
                <Swiper style={{height: 100}} autoplay={true}>
                    <View style={{flex: 1}}>
                        <Image
                            style={{
                                flex: 1,
                                height: null,
                                width:null,
                                resizeMode: 'contain'
                            }}
                            source={require('../assets/swiper_2.jpg')}/>
                    </View>
                    <View style={{flex: 1}}>
                        <Image
                            style={{
                                flex: 1,
                                height: null,
                                width:null,
                                resizeMode: 'contain'
                            }}
                            source={require('../assets/swiper_3.jpg')}/>
                    </View>
                    <View style={{flex: 1}}>
                        <Image
                            style={{
                                flex: 1,
                                height: null,
                                width:null,
                                resizeMode: 'contain'
                            }}
                            source={require('../assets/swiper_2.jpg')}/>
                    </View>
                </Swiper>
                <Card>
                    <CardItem header>
                        <Text>Your Recommendations</Text>
                    </CardItem>
                    <RecommendedCardItem
                        itemName="You can heal you life"
                        itemCreator="Louise Hay"
                        itemPrice="$10"
                        savings="2.5"
                        imageUri={require('./../assets/recommended_1.jpg')}
                        rating={5}
                    />
                    <RecommendedCardItem
                            itemName="Uncharted 4"
                            itemCreator="Sony"
                            itemPrice="$19.99"
                            savings="17"
                            imageUri={require("../assets/recommended_2.jpg")}
                            rating={5}
                        />
                        <RecommendedCardItem
                            itemName="Ea UFC 3"
                            itemCreator="Ea Sports"
                            itemPrice="$44"
                            savings="6"
                            imageUri={require("../assets/recommended_3.jpg")}
                            rating={3}
                        />
                </Card>
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

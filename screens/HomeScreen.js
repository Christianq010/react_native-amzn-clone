import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Design Components
import {Container, Content, Header, Left, Right, Icon} from 'native-base';

class Homescreen extends Component {
  render() {
    return (
        <Container>
            <Header style={styles.header}>
                <Left>
                    <Icon name="md-menu" style={styles.leftIcon} />
                </Left>
            </Header>
        </Container>
    );
  }
}

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
      backgroundColor: '#3a455c',
      height: 90,
      borderBottomColor: '#757575'
  },
  leftIcon: {
      color: 'white'
  }
});

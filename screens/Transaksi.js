import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Left,
  Body,
  Right,
  Text,
  Button,
  Icon,
  List,
  ListItem,
  Footer,
  FooterTab,
} from 'native-base';
import {
  StyleSheet,
  TouchableOpacity,
  ListView,
  StatusBar
} from 'react-native';
import ProductItem from '../components/ProductItem'

export default class Transaksi extends Component {
  products = [
    {
      id: 1,
      productName: 'PULSA',
      productIcon: 'phone-portrait'
    },
    {
      id: 2,
      productName: 'KUOTA',
      productIcon: 'wifi'
    },
    {
      id: 3,
      productName: 'TOKEN',
      productIcon: 'thunderstorm'
    },
    {
      id: 4,
      productName: 'GAMES',
      productIcon: 'game-controller-b'
    },
    {
      id: 5,
      productName: 'MUSIC',
      productIcon: 'headset'
    },
    {
      id: 6,
      productName: 'MAIL',
      productIcon: 'mail'
    },
    {
      id: 7,
      productName: 'BPJS',
      productIcon: 'medkit'
    },
    {
      id: 8,
      productName: 'TELKOM',
      productIcon: 'call'
    },
    {
      id: 9,
      productName: 'PDAM',
      productIcon: 'water'
    },
  ]
  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Text>Beli Kuota</Text>
          </Body>
          <Right/>
        </Header>
        <Content>
          <List >
            <ListItem icon style={{borderBottomWidth: 0}}>
              <Left>
                <Icon name="cash" />
              </Left>
              <Body>
                <Text>Rp. {100.000}</Text>
              </Body>
              <Right>
                <Button small rounded>
                  <Text>Isi Saldo</Text>
                </Button>
              </Right>
            </ListItem>
          </List>

          <List style={styles.listProduct}>
            {this.products.map(
              (product) => <ProductItem key={product.id} product={product}/>
            )}
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical full >
              <Icon name="cart" />
              <Text >Beli Produk</Text>
            </Button>
            <Button vertical full>
              <Icon name="search" />
              <Text>Status Beli</Text>
            </Button>
            <Button vertical full>
              <Icon name="person" full/>
              <Text>Akun Saya</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  blue: {
    backgroundColor: '#00a1dd',
  },
  white: {
    color: '#FFF'
  },
  listProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  },
  productItem: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

import React, {Component} from 'react'
import {
  ListItem,
  Body,
  Icon,
  Text
} from 'native-base';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native'
export default class ProductItem extends Component {

  render(){
    const {product: {id, productName, productIcon}} = this.props
    return (
      <ListItem key={id} style={styles.productItem}>
        <Body>
          <TouchableOpacity style={styles.productItem} onPress={()=> this.props.navigation.navigate('Topup')}>
            <Icon name={productIcon} />
            <Text style={{marginTop: 10}}>{productName}</Text>
          </TouchableOpacity>
        </Body>
      </ListItem>
    )
  }
}
const styles = StyleSheet.create({
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

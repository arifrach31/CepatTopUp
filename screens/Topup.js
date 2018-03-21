import React, {Component} from 'react'
import {
  Content,
  Form,
  FormItem,
  Item,
  Input,
  Picker
} from 'native-base'
export default class Topup extends Component {

  render(){
    return(
      <Form>
        <Picker
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={this.state.selected1}
          onValueChange={this.onValueChange.bind(this)}
        >
          <Item label="Wallet" value="key0" />
          <Item label="ATM Card" value="key1" />
          <Item label="Debit Card" value="key2" />
          <Item label="Credit Card" value="key3" />
          <Item label="Net Banking" value="key4" />
        </Picker>
      </Form>
    );
  }
}

import React from "react";
import {
  AppRegistry,
  Image,
  StatusBar
} from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Button
} from "native-base";
const routes = ["Transaksi", "Harga", "Testimonial"];
export default class Sidebar extends React.Component {

  render() {
let self = this;
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAo7AAAAJGI3MmRiNGMzLWYyN2YtNDcwNS05OWJiLTYwMzEwYzM5Y2E3Yw.png"
            }}
            style={{
              marginTop:20,
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => self.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

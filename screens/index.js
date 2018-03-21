import React, {Component} from "react"
import Transaksi from "./Transaksi.js"
import Sidebar from "./Sidebar.js"
import Topup from "./Topup.js"
import Harga from "./Harga.js"
import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
} from "react-native";
import { DrawerNavigator } from "react-navigation"
const HomeScreenRouter = DrawerNavigator(
  {
    Transaksi: {screen: Transaksi},
    Topup: {screen: Topup},
    Harga: {screen: Harga}
  },
  {
    contentComponent: props => <Sidebar/>
  }
);

export default HomeScreenRouter;

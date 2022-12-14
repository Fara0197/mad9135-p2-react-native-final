import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  FlatList,
  TouchableHighlight,

} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { artList } from "../data/Data"
import React, {Component} from "react";
import { LinearGradient } from 'expo-linear-gradient';




export default class Art extends Component {


  



  
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  renderList = ({ item }) => {
    return (
      <TouchableHighlight>
      
        <View style={{ justifyContent: 'flex-end'}}>
          <LinearGradient
          colors={['#f5ebe0', '#eab69f','#f4f1de', ]}>
                 <Text style={{marginLeft: 'auto',
      fontSize: 18, padding: 5, fontStyle: 'italic'}}>  {item.title}</Text>
          </LinearGradient>
   
   <TouchableHighlight>
   <Image style={{
            width: 350,
            height: 300,
            
          }}
              source={item.image}
            />
   </TouchableHighlight>
     
   
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "#f5ebe0",
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center", }}
          >
            <Text style ={{fontSize: 20, padding: 20}}>Most Popular</Text>
            <FlatList
              data={artList}
              renderItem={this.renderList}
              keyExtractor={(item) => item.id}
            />
              
             
          </View>
      
        
        
      
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

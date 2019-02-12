
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

// export default function (){
//   return (
//        <View style={styles.container}>
//          <Text style={styles.f20}>App em Função</Text>
        
//        </View>
//      );
// }

 export default class App extends Component {
   render() {
     return (
       <View style={styles.container}>
         <Text style={styles.f20}>App</Text>
        
       </View>
     );
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  f20: {
    fontSize: 40
  }
});

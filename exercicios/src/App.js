
import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Simples from './componentes/Simples'

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
         <Simples texto="Texto via props"/>
       </View>
     );
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  }
});

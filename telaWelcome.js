



 

       

//import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

import React, { useState } from 'react';

import {SafeAreaView,FlatList,ScrollView,Image, TouchableOpacity,Button,Alert,TextInput} from 'react-native';





const clicarBotao= () => {};

 const Separator = () => <View style={styles.separator} />;

 
telaWelcome.js
export default function App() {

  return (

    <View style={styles.container}>





<ScrollView style={styles.scrollView}>




  <Text style={styles.title}> Seja Bem-vindo(a)  !!</Text>

 

 <Text style={styles.title2}> Vamos começar a imersão...

 

“Aprender um novo idioma é como se tornar uma nova pessoa.” - Haruki Murakami</Text>

 

         

       <Image

        style={styles.img}

        source={{

          uri: 'https://media.istockphoto.com/id/1316279928/pt/vetorial/sign-language-classes-abstract-concept-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=qw9nOsKiezt3jsxDvLKgh1ModAWlNLnYNxADaa6UNZU=',

        }}

      />

 

<Text style={styles.title2}>

'Nada melhor para aprender outra língua do que se comunicar com quem já fala o idioma'  </Text>

 

  <Separator />

 

 <TouchableOpacity>





    <View style={styles.buttonn}>

 

 <Text style={styles.title2}>Já possui conta  ?</Text>

        <Button  title="Login"

             onPress={clicarBotao}

             color="#1f3e95"

 

             />

       

    </View>




      <View style={styles.buttonn}>

 

        <Button  title="Cadatre-se"

             onPress={clicarBotao}

             color="#1c93dc"

 

             />

       

        </View>




     </TouchableOpacity>

 

</ScrollView>

 

    </View>

  );

}

 

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

     alignItems: 'center',

    backgroundColor: '#a8dadc',

    height: 30,

    margin: 12,

    padding: 10,

       fontFamily: 'Cochin',

  },

  title:{

 

  fontSize:35,

   fontWeight: 'bold',

   justifyContent: 'center',

   alignItems: 'center',

    margin: 30,

    padding: 10,

      borderRadius: 13,

 // backgroundColor: '#c9d1d3',

      backgroundColor:'#4bcdce',

       

  },

  title2:{

 fontWeight: 'bold',

   justifyContent: 'center',

   alignItems: 'center',

     margin: 30,

    padding: 10,

   

 

  fontSize:17,

 

  },




  img: {

    width: 290,

    height: 290,

     justifyContent: 'center',

     alignItems: 'center',

     padding: 10,

       margin: 30,

borderRadius:50,

  },

 

buttonn:{

 

   borderRadius:50,

   margin: 20,

   gap:30,

 

   paddingVertical: 10,

    paddingHorizontal: 20,

   

 

},

 

  separator: {

    marginVertical: 8,

    borderBottomColor: '#737373',

    borderBottomWidth: StyleSheet.hairlineWidth,

  },




 

});

 

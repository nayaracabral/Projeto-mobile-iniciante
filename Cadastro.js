import React, { useContext, useState } from "react";

//import React from 'react';

import {SafeAreaView, RefreshControl, Pressable,ScrollView ,StyleSheet, View,Text, TextInput, Image} from 'react-native';

 

import{ AntDesign} from '@expo/vector-icons';




const Cadastro= () => {







const [name, setName]= useState("");




  return (

 

    <SafeAreaView style={{flex: 1}}>

   

    <ScrollView>

   

 

      <View style={styles.container}>

 

     

       

       <Image

        style={styles.logo}

        source={{

          uri: 'https://images.pexels.com/photos/7516355/pexels-photo-7516355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

        }}

      />

 

       

       









        <View style={styles.sectionStyle}>

 

         

 

         

 

 

 

           <View style={styles.titleICON}>

 

        <AntDesign name="user" size={24} color="black" />

 

        </View>

 

         

 

          <TextInput

 

            style={{flex: 1}}

 

             

 

            placeholder=" Digite Nome de Usuário"

 

           underlineColorAndroid="transparent"

           

 

            maxLength={10}

 

         

 

          />

 

        </View>

 

 








     

 

   

 

        <View style={styles.sectionStyle}>

 

         

 

         

 

 

 

           <View style={styles.titleICON}>

 

        <AntDesign name="mail" size={24} color="black" />

 

        </View>

 

         

 

          <TextInput

 

            style={{flex: 1}}

 

            placeholder=" Digite Seu E-mail"

 

           underlineColorAndroid="transparent"

           

            onChangeText={setName}

 

            maxLength={20}

 

             keyboardType="email-address"

 

          />

 

        </View>










        <View style={styles.sectionStyle}>

 

         

 

 

 

        <View style={styles.titleICON}>

 

        <AntDesign name="lock" size={24} color="black" />

 

 

 

        </View>




          <TextInput

 

            style={{flex: 1}}

 

            placeholder=" Digite Sua Senha"

 

            underlineColorAndroid="transparent"

           

            secureTextEntry

 

           autoCorrect={false}

 

           maxLength={20}

 

          />

 

        </View>















        <View style={styles.sectionStyle}>

 

         

 

 

 

        <View style={styles.titleICON}>

 

        <AntDesign name="lock" size={24} color="black" />

 

 

 

        </View>




          <TextInput

 

            style={{flex: 1}}

 

            placeholder=" Confirme senha"

 

            underlineColorAndroid="transparent"

           

            secureTextEntry

 

           autoCorrect={false}

 

           maxLength={20}

 

          />

 

        </View>


















      </View>

 

   

       

<Text>

      .  E-mail    :    {name}    

</Text>

 

     

 

        <View style={styles.b}>




      <Pressable

 

        style={({pressed}) => [

 

          {

 

            backgroundColor: pressed ? '#79dd7e' : '#f85741',

 

          },

 

          styles.button,

 

        ]}

 

       >

 

        <Text style={styles.buttonText}>Cadastre-se</Text>

 

      </Pressable>

 

 






    </View>

 

   </ScrollView>

 

</SafeAreaView>




  );

 

};

 

 

 

const styles = StyleSheet.create({

 

 container: {

 

    flex: 1,

 

 backgroundColor: '#7bccf2',

 

    justifyContent: 'center',

 

    alignItems: 'center',

 

    gap:25,

 

    fontSize: 20,

 

    fontWeight: 'bold',

 

   

 

  },

 

  sectionStyle: {

 

    flexDirection: 'row',

 

    justifyContent: 'center',

 

    alignItems: 'center',

 

    backgroundColor: '#ffff',

 

    borderWidth: 0.5,

 

    borderColor: '#000',

 

    height: 40,

 

    borderRadius: 25,

 

    margin: 10,

 

gap:30,

 

  paddingTop:4,

 

  paddingStart: 16,

 

  paddingEnd:16,

 

   

 

  },

 

 

 

   button: {

 

    borderRadius: 20,

 

   // padding: 6,

 

    height: 50,

 

  //  width: '60%',

 

    justifyContent: 'center',

 

    alignItems: 'center',

 

    elevation: 5,

 

      marginHorizontal: 70,

 

     marginVertical: 70,

 

   

 

  },

 

  buttonText: {

 

    fontSize: 20,

 

    color: 'white',

     fontFamily: 'Cochin',

 

  },

 

logo: {

  width: 380,

    height: 380,

    gap:50,

    borderRadius:200,

  },

 

  baseText: {

    fontFamily: 'Cochin',

    fontSize: 30,

    fontWeight: 'bold',

  },




 

 

 

 

});

 

 

 

export default Cadastro;

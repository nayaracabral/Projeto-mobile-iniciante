import React from 'react';

import {SafeAreaView, Pressable,ScrollView ,StyleSheet, View,Text, TextInput, Image} from 'react-native';

import{ AntDesign} from '@expo/vector-icons';




const App = () => {











  return (

    <SafeAreaView style={{flex: 1}}>
   
   
   

      <View style={styles.container}>

     
       
       <Image
        style={styles.logo}
        source={{
          uri: 'https://media.istockphoto.com/id/1357347971/pt/vetorial/procedure-as-work-flow-process-steps-scheme-document-tiny-person-concept-strategy-and-task.webp?s=2048x2048&w=is&k=20&c=HpEGk4LmHWIbO-l--Cha40yFTDpvp-yGix1NteYvRuA=',
        }}
      />
 
       
       
         

   

        <View style={styles.sectionStyle}>

         

         

 

           <View style={styles.titleICON}>

        <AntDesign name="mail" size={24} color="black" />

        </View>

         

          <TextInput

            style={{flex: 1}}

            placeholder=" Digite Seu E-mail"

           underlineColorAndroid="transparent"
           

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

      </View>

   

     

        <View style={styles.b}>

      <Pressable

        style={({pressed}) => [

          {

            backgroundColor: pressed ? '#79dd7e' : '#f85741',

          },

          styles.button,

        ]}

       >

        <Text style={styles.buttonText}>Login</Text>

      </Pressable>

    </View>

   


</SafeAreaView>




  );

};

 

const styles = StyleSheet.create({

 container: {

    flex: 1,

    backgroundColor: '#909d9e',

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

    borderRadius: 5,

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
  width: 400,
    height: 330,
    gap:50,
  },

  baseText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: 'bold',
  },




 

 

});

 

export default App;

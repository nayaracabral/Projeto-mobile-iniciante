import React from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContatosPAG from '../screens/ClientsScreen';

import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";






const AppNavigator = (props) => {
 

  const Tab = createBottomTabNavigator();

  const TabNavigator = () => {


    
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Contatos") {
              iconName = focused ? "ios-people" : "ios-people";
            } else if (route.name === "Chat") {
              iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles";
            } else if (route.name === "Notificacções") {
              iconName = focused ? "ios-notifications" : "ios-notifications";
            } else if (route.name === "Perfil") {
              iconName = focused ? "person-circle-outline" : "person-circle-outline";
            }

          




            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#2a8bf2",
          tabBarInactiveTintColor: "black",
          tabBarStyle: [ { display: 'flex'}, null]
        })}
      >






        <Tab.Screen
          name="Contatos"
          component={ContatosPAG}
        />
        <Tab.Screen name="Notificacções" />
        <Tab.Screen name="Chat" />
        <Tab.Screen name="Perfil" />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};







export default AppNavigator

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

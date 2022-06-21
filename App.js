import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TableauxScreen from './screens/TableauxScreen';
import WorkspaceScreen from './screens/WorkspaceScreen';
import CardScreen from './screens/CardScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import { UserContext, UserState } from './context/userContext';

const Stack = createNativeStackNavigator();



export default function App() {
  const [userContext, setUserContext] = useState(null);

  const value = useMemo(() => ({ userContext, setUserContext }), [userContext, setUserContext]);
  return (
    <UserContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Login">
          <Stack.Screen name="Tableaux" component={TableauxScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Workspace" component={WorkspaceScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Card" component={CardScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
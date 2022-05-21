import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TableauxScreen from './screens/TableauxScreen';
import WorkspaceScreen from './screens/WorkspaceScreen';
import CardScreen from './screens/CardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Card">
        <Stack.Screen name="Tableaux" component={TableauxScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Workspace" component={WorkspaceScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Card" component={CardScreen} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

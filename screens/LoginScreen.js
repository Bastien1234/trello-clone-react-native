import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';


import { SafeAreaView } from 'react-native-safe-area-context';


import constants from '../constants/constants';
const backendUrl = `${constants.URL}/api/v1/users/testServer`;

const LoginScreen = ({ navigation }) => {
    // States for creating use
    const [newUser,setNewUser] = useState({
        email : "",
        lastName: "",
        firstName: "",
        password: "",
        confirmPassword: ""
    })
    const [bottomMessage, setBottomMessage] = useState("hey");
    const [isLoading, setisLoading] = useState(false);

    const signUp = async () => {
        try {
            const response = await axios.get(backendUrl);
            console.log(response)
            if (response.status === "success") {
                navigation.navigate("Tableaux")
            }
        } catch(e) {
            console.log("error : ", e.message)
            setBottomMessage(e.message);
        }
    }

  return (
    <SafeAreaView style={{
        backgroundColor: "white",
        flex: 1
    }}>
      {/* Header */}
      <View style={styles.header}>
          <Text style={{
              fontSize: 25,
              color: "white"
          }}>Créer un compte</Text>
      </View>

      {/* Main body */}
      <View>
          {/* Logo */}
        <Image source={require('./../assets/images/trello-logo.png')} style={{
            ...constants.logoStyle,
            marginTop: 15,
            alignSelf: "center",
            marginBottom: 20
            }}/>

        <TextInput 
            placeholder='Email'
            style={styles.placeholder}
            value={newUser.email}
            onChangeText={t => {
                setNewUser({...newUser, email : t})
                console.log(newUser)
            }}
        />

        <TextInput 
            placeholder='Last Name'
            style={styles.placeholder}
            value={newUser.lastName}
            onChangeText={t => {
                setNewUser({...newUser, lastName : t})
                console.log(newUser)
            }}
        />

        <TextInput 
            placeholder='First Name'
            style={styles.placeholder}
            value={newUser.firstName}
            onChangeText={t => {
                setNewUser({...newUser, firstName : t})
                console.log(newUser)
            }}
        />

        <TextInput 
            placeholder='Password'
            style={styles.placeholder}
            value={newUser.password}
            secureTextEntry={true}
            onChangeText={t => {
                setNewUser({...newUser, password : t})
                console.log(newUser)
            }}
        />

        <TextInput 
            placeholder='Confirm Password'
            style={styles.placeholder}
            value={newUser.confirmPassword}
            secureTextEntry={true}
            onChangeText={t => {
                setNewUser({...newUser, confirmPassword : t})
                console.log(newUser)
            }}
        />
      </View>

      <Pressable 
        style={{
            backgroundColor: constants.blue,
            height: 50,
            width: 200,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 10
        }}
        onPress={() => signUp()}
      
      >
        <Text style={{
            fontSize: 20,
            color: "white"
        }}>S'enregistrer</Text>
      </Pressable >

      <Text style={{
          alignSelf: "center",
          fontSize: 20,
          color: "red",
          marginTop: 20
      }}>{bottomMessage}</Text>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    header: {
        backgroundColor: constants.blue,
        height: constants.headerHeight,
        justifyContent: "center",
        alignItems: "center"
    },

    main: {
        flex: 1,
    },

    placeholder: {
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: "beige",
        borderLeftWidth: 2,
        borderLeftColor: "beige",
        marginLeft: 10,
        marginBottom: 25,
        paddingLeft: 15,
        paddingBottom: 5,
        width: "90%"
    }
})
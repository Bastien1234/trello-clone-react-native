import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native';
import React, { useState, useContext } from 'react';
import axios from 'axios';


import { SafeAreaView } from 'react-native-safe-area-context';


import constants from '../constants/constants';
const backendUrl = `${constants.URL}/api/v1/users/login`;

import { UserContext } from './../context/userContext';


const LoginScreen = ({ navigation }) => {
    const { userContext, setUserContext } = useContext(UserContext);
    // States for creating use
    const [newUser,setNewUser] = useState({
        email : "",
        password: "",
    })
    const [bottomMessage, setBottomMessage] = useState("");
    const [isLoading, setisLoading] = useState(false);

    const login = async () => {
        try {
            newUser.email = newUser.email.toString().toLowerCase();
            newUser.password = newUser.password.toString().toLowerCase();
            const response = await axios.post(backendUrl, newUser);
            if (response.status === 200) {
                let currUser = response.data.user;
                let newObj = {
                    _id : currUser._id,
                    email: currUser.email,
                    firstName: currUser.firstName,
                    lastName: currUser.lastName,
                    spaces: currUser.spaces,
                };
                setUserContext(newObj);
                setBottomMessage("Successully connected !")
                setTimeout(() => {
                    navigation.navigate("Tableaux")
                }, 500)
                
            }
        } catch(e) {
            console.log("error : ", e.message)
            setBottomMessage("Wo wo wo !! problème !");
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
          }}>Se connecter</Text>
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
            placeholder='Password'
            style={styles.placeholder}
            value={newUser.password}
            secureTextEntry={true}
            onChangeText={t => {
                setNewUser({...newUser, password : t.toString()})
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
        onPress={() => login()}
      
      >
        <Text style={{
            fontSize: 20,
            color: "white"
        }}>Log in</Text>
      </Pressable >

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
        onPress={() => navigation.navigate("Signup")}
      
      >
        <Text style={{
            fontSize: 20,
            color: "white"
        }}>Créer un compte</Text>
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
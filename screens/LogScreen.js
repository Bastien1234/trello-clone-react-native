import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToggleSwitch from 'toggle-switch-react-native'

const LogScreen = ({ navigation }) => {

    const [toggleSwitchPassword, setToggleSwitchPassword] = useState(false);
    const [toggleSwitchBiometry, setToggleSwitchBiometry] = useState(false);

    return (
        <SafeAreaView style={styles.global}>
            <Image source={require('./../assets/images/logScreenImage.png')} style={styles.image}/>
            {/* All elements beneath photo */}
            <View style={styles.bottomPart}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Email Adress"
                    secureTextEntry={false}
                    // onChangeText={text => {
                    //     setNewTeamData(previousData => {
                    //         return { ...previousData, firstName: text}})}} 
                    />

                <TextInput 
                    style={styles.textInput} 
                    placeholder="Password"
                    secureTextEntry={true}
                    // onChangeText={text => {
                    //     setNewTeamData(previousData => {
                    //         return { ...previousData, firstName: text}})}} 
                    />

                <View style={styles.toggleLine}>
                    <View style={styles.toggle}>
                    <ToggleSwitch
                        isOn={toggleSwitchPassword}
                        onColor="rgb(173, 26, 26)"
                        offColor="grey"
                        size="small"
                        onToggle={() => setToggleSwitchPassword(!toggleSwitchPassword)}
                        />
                    </View>
                    <Text style={styles.toggleText}>Remember my password</Text>
                </View>

                <View style={styles.toggleLine}>
                    <View style={styles.toggle}>
                    <ToggleSwitch
                        isOn={toggleSwitchBiometry}
                        onColor="rgb(173, 26, 26)"
                        offColor="grey"
                        size="small"
                        onToggle={() => setToggleSwitchBiometry(!toggleSwitchBiometry)}
                        />
                    </View>
                    <Text style={styles.toggleText}>Activate biometry</Text>
                </View>

                <Pressable style={styles.loginButton}>
                    <Text style={styles.loginButtontext}>LOGIN</Text>
                </Pressable>

                <Pressable style={styles.registerButton}
                            onPress={() => {navigation.navigate("Register")}}
                >
                    <Text style={styles.registerButtonText}>REGISTER</Text>
                </Pressable>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>No game under 18</Text>
                <Text style={styles.footerText}>Forgot password ?</Text>
            </View>
            
        </SafeAreaView>
    )
}

export default LogScreen;

const styles = StyleSheet.create({
    global: {
        backgroundColor: "rgb(235, 235, 235)",
        flex: 1
    },

    bottomPart: {
        flex: 1,
        justifyContent: "space-between",
        marginTop: 20
        // backgroundColor: "blue"
    },

    image: {
        height: 275,
        width: "100%"
    },

    textInput: {
        // backgroundColor: "red",
        alignSelf: "center",
        width: "75%",
        fontSize: 17,
        color: "black",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        height: 50,
        textAlign: "center"
    },

    toggleLine: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "75%",
        alignSelf: "center",
        height: 30
    },
    toggle: {
        marginRight: 15
    },

    toggleText: {
        fontSize: 17
    },

    loginButton: {
        backgroundColor: "rgb(173, 26, 26)",
        width: 175,
        height: 40,
        borderRadius: 3,
        overflow: "hidden",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },

    loginButtontext: {
        fontSize: 20,
        color: "white"
    },

    registerButton: {
        alignSelf: "center"
    },

    registerButtonText: {
        fontSize: 20,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "black"
    },

    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40,
        alignItems: "flex-end"
    },

    footerText: {
        fontSize: 12,
        marginLeft: 10,
        marginRight: 10
    }
})

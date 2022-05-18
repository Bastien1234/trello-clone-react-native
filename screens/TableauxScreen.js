import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import constants from '../constants/constants';
import HeaderScreen from './HeaderScreen';
import OptionScreen from './OptionScreen';

import DB from './../fakeDB/db';

const LogScreen = ({ navigation }) => {

    const [showOptions, setShowOptions] = useState(false);

    const optionAnim = useRef(new Animated.Value(0)).current;

    const optionKickingIn = () => {
        Animated.timing(optionAnim, {
            toValue : 4,
            duration: 333,
            useNativeDriver: false
        }).start();
    }

    return (
        <SafeAreaView style={styles.global}>
            <HeaderScreen 
                title={"Tableaux"} 
                showOptions={showOptions} 
                setShowOptions={setShowOptions}
                optionKickingIn={optionKickingIn}/>
            <View style={styles.mainBody}>
                <Text style={styles.subTitle}>Espace de travail Trello</Text>
                {
                    // Populate from DB

                    DB.map((el, idx) => {
                        return(
                                <Pressable style={styles.workspace} key={idx}>
                                    <Image 
                                        style={styles.workspaceImage}
                                        source={require("./../assets/images/motocross.jpg")} />
                                    <Text style={styles.workspaceText}>{el.name}</Text>
                                </Pressable>
                            )
                    })
                }
            </View>

            { showOptions === true ? 
                <OptionScreen 
                    showOptions={showOptions} 
                    setShowOptions={setShowOptions}
                    optionAnim={optionAnim}
                    /> : null }
            
        </SafeAreaView>
    )
}

export default LogScreen;

const styles = StyleSheet.create({
    global: {
        backgroundColor: constants.blue,
        flex: 1
    },

    mainBody: {
        flex: 1,
        backgroundColor: "white"
    },

    subTitle: {
        fontSize: 16,
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 15
    },

    workspace: {
        flexDirection: "row",
        backgroundColor: "lightgrey",
        marginBottom: 10,
        height: 65,
        alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "grey",
        borderBottomColor: "grey",
    },

    workspaceImage: {
        height: 50,
        width: 50,
        marginLeft: 15,
        borderRadius: 5
    },

    workspaceText: {
        marginLeft: 15,
        fontSize: 20
    }
})

import React, { useState, useRef, useContext } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import constants from '../constants/constants';
import HeaderScreen from './HeaderScreen';
import OptionScreen from './OptionScreen';
import axios from 'axios';

import DB from './../fakeDB/db';               

import { UserContext } from './../context/userContext';

const LogScreen = ({ navigation }) => {

    const { userContext, setUserContext } = useContext(UserContext);

    const [showOptions, setShowOptions] = useState(false);
    const [showNew, setShowNew] = useState(true);

    const optionAnim = useRef(new Animated.Value(0)).current;

    const optionKickingIn = () => {
        Animated.timing(optionAnim, {
            toValue : 4,
            duration: 1000,
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

                {
                showNew === true ?

                <View style={styles.addGlobal}>
                    <Text style={styles.subTitle}>Ajouter un espace de travail</Text>
                    <TextInput 
                        placeholder="nouvel espace"
                        style={{
                            height: 40,
                            width: "90%",
                            alignSelf: "center",
                            paddingLeft: 15,
                            borderWidth: 1,
                            borderRadius: 5,
                        }}/>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Pressable 
                            style={styles.btn}>
                            <Text style={styles.btnText}>Ajouter</Text>
                        </Pressable>
                        <Pressable 
                            style={styles.btn}
                            onPress={() => {setShowNew(false)}}>
                            <Text style={styles.btnText}>Annuler</Text>
                        </Pressable>
                    </View>
                </View> : null
            }
            </View>

            
            
            {

                showNew === false ?
                <View style={{
                    position: "absolute",
                    bottom: 25,
                    right: 25,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Pressable style={{
                        width: 85,
                        height: 85,
                        borderRadius: 500,
                        backgroundColor: "lightgreen",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                        onPress={() => {setShowNew(true)}}>
                        <Text style ={{
                            fontSize: 50,
                            color: "white",
                            
                        }}>+</Text>
                    </Pressable>
                    
                </View> : null
            }

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
    },

    addGlobal: {

    },

    btn: {
        height: 50,
        width: 100,
        marginRight: 5,
        marginLeft: 5,
        margin: 10,
        backgroundColor: "lightgrey",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5
    },

    btnText: {
        fontSize: 15,
    }
})

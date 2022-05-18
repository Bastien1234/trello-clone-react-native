import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import constants from '../constants/constants';
import HeaderScreen from './HeaderScreen';
import OptionScreen from './OptionScreen';

import DB from './../fakeDB/db';

const WorkspaceScreen = ({ navigation }) => {

    const [database, setDatabase] = useState({});

    let SELECTED = "Espace 1" // to change that shit please !!!

    useEffect(() => {
        const DBcopy = DB[0];
        DBcopy.spaces.forEach(el => {
            if (el.name === SELECTED) {
                setDatabase(el);
            }
        })
        console.log(database)
    }, [])


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
                title={SELECTED} 
                showOptions={showOptions} 
                setShowOptions={setShowOptions}
                optionKickingIn={optionKickingIn}/>
            <View style={styles.mainBody}>
                {
                    database["containers"] ? 
                    
                    database.containers.map((cont, idx) => {
                        return(
                            <View style={styles.card} key={idx}>
                                <Text>{cont.title}</Text>
                                <View>
                                    {
                                        cont.cards.map((card, cardIdx) => {
                                            let totalCheckBoxes = 0;
                                            let actualCheckedBoxes = 0;

                                            for (let el of card.checklist) {
                                                if (el.done === true) {
                                                    totalCheckBoxes ++;
                                                    actualCheckedBoxes ++;
                                                } else {
                                                    totalCheckBoxes ++;
                                                }
                                            }
                                            return(
                                                <View key={cardIdx}>
                                                    <Text>{card.cardTitle}</Text>
                                                    <Text>boxes : {actualCheckedBoxes}/{totalCheckBoxes}</Text>
                                                </View>
                                                )
                                        })
                                    }
                                </View>
                                <Pressable>
                                    <Text>+ Ajouter une carte</Text>
                                </Pressable>

                            </View>
                            )
                    })

                    : null
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

export default WorkspaceScreen;

const styles = StyleSheet.create({
    global: {
        backgroundColor: constants.blue,
        flex: 1
    },

    mainBody: {
        flex: 1,
        backgroundColor: "white"
    },

    card: {
        backgroundColor: "lightgrey",
        width: "70%",
        marginLeft: 20,
        marginRight: 5,
        marginTop: 15,
        borderRadius: 5
    }
})

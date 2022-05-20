import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import constants from '../constants/constants';
import HeaderScreen from './HeaderScreen';
import OptionScreen from './OptionScreen';

import DB from './../fakeDB/db';

const WorkspaceScreen = ({ navigation }) => {

    const [database, setDatabase] = useState({});
    const [addingCard, setAddingCard] = useState(true);

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
            <View style={styles.ScrollViewContainer}>
            <ScrollView style={styles.mainBody} horizontal={true}>
                {
                    database["containers"] ? 
                    
                    database.containers.map((cont, idx) => {
                        return(
                            <View style={styles.card} key={idx}>
                                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                    <Text
                                        style={{
                                            marginLeft: 10,
                                            fontSize: 17,
                                            marginTop: 10,
                                            marginBottom: 20
                                        }}
                                    >{cont.title}</Text>
                                    <Image source={require('./../assets/svg/cancel.png')} style={{height: 20, width: 20, marginRight: 15}}/>
                                </View>
                                
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
                                                <View 
                                                    key={cardIdx}
                                                    style={{
                                                        backgroundColor: "white",
                                                        width: "95%",
                                                        alignSelf: "center",
                                                        borderRadius: 5,
                                                        marginBottom: 5
                                                    }}>
                                                    <Text style={{marginLeft: 10, marginTop: 8}}>{card.cardTitle}</Text>
                                                    <View style={{
                                                        flexDirection: "row"
                                                    }}>
                                                        <Image 
                                                            source={require('./../assets/svg/check-box.png')}
                                                            style={{
                                                                height: 15, width: 15, marginLeft: 30
                                                            }}/>
                                                        <Text style={{fontSize: 15, marginLeft: 15, marginBottom: 8}}>{actualCheckedBoxes}/{totalCheckBoxes}</Text>
                                                    </View>
                                                    
                                                </View>
                                                )
                                        })
                                    }
                                </View>
                                <Pressable 
                                    style={{
                                        marginTop: 25,
                                        marginBottom: 15
                                    }}
                                    onPress={() => setAddingCard(!addingCard)}>
                                    <Text style={{
                                        marginLeft: 10,
                                        color: "green"
                                    }}>+ Ajouter une carte</Text>
                                </Pressable>

                            </View>
                            )
                    })

                    : null
                }

                <Pressable 
                    style={styles.addList}
                    >
                    <Text style={{color: "green", fontSize: 25}}>Ajouter une liste</Text>
                </Pressable>
            </ScrollView>
            </View>

            {addingCard === true ?

            <View style={{flexDirection: "row"}}>
                <TextInput 
                    placeholder="Coucou"
                />
                <Pressable>
                    <Image 
                        source={require('./../assets/svg/cancel.png')} 
                        style={{height: 20, width: 20}}/>
                </Pressable>
            </View>
            

            : 
            
            <View style={{backgroundColor: "white", flex:1}}></View>}



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
        flex: 1,
        marginBottom: 50
    },

    mainBody: {

        backgroundColor: "white",
        height: 150
    },

    card: {
        backgroundColor: "lightgrey",
        width: 300,
        marginLeft: 20,
        marginRight: 5,
        marginTop: 15,
        borderRadius: 5,
        height: 225
    },

    addList: {
        backgroundColor: "white", 
        alignItems: "center", 
        justifyContent: "center", 
        height: 50, 
        marginTop: 15, 
        width: 200,
        marginRight: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "lightgrey",
        fontSize: 20},

        ScrollViewContainer: {
            height: 275
        }
})

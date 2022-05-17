import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderScreen from './HeaderScreen';
import OptionScreen from './OptionScreen';

const LogScreen = ({ navigation }) => {

    const [showOptions, setShowOptions] = useState(false);

    const optionAnim = useRef(new Animated.Value(0)).current;

    const optionKickingIn = () => {
        Animated.timing(optionAnim, {
            toValue : 4,
            duration: 888,
            useNativeDriver: false
        }).start();
    }

    return (
        <SafeAreaView style={styles.global}>
            <HeaderScreen 
                title={"nik"} 
                showOptions={showOptions} 
                setShowOptions={setShowOptions}
                optionKickingIn={optionKickingIn}/>
            <View style={styles.mainBody}>
                <Text>Coucou</Text>
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
        backgroundColor: "rgb(235, 235, 235)",
        flex: 1
    },

    mainBody: {
        flex: 1,
        backgroundColor: "grey"
    }
})

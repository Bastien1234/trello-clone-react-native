import { StyleSheet, Text, View, Pressable, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const OptionScreen = ({ navigation, showOptions, setShowOptions, optionAnim }) => {

    
  return (
    <SafeAreaView style={styles.global}>
      <Animated.View style={{backgroundColor:"red", flex: optionAnim}}>
          <Text>Left</Text>
      </Animated.View>
    
       
        <View  style={styles.right}>
            <Pressable 
                style={{width:"100%", height: "100%"}}
            onPress={() => {
            setShowOptions(false)}}>
            </Pressable>
        </View>
        
      
    </SafeAreaView>
  )
}

export default OptionScreen

const styles = StyleSheet.create({
    global: {
        flexDirection: "row",
        position: "absolute",
        width: "100%",
        height: "100%"
    },

    left: {
        backgroundColor: "red",
    },

    right: {
        flex: 1,
        backgroundColor: "transparent",
    }
})
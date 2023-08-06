import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ImageBackground, StyleSheet } from 'react-native';

function AnimatedScreen(props) {
  
  const [b, setB] = useState(1);  //when i change this 1 it goes to another image

  


  const backgroundImages = [
    { id: 1, image: require("../assets/1_1.png") },
    { id: 2, image: require("../assets/2.png") },
    { id: 3, image: require("../assets/3.png") },
  ];

 

  return (
    <ImageBackground
      style={styles.background}
      source={backgroundImages.find(item => item.id === b)?.image}
    >
      <View style={styles.upbarre}>
        <View style={styles.upborder}></View>
        <Image
          style={styles.logo}
          source={require("../assets/lelogo2.png")}
        />
      </View>

    
    </ImageBackground>
  );
}






const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  upborder: {
    backgroundColor: "grey",
    width: "100%",
    height: 80,
  },
  upbarre: {
    alignItems: 'center',
  },
  logo: {
    resizeMode: "contain",
    width: 120,
    height: 50,
    alignSelf: 'center',
    top: -50,
  },
  
});

export default AnimatedScreen;

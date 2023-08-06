import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, View , Image, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpg")}
        >
        
        <SafeAreaView style={styles.background}>

      <View  style={styles.icon_text}   > 
        <Image style = {styles.icon} source={require("../assets/logo-red.png")}   />
        <Text>Heloo world</Text>
      </View>

      <View  style={styles.generalButtons}   > 
      
        <View style= {styles.button1} />
        <View style= {styles.button2}/>

      </View>



        </SafeAreaView>



        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    generalButtons : {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      alignContent:"center",
      flexWrap:"wrap",

    },

    button1 : {
      backgroundColor: "salmon",
          width: "100%",
          height: 70,
    },

    button2: {
      backgroundColor: "powderblue",
          width: "100%",
          height: 70,
    },


    icon: {
      width: 50,
      height: 50,
    },
    
    icon_text: {
      
      top : 100,
      alignItems:'center',

    },
})




export default WelcomeScreen; 
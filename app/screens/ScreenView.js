import React from 'react';
import { Image , StyleSheet, View} from 'react-native';

function ScreenView (props) {
    return (

        <View style={styles.page}>

        <Image 
        resizeMode="contain"
        style ={styles.chair}
        source={require("../assets/chair.jpg")} >

        </Image>
        
        
        </View>
    );


}

const styles = StyleSheet.create({
    chair: {
        width: '100%',
        height: '100%'
    },
    page : {
        backgroundColor: "black",
        flex: 1,
    }
    
})



export default ScreenView;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, Image } from 'react-native';
import { db } from '../config';
import { ref, onValue } from 'firebase/database';

const FetchDataRealtime = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, '/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id: key,
        ...data[key],
      }));
      console.log(newPosts);
      const mach1 = newPosts[0].machine1;
      const mach2 = newPosts[0].machine2;
      
      // Set the state with both mach1 and mach2
      setTodoData([mach1, mach2]);
    });
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.upbarre}>
        <View style={styles.upborder}></View>
        <Image
          style={styles.logo}
          source={require("../assets/lelogo2.png")}
        />
        {/* Check if todoData is not undefined before using map */}
        {todoData && (
          <>
            <Text style={styles.machineText}>Machine 1: <Text style={styles.machineValue}>{todoData[0]}</Text></Text>
            <Text style={styles.machineText}>Machine 2: <Text style={styles.machineValue}>{todoData[1]}</Text></Text>
          </>
        )}
      </View>
    </View>
  );
};

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
  machineText: {
    top:80,
    fontSize: 20,
  },
  machineValue: {
    fontSize: 18,
    color: '#228b22',
  },
});

export default FetchDataRealtime;

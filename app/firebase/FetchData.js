import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { firebase } from '../config';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('todos');

  useEffect(() => {
    const unsubscribe = todoRef.onSnapshot(querySnapshot => {
      const usersData = querySnapshot.docs.map(doc => {
        const { heading, local, text } = doc.data();
        return {
          id: doc.id,
          heading,
          local,
          text,
        };
      });
      setUsers(usersData);
    });

    // Return a cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }) => (
    <Pressable style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text>{item.id}</Text>
        <Text style={styles.itemHeading}>{item.heading}</Text>
        <Text style={styles.itemText}>{item.local}</Text>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
  
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      
    </View>
  );
};

export default FetchData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingBottom: 20, // Add some padding at the bottom to separate items
  },
  itemContainer: {
    backgroundColor: 'grey',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  itemHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

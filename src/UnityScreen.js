import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';

const UnityScreen = ({ navigation }) => {
  const [title, setTitle] = useState('Hello UNT Developers');
  const [body, setBody] = useState('Unity Native Technology');

  useEffect(() => {
    Alert.alert("Oop! ", "You shouldn't change it.");
  }, [body]);

  const getTitle = () => {
    Alert.alert(title);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('About')}>
        <Text style={styles.btn_text}>Go to About Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={getTitle}>
        <Text style={styles.btn_text}>Get Title value</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ApiData')}>
        <Text style={styles.btn_text}>Go to ApiData Screen</Text>
      </TouchableOpacity>

      <Text style={[styles.text, { marginTop: hp(4) }]}>{body}</Text>
      <TextInput style={styles.input} onChangeText={text => setTitle(text)} />
      <TextInput style={styles.input} onChangeText={text => setBody(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Oswald-Bold',
    fontSize: hp(4),
    // fontWeight: 'bold',
    marginBottom: hp(4),
  },
  btn: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(14),
    backgroundColor: '#841584',
    borderRadius: hp(2),
    margin: 10
  },
  btn_text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: hp(2),
  },
  input: {
    width: wp(90),
    height: hp(8),
    backgroundColor: '#aaa',
    borderRadius: hp(2),
    paddingHorizontal: wp(4),
    marginTop: hp(3),
  }
});

export default UnityScreen;

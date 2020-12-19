import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AboutScreen = ({navigation}) => {
  useEffect(() => {
    Alert.alert("About Component Mounted");
    return () => Alert.alert("About Component Will unmount");
  }, []);

	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Text style={{fontSize: hp(3)}}>About Screen</Text>
			<TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Unity')}>
		        <Text style={styles.btn_text}>Go to About Screen</Text>
		    </TouchableOpacity>
		</View>
	)
}

export default AboutScreen;

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
  },
  btn_text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: hp(2),
  },
});


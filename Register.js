// Register.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,
    ScrollView, ImageBackground,Dimensions,Image} from 'react-native';
    import Icon from 'react-native-vector-icons/MaterialIcons';
//import { fetch } from 'react-native'; // You may need to install 'fetch' using npm or yarn
const Register = ({navigation}) => {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const handleRegistration = () => {
      // Prepare user registration data
      const userData = {
        FirstName,
        LastName,
        UserName,
        Password,
        Email,
      };
      // Make the API request to your server
      fetch('http://192.168.100:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then((response) => {
        if (!response.ok) {
          // If response is not ok, throw an error
          throw new Error('Registration failed');
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log('Registration response:', data);
        // Show success message to the user
        alert('User registered successfully');
      })
      .catch((error) => {
        console.error('Registration error:', error);
        // Show error message to the user
        alert('Error: User registration failed');
      });
    };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}
    showsVerticalScrollIndicator={false}>
       <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      <ImageBackground source={require('./assets/Amoud.jpg')}
        style={[styles.logocontainer, { height: Dimensions.get('window').height / 2.5, }]} >
          <Image style={styles.logo} source={require('./assets/somPlant.png')} >
        </Image>
        <Text style={styles.SloganText}> Your onestop plant provider  </Text>
      </ImageBackground>
      <View style={styles.ButtomView}>
      <View style ={{padding:40}} >
        <Text style={{color:"#007815", fontSize:20}}> User Regsitration</Text>
        <Text>
       Please Note
         <Text style={{color:'red', fontStyle:'italic'}}>
        {'    '}
       All fields are Required
        </Text>
         </Text>
      <View style = {{marginTop:50, marginleft:10, marginRight:10}}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={FirstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={LastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="UserName"
        value={UserName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType='numeric'
        secureTextEntry
        value={Password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        multiline
        value={Email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
    <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    },
    SloganText: {
        fontSize: 10,
        color: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
      },
      SloganText: {
        fontSize: 10,
        color: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
      },
    logocontainer: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    height: 40,
    margin: 10,
    borderBottomWidth: 1,
    padding: 10,
    color: 'green',
    alignItems:"center",
    justifyContent:"center"
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 80,
    marginTop:50
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    color: '#FFFFFF',
    borderRadius: 20,
    width: 200,
    marginLeft:50,
    marginTop:20
  },
  ButtomView:{
    flex: 1.5,
    backgroundColor:'#FFFFFF',
    bottom:50,
    borderTopStartRadius:60,
    borderTopEndRadius:60,
    marginBottom:60,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  }
});
export default Register;
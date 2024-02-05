//Login.js
import React , { useState }from 'react';
import { Text, TouchableOpacity, Input, TextInput,  Item, StyleSheet, Image, ScrollView, ImageBackground, Dimensions, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const LoginScreen = ({ navigation }) => {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const handleLogin = () => {
    const userData = {
      UserName: UserName,
      Password: Password,
    };
    console.log('Logging in with:', userData);
    fetch('http://192.168.100:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          // Login successful, navigate to home
          navigation.navigate('Home');
        } else {
          // Login failed, set error message
          setLoginError('Invalid login credentials.');
        }
      })
      .catch((error) => {
        console.error('Login request error:', error);
        setLoginError('An error occurred. Please try again.');
      });
  };  return (
//container Start
    <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}
      showsVerticalScrollIndicator={false}>
      <ImageBackground source={require('./assets/Amoud.jpg')}
        style={[styles.logocontainer, { height: Dimensions.get('window').height / 2.5, }]} >
          <Image style={styles.logo} source={require('./assets/somPlant.png')} >
        </Image>
        <Text style={styles.SloganText}> Your onestop plant provider  </Text>
      </ImageBackground>
     {/* ButtonView */}
      <View style={styles.ButtomView}>
      <View style ={{padding:40}}>
        <Text style={{color:"#007815", fontSize:20}}> Welcome  </Text>
        <Text>
         Don`t have an ccount
         <Text style={{color:'red', fontStyle:'italic'}} onPress={() => navigation.navigate('Register')} >
        {'    '}
        Register Now
        </Text>
         </Text>
         {/* form input View
          <View style = {{marginTop:50}}>
            <Item floatingLabel style = {{borderColor: '007815', marginTop:20}} >
        <label> email </label>
        <Input value = "amoudUniversity" keyboardType = "emial-address"/>
        <Icon name ="checkmark" style={{color:'#007815'}}/>
          </Item>
           <Item floatingLabel style = {{borderColor: '007815', marginTop:20}} >
        <label> Password </label>
        <Input value = "*********" />
        <Icon name ="eye" style={{color:'#007815'}}/>
          </Item>
          </View>
          */}
        <View style = {{marginTop:50}}>
        </View>
          <View>
           <TextInput style = {styles.txtInput}placeholder="Please  type your Email"
           onChangeText={setUserName}
           value={UserName} />
           <TextInput style = {styles.txtInput}placeholder="Please  type your password"
           secureTextEntry
           onChangeText={setPassword}
           value={Password}/>
           {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
    <TouchableOpacity
      style={styles.button}
      onPress={handleLogin} >
      <Text style={{ color: "#fff", fontWeight: 'bold' }}>Submit </Text>
    </TouchableOpacity>
          </View>
          <View style = {styles.ForgotPass}>
          <View style= {{flex:1, marginLeft:-5}}>
            <Text> Forgot password</Text>
            </View>
          </View>
    </View>
      </View>
    </ScrollView>
    //container end
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    maxWidth: 150,
    marginLeft:150,
    marginTop:150,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 5,
  },
  ForgotPass:{
    height:50,
    margin:20,
    flexDirection: 'row',
    color: 'black',
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
  txtInput: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    color: 'green',
    borderRadius: 50,
    alignItems:"center",
    justifyContent:"center"
  },
  ButtomView:{
    flex: 1.5,
    backgroundColor:'#FFFFFF',
    bottom:50,
    borderTopStartRadius:60,
    borderTopEndRadius:60,
    marginBottom:60,
  },
  SloganText: {
    fontSize: 10,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
  },
logo: {
  height: 80,
  width: 80,
  marginTop:50
},
logocontainer: {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center'
}
});
export default LoginScreen;
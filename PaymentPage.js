// PaymentPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,
    ScrollView, ImageBackground,Dimensions,Image} from 'react-native';
const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const handlePayment = () => {
    // Process payment here
    // Make sure to validate input before processing
    alert('Payment processing...');
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}
    showsVerticalScrollIndicator={false}>
      <ImageBackground source={require('./assets/Amoud.jpg')}
        style={[styles.logocontainer, { height: Dimensions.get('window').height / 2.5, }]} >
          <Image style={styles.logo} source={require('./assets/somPlant.png')} >
        </Image>
        <Text style={styles.SloganText}> Your onestop plant provider  </Text>
      </ImageBackground>
      <View style={styles.ButtomView}>
      <View style ={{padding:40}} >
        <Text style={{color:"#007815", fontSize:20}}> Payment Details</Text>
        <Text>
         secure Chechout
         <Text style={{color:'red', fontStyle:'italic'}}>
        {'    '}
        enter Your  car info
        </Text>
         </Text>
      <View style = {{marginTop:50, marginleft:10, marginRight:10}}>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="numeric"
        secureTextEntry
        value={cvv}
        onChangeText={setCvv}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Holder Name"
        value={cardHolderName}
        onChangeText={setCardHolderName}
      />
      <TextInput
        style={styles.input}
        placeholder="Billing Address"
        multiline
        value={billingAddress}
        onChangeText={setBillingAddress}
      />
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Proceed</Text>
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
export default PaymentPage;
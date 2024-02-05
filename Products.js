import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';

const products = [
  { id: '1', name: 'Product 1', price: '$10', image: require('./assets/plant1.png'),description:
  'Introducing our exquisite botanical collection! Elevate your space with our lush, vibrant plants. Experience the refreshing allure of verdant foliage, graceful ferns, and blooming flowers. Our assortment features a captivating array of botanical wonders, from resilient succulents to delicate orchids. Create a serene oasis in your home or office, infusing natural beauty into every corner. Embrace natures elegance with our handpicked selection of botanical treasures. Nurture your green thumb with these enchanting botanical companions that bring tranquility and a touch of the outdoors indoors. Enhance your surroundings with the timeless allure of plants.', },
  { id: '2', name: 'Product 2', price: '$20', image: require('./assets/plant2.png'),description:
  'Introducing our exquisite botanical collection! Elevate your space with our lush, vibrant plants. Experience the refreshing allure of verdant foliage, graceful ferns, and blooming flowers. Our assortment features a captivating array of botanical wonders, from resilient succulents to delicate orchids. Create a serene oasis in your home or office, infusing natural beauty into every corner. Embrace natures elegance with our handpicked selection of botanical treasures. Nurture your green thumb with these enchanting botanical companions that bring tranquility and a touch of the outdoors indoors. Enhance your surroundings with the timeless allure of plants.', },
  { id: '3', name: 'Product 3', price: '$10', image: require('./assets/plant3.png'),description:
  'Introducing our exquisite botanical collection! Elevate your space with our lush, vibrant plants. Experience the refreshing allure of verdant foliage, graceful ferns, and blooming flowers. Our assortment features a captivating array of botanical wonders, from resilient succulents to delicate orchids. Create a serene oasis in your home or office, infusing natural beauty into every corner. Embrace natures elegance with our handpicked selection of botanical treasures. Nurture your green thumb with these enchanting botanical companions that bring tranquility and a touch of the outdoors indoors. Enhance your surroundings with the timeless allure of plants.', },
  { id: '4', name: 'Product 4', price: '$20', image: require('./assets/plant4.png'),description:
  'Introducing our exquisite botanical collection! Elevate your space with our lush, vibrant plants. Experience the refreshing allure of verdant foliage, graceful ferns, and blooming flowers. Our assortment features a captivating array of botanical wonders, from resilient succulents to delicate orchids. Create a serene oasis in your home or office, infusing natural beauty into every corner. Embrace natures elegance with our handpicked selection of botanical treasures. Nurture your green thumb with these enchanting botanical companions that bring tranquility and a touch of the outdoors indoors. Enhance your surroundings with the timeless allure of plants.', },
  // Add more products as needed
];

const Stack = createStackNavigator();

const Products = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Button
        title="Checkout"
        onPress={() => navigation.navigate('Details', { product: item })}
      />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    color: '#888888',
  },
});

export default Products;
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Matrimonial App!</Text>
      <Button title="View Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Start Chat" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

export default HomeScreen;

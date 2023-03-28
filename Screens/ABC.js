import React from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';

export default function ABC() {
  const phoneNumber = '1234567890';

  const handlePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <Button title="Call" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

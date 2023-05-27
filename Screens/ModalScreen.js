import { StyleSheet, Text, View, Modal, Animated } from 'react-native';
import React, { useRef, useEffect } from 'react';

const ModalScreen = () => {
  const slideAnimation = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Normal Screen</Text>
      <Modal transparent={true} visible={true}>
        <View style={styles.modalContainer}>
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ translateX: slideAnimation }] },
            ]}
          >
            <Text>Modal Screen</Text>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 100,
    borderRadius: 10,
  },
});

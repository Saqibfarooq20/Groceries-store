import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';

const BlueBtn = ({ name, color, icon, onPress }) => {
  return (
    <View style={{ alignItems: 'center' }}>

    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
      >
      <View style={styles.content}>
        {icon && icon.position === 'left' && (
            <Image
            source={icon.source}
            style={[styles.icon, { width: icon.size, height: icon.size, marginRight: 8 }]}
            resizeMode="contain"
          />
        )}

        <Text style={styles.text}>{name}</Text>

        {icon && icon.position === 'right' && (
            <Image
            source={icon.source}
            style={[styles.icon, { width: icon.size, height: icon.size, marginLeft: 8 }]}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableOpacity>
        </View>
  );
};

export default BlueBtn;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginVertical: 10,
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    tintColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";

const addElipse = (str, limit) => {
  return str.length > limit ? str.substring(0, limit) + '....' : str;
};

export default function ItemCard({ item }) {
  const rating = item.rating;
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  let halfStar = 0;
  if (decimal > 0 && decimal <= 0.5) {
    halfStar = 1;
  } else if (decimal > 0.5) {
    halfStar = 2;
  }

  const fullStarIcons = [];
  for (let i = 0; i < fullStars; i++) {
    fullStarIcons.push(<Ionicons key={i} name="star" size={20} color="gold" />);
  }

  let halfStarIcon = null;
  if (halfStar === 1) {
    halfStarIcon = <Ionicons name="star-half" size={20} color="gold" />;
  } else if (halfStar === 2) {
    halfStarIcon = <Ionicons name="star" size={20} color="gold" />;
  }

  const emptyStarIcons = [];
  for (let i = 0; i < 5 - fullStars - halfStar; i++) {
    emptyStarIcons.push(<Ionicons key={i} name="star-outline" size={20} color="gold" />);
  }

  return (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.item_image} />
      <View>
        <View style={styles.rating}>
          {fullStarIcons}
          {halfStarIcon}
          {emptyStarIcons}
        </View>
        <View style={{ width: '100%' }}>
          <Text style={styles.desc}>{addElipse(item.description, 20)}</Text>
          <Text style={styles.title}>{addElipse(item.title, 35)}</Text>
        </View>
        <View>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    width: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  item_image: {
    width: 200,
    height: 200,
    marginBottom: 5
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 5
  },
  desc: {
    fontSize: 14,
    fontWeight: 'bold',
    opacity: .6,
    marginBottom: 5,
    marginLeft: 7
  },
  title_view: {
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    height: 60,
    marginLeft: 7
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'red',
    marginLeft: 15

  }

});

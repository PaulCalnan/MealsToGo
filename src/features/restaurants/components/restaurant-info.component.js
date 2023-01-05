import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "some Restaurant",
    icon,
    photos = "https://img.freepik.com/premium-vector/restaurant-outside-design_24908-8058.jpg?w=2000",
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return <Text>{name}</Text>;
};

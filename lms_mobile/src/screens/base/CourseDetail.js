import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import React, { useState } from 'react'
import { Avatar1 } from '../../../assets/Image'
import AntDesign from "react-native-vector-icons/AntDesign"
import BottomScreenNavigation from '../partials/BottomScreenNavigation'

const CourseDetail = ({ route }) => {
  const { course_slug } = route.params
  console.log(course_slug)
  return (
    <View>
      <Text>Course Detail Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default CourseDetail
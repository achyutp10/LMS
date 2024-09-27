import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import React, { useState } from 'react'
import { Avatar1 } from '../../../assets/Image'
import AntDesign from "react-native-vector-icons/AntDesign"
import BottomScreenNavigation from '../partials/BottomScreenNavigation'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const [trendingCourses, setTrendingCourses] = useState([1, 2, 3, 4, 5])
  const navigation = useNavigation();
  return (
    <View className="bg-white flex-1 px-3">
      <ScrollView vertical showVerticalScrollIndicator={false} className="flex-1">
        <View className="bg-[#280349] p-2 rounded-[8px] mb-3">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Image source={Avatar1} className="h-[40px] w-[40px] rounded-full" />
              <View>
                <Text className="text-[15px] text-white font-normal">Hello,👋</Text>
                <Text className="text-[17px] text-white font-semibold">Achyut Parajuli,👋</Text>
              </View>
            </View>
            <View className="flex-row items-center gap-2">
              <TouchableOpacity className="h-[30px] w-[30px] bg-white rounded-full flex items-center justify-center mx-auto">
                <FontAwesome5 name="shopping-cart" color={"#280349"} size={20} />
              </TouchableOpacity>
              <TouchableOpacity className="h-[30px] w-[30px] bg-white rounded-full flex items-center justify-center mx-auto">
                <FontAwesome5 name="bell" color={"#280349"} size={20} />
              </TouchableOpacity>
              <TouchableOpacity className="h-[30px] w-[30px] bg-[#fe3535] rounded-full flex items-center justify-center mx-auto">
                <FontAwesome5 name="power-off" color={"#"} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-between p-2 bg-[#280e4935] rounded-full">
          <TextInput placeholder='Search Courses...' />
          <TouchableOpacity className="mr-[10px]">
            <FontAwesome5 name="search" color={"#280349"} size={15} />
          </TouchableOpacity>
        </View>

        <View className="bg-[#280e4935] p-2 rounded-[8px] mt-3 mb-3">
          <View className='flex-row gap-2 items-center justify-between mb-3'>
            <Text className="text-[17px] font-semibold mb-5">Trending Courses</Text>
            <View className='flex-row gap-2 items-center'>
              <Text className="text-[15px] font-normal mb-5">See All</Text>
              <FontAwesome5 name="arrow-right" color={"#280349"} size={15} />
            </View>
          </View>

          <ScrollView horizontal showHorizontalScrollIndicator={false}>
            {trendingCourses?.map((t, index) => (
              <View className="bg-white w-[300px] p-3 mr-2 rounded-md" key={index}>
                <Image source={Avatar1} className="h-[200px] w-full rounded-md object-cover" />
                <View>
                  <Text className="text-[20px] text-[#280e49] font-semibold mt-2">Programming Course</Text>
                  <Text className="text-[15px] text-[#280e49] font-normal mt-1">Achyut Parajuli</Text>
                  <View className="flex-row items-center gap-1 mt-1">
                    <Text className="text-[15px] text-[#280e49] font-normal mt-1">4/5</Text>
                    <View className="flex-row items-center gap-1 mt-1">
                      <AntDesign name="star" color={"#dba100"} size={15} />
                      <AntDesign name="star" color={"#dba100"} size={15} />
                      <AntDesign name="star" color={"#dba100"} size={15} />
                      <AntDesign name="star" color={"#dba100"} size={15} />
                    </View>
                    <Text className="text-[15px] text-[#280e49] font-normal mt-1">2 Reviews</Text>
                  </View>
                  <View className="flex-row items-center justify-between">
                    <Text className="text-[22px] font-bold mt-3">$ 29.99</Text>
                    <View className="flex-row items-center gap-2">
                      <TouchableOpacity onPress={() => navigation.navigate("CourseDetail", { course_slug: index })} className="bg-[#280e49] rounded-md w-30 flex items-center justify-center p-2">
                        <Text className="text-white">View Course</Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="bg-[#280e49] rounded-md w-30 flex items-center justify-center p-2">
                        <FontAwesome5 name="shopping-cart" color={"#fff"} size={15} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}


          </ScrollView>

        </View>
        <View className="bg-[#280e4935] p-2 rounded-[8px] mt-3 mb-3">
          <View className='flex-row gap-2 items-center justify-between mb-3'>
            <Text className="text-[17px] font-semibold mb-5">Popular Courses</Text>
            <View className='flex-row gap-2 items-center'>
              <Text className="text-[15px] font-normal mb-5">See All</Text>
              <FontAwesome5 name="arrow-right" color={"#280349"} size={15} />
            </View>
          </View>

          <ScrollView horizontal showHorizontalScrollIndicator={false}>
            {trendingCourses?.map((t, index) => (
              <View className="bg-white w-[300px] p-3 mr-2 rounded-md" key={index}>
                <Image source={Avatar1} className="h-[200px] w-full rounded-md object-cover" />
                <View>
                  <Text className="text-[20px] text-[#280e49] font-semibold mt-2">Programming Course</Text>
                  <Text className="text-[15px] text-[#280e49] font-normal mt-1">Achyut Parajuli</Text>
                  <View className="flex-row items-center gap-1 mt-1">
                    <Text className="text-[15px] text-[#280e49] font-normal mt-1">4/5</Text>
                    <View className="flex-row items-center gap-1 mt-1">
                      <AntDesign name="star" color={"#dba100"} size={15} />
                      <AntDesign name="star" color={"#dba100"} size={15} />
                      <AntDesign name="star" color={"#dba100"} size={15} />
                      <AntDesign name="star" color={"#dba100"} size={15} />
                    </View>
                    <Text className="text-[15px] text-[#280e49] font-normal mt-1">2 Reviews</Text>
                  </View>
                  <View className="flex-row items-center justify-between">
                    <Text className="text-[22px] font-bold mt-3">$ 29.99</Text>
                    <View className="flex-row items-center gap-2">
                      <TouchableOpacity onPress={() => navigation.navigate("CourseDetail")} className="bg-[#280e49] rounded-md w-30 flex items-center justify-center p-2">
                        <Text className="text-white">View Course</Text>
                      </TouchableOpacity>
                      <TouchableOpacity className="bg-[#280e49] rounded-md w-30 flex items-center justify-center p-2">
                        <FontAwesome5 name="shopping-cart" color={"#fff"} size={15} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}


          </ScrollView>

        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <BottomScreenNavigation />

    </View >
  )
}

const styles = StyleSheet.create({})
export default Home 
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View className="h-screen w-screen items-center justify-start bg-[#ffe5b4af] p-10 pt-[30%] gap-10">
      <View className="w-full h-1/3 flex-wrap">
        <View className="w-1/2 h-1/2 p-2">
          <View className="h-full w-full rounded-lg bg-white shadow-xl p-3">
            <Text className="text-3xl font-bold">Today</Text>
            <Text className="text-5xl absolute right-5 bottom-5">0</Text>
          </View>
        </View>
        <View className="w-1/2 h-1/2 p-2">
          <View className="h-full w-full rounded-lg bg-white shadow-xl p-3">
            <Text className="text-3xl font-bold">Completed</Text>
            <Text className="text-5xl absolute right-5 bottom-5">0</Text>
          </View>
        </View>
        <View className="w-1/2 h-1/2 p-2">
          <View className="h-full w-full rounded-lg bg-white shadow-xl p-3">
            <Text className="text-3xl font-bold">Scheduled</Text>
            <Text className="text-5xl absolute right-5 bottom-5">0</Text>
          </View>
        </View>
        <View className="w-1/2 h-1/2 p-2">
          <View className="h-full w-full rounded-lg bg-white shadow-xl p-3 relative">
            <Text className="text-3xl font-bold">Cancelled</Text>
            <Text className="text-5xl absolute right-5 bottom-5">0</Text>
          </View>
        </View>
      </View>
      <View className="w-full h-1/2 gap-10">
        <View className="w-full h-fit flex flex-row justify-between items-center">
          <Text className="text-4xl font-bold">My Lists</Text>
          <Text className="text-3xl font-bold text-orange-600">Edit</Text>
        </View>
        <View className="w-full h-3/4 flex flex-row justify-between items-center bg-white rounded-2xl shadow-xl">
          {/* <Text className="text-4xl font-bold">My Lists</Text>
          <Text className="text-3xl font-bold text-orange-600">Edit</Text> */}
        </View>
      </View>
      <View className="w-full h-[10%] flex-row items-center gap-5">
        <TouchableOpacity className="bg-orange-500 h-[80%] aspect-square rounded-full justify-center items-center shadow-md">
          <Text className="font-bold text-white text-5xl">+</Text>
        </TouchableOpacity>
        <Text className="text-3xl font-bold text-orange-500">Add Task</Text>
      </View>
    </View>
  );
};

export default Home;

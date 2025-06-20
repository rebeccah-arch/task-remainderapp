import { View, StatusBar, Image, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false}
        translucent={false}
      />
      <View className="h-screen w-full flex flex-col items-center gap-5 justify-start bg-[#b4f6ff] py-32">
        <View className="h-[300px] w-[90%] items-start justify-center bg-white shadow-lg p-10 rounded-xl">
          <Image
            source={require("@/assets/images/task-photo.png")}
            height={1024}
            width={1024}
            className="w-full h-full object-cover"
          />
        </View>
        <View className="h-auto w-[90%] items-start justify-center mt-10 rounded-xl">
          <Text className="text-4xl font-bold text-gray-800">
            TimeKeeper will help you to save your time
          </Text>
          <Text className="text-2xl font-bold text-gray-800 mt-10">
            A task reminder app designed to help you to manage all your tasks in
            time. TimeKeeper brings you all the task management features you
            need to succeed.
          </Text>
        </View>
        <View className="w-full absolute bottom-[10%] justify-center items-center">
          <Link href="/Home" asChild>
            <TouchableOpacity className="bg-white w-[80%] margin-x-auto p-5 justify-center items-center rounded-full">
              <Text className="font-bold text-2xl">Get Started</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </>
  );
}

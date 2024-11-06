import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, TextInput, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Login = () => {
  return (
    <SafeAreaView className="flex">
      <View className="flex-1 flex items-center justify-center min-h-screen min-w-screen py-16 lg:py-10 bg-slate-50 ">
        <View className="relative">
          <View className=" z-50 !w-full lg:mx-auto lg:w-[500px] card shadow-lg border-none shadow-slate-200 relative">
            <View className="!px-10 !py-12 card-body w-96">
              <View className="mt-8 text-center">
                <Text className="mb-1 text-custom-500 font-bold text-lg">
                  Welcome Back !
                </Text>
                <Text className="text-slate-500 dark:text-zink-200 font-medium">
                  Sign in to continue to Tailwick.
                </Text>
              </View>
              <View className="mt-10 form">
                <View className="mb-3">
                  <Text className="inline-block mb-2 text-base font-medium">
                    UserName/ Email ID
                  </Text>
                  <TextInput
                    className="form-input border-spacing-3 border-slate-200  focus:outline-none focus:border-custom-500 disabled:bg-slate-100  disabled:border-slate-300   disabled:text-slate-500   placeholder:text-slate-400 "
                    placeholder="Enter your username or email"
                  />
                </View>
                <View className="mb-3">
                  <Text className="inline-block mb-2 text-base font-medium">
                    Password
                  </Text>
                  <TextInput
                    className="form-input border-slate-200  focus:outline-none focus:border-custom-500 disabled:bg-slate-100  disabled:border-slate-300   disabled:text-slate-500   placeholder:text-slate-400 "
                    placeholder="Enter your username or email"
                  />
                </View>
                <View className="mt-10">
                  <Link asChild href={"/(tabs)/home"}>
                    <Pressable
                      className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                      // onClick={(e: any) => {
                      //   e.preventDefault();
                      //   socialResponse("facebook");
                      // }}
                      onPress={() => {
                        //navigation.navigate("tabs");
                      }}
                    >
                      <Text className="text-slate-50  font-medium text-center">
                        Iniciar Session
                      </Text>
                    </Pressable>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

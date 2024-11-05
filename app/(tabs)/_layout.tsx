import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Slot, Tabs } from "expo-router";
import { Platform, Pressable, View } from "react-native";
import { Drawer } from "expo-router/drawer";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Header } from "@/src/components/Header";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  if (Platform.OS === "web") {
    return (
      <View className="flex-1">
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer>
            <Drawer.Screen
              name="home" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: "Home",
                title: "overview",
                // header(props) {
                //   return (
                //     <View>

                //     </View>
                //   );
                // },
                headerRight: () => (
                  <Link className="px-10" href="/" asChild>
                    <Pressable>
                      {({ pressed }) => (
                        <TabBarIcon
                          name="arrow-circle-right"
                          color={Colors[colorScheme ?? "light"].text}
                        ></TabBarIcon>
                      )}
                    </Pressable>
                  </Link>
                ),
              }}
            />
            <Drawer.Screen
              name="two" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: "User",
                title: "overview",
              }}
            />
          </Drawer>
        </GestureHandlerRootView>
        {/* <Slot /> */}
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}

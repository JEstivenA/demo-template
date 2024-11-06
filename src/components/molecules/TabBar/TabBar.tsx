import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import { SYSTEM_COLORS } from "@/src/utils/colors";

export const TabBar = ({ state, descriptors, navigation }: any) => {
  const selectedColor = SYSTEM_COLORS.info.blue400;
  const unselectedColor = SYSTEM_COLORS.neutral.neutral300;

  const icons = {
    home: (props: any) => (
      <MaterialCommunityIcons
        name="clipboard-clock-outline"
        size={26}
        color={unselectedColor}
        {...props}
      />
    ),
    two: (props: any) => (
      <Fontisto name="bus" size={26} color={unselectedColor} {...props} />
    ),
    trePage: (props: any) => (
      <Entypo
        name="back-in-time"
        size={26}
        color={unselectedColor}
        {...props}
      />
    ),
  };

  return (
    <View style={style.tabbar}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        if (route.name.includes("(web)")) return null;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={style.tabbarItem}
          >
            {icons[route.name]({
              currentColor: isFocused ? selectedColor : unselectedColor,
              color: isFocused ? selectedColor : unselectedColor,
            })}
            <Text
              style={{ color: isFocused ? selectedColor : unselectedColor }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 0.3,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

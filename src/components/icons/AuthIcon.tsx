import { View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

export const AuthIcon = () => {
  return (
    <>
      <View className="absolute z-0 hidden opacity-50 !ltr:-left-16 !rtl:-right-16 !-top-10">
        <Svg width="125" height="316" viewBox="0 0 125 316">
          <G>
            <Path
              d="m23.4 221.8l-1.3-3.1v-315.3l1.3 3.1z"
              fill="#B0BEC5"
              fillOpacity="0.5"
            />
            <Path d="M31.2 229.6L29.9 226.5V-94.8L31.2 -91.7Z" fill="#B0BEC5" />
            <Path
              d="M39 237.4L37.7 234.3V-94.8L39 -91.7Z"
              fill="#90A4AE"
              fillOpacity="0.5"
            />
            <Path
              d="M46.8 245.2L45.5 242.1V-95.6L46.8 -92.5Z"
              fill="#90A4AE"
              fillOpacity="0.75"
            />
            <Path d="M54.6 253.1L53.3 250V-95.6L54.6 -92.5Z" fill="#90A4AE" />
            <Path
              d="M62.4 260.9L61.2 257.8V-95.6L62.4 -92.5Z"
              fill="#78909C"
              fillOpacity="0.5"
            />
            <Path
              d="M70.3 268.7L69 265.6V-95.6L70.3 -92.5Z"
              fill="#78909C"
              fillOpacity="0.75"
            />
            <Path d="M78.1 276.5L76.8 273.4V-95.6L78.1 -92.5Z" fill="#78909C" />
            <Path
              d="M85.9 284.3L84.6 281.2V-95.6L85.9 -92.5Z"
              fill="#607D8B"
              fillOpacity="0.5"
            />
            <Path
              d="M93.7 292.1L92.4 289V-95.6L93.7 -92.5Z"
              fill="#607D8B"
              fillOpacity="0.75"
            />
            <Path
              d="M101.5 299.9L100.2 296.8V-95.6L101.5 -92.5Z"
              fill="#607D8B"
            />
            <Path
              d="M109.3 307.8L108 304.7V-95.6L109.3 -92.5Z"
              fill="#455A64"
              fillOpacity="0.5"
            />
          </G>
        </Svg>
      </View>

      <View className="w-full z-0 h-full absolute hidden !-rotate-180 !opacity-50 !ltr:-right-16 !rtl:-left-16 !-bottom-1 !self-end !justify-end">
        <Svg
          width="125"
          height="316"
          viewBox="0 0 125 316"
          style={{ transform: [{ rotate: "180deg" }] }}
        >
          <G>
            <Path
              d="m23.4 221.8l-1.3-3.1v-315.3l1.3 3.1z"
              fill="#B0BEC5"
              fillOpacity="0.5"
            />
            <Path d="M31.2 229.6L29.9 226.5V-94.8L31.2 -91.7Z" fill="#B0BEC5" />
            <Path
              d="M39 237.4L37.7 234.3V-94.8L39 -91.7Z"
              fill="#90A4AE"
              fillOpacity="0.5"
            />
            <Path
              d="M46.8 245.2L45.5 242.1V-95.6L46.8 -92.5Z"
              fill="#90A4AE"
              fillOpacity="0.75"
            />
            <Path d="M54.6 253.1L53.3 250V-95.6L54.6 -92.5Z" fill="#90A4AE" />
            <Path
              d="M62.4 260.9L61.2 257.8V-95.6L62.4 -92.5Z"
              fill="#78909C"
              fillOpacity="0.5"
            />
            <Path
              d="M70.3 268.7L69 265.6V-95.6L70.3 -92.5Z"
              fill="#78909C"
              fillOpacity="0.75"
            />
            <Path d="M78.1 276.5L76.8 273.4V-95.6L78.1 -92.5Z" fill="#78909C" />
            <Path
              d="M85.9 284.3L84.6 281.2V-95.6L85.9 -92.5Z"
              fill="#607D8B"
              fillOpacity="0.5"
            />
            <Path
              d="M93.7 292.1L92.4 289V-95.6L93.7 -92.5Z"
              fill="#607D8B"
              fillOpacity="0.75"
            />
            <Path
              d="M101.5 299.9L100.2 296.8V-95.6L101.5 -92.5Z"
              fill="#607D8B"
            />
            <Path
              d="M109.3 307.8L108 304.7V-95.6L109.3 -92.5Z"
              fill="#455A64"
              fillOpacity="0.5"
            />
          </G>
        </Svg>
      </View>
    </>
  );
};

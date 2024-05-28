import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="tags" color={color} size={size} />;
            }
            return <FontAwesome name="tag" color={color} size={size} />;
          },
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="gear" color={color} size={size} />;
            }
            return <FontAwesome name="gear" color={color} size={size} />;
          },
        }}
      />
    </Tabs>
  );
}

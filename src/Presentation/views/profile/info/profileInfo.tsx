import React from "react";
import { View, Text, Button } from "react-native";
import useViewModel from "./viewModel";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";

interface Props
  extends StackScreenProps<RootStackParamList, "ProfileInfoScreens"> {}

//usar la palabra screen como convencion
export const ProfileUserScreens = ({ navigation, route }: Props) => {
  const { removeSession } = useViewModel();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Cerrar session"
        onPress={() => {
          removeSession();
          navigation.navigate("HomeScreen");
        }}
      />
    </View>
  );
};

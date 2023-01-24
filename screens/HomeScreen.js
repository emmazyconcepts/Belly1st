import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserCircleIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>
        <View>
          <UserCircleIcon size={40} color="#EA3C12" />

          {/* <Image
            className=" h-10 w-10 bg-gray-400 rounded-full"
            source={{
              url: "https://img.icons8.com/external-gradak-royyan-wijaya/24/null/external-circle-gradak-user-gradak-royyan-wijaya-3.png",
            }}
          /> */}
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

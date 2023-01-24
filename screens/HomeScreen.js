import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserCircleIcon, WalletIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <View className=" flex-row pb-3 items-center mx-4 space-x-2">
        <UserCircleIcon size={40} color="#EA3C12" />

        {/* <Image
            className=" h-10 w-10 bg-gray-400 rounded-full"
            source={{
              url: "https://img.icons8.com/external-gradak-royyan-wijaya/24/null/external-circle-gradak-user-gradak-royyan-wijaya-3.png",
            }}
          /> */}
        <View className=" flex-1">
          <Text className=" font-bold text-gray-400 text-xs">Good Morning</Text>
          <Text className=" font-bold text-xl ">Eke Emmanuel</Text>
        </View>
        <View>
          <Text className=" font-bold text-gray-400 text-xs">
            {" "}
            <WalletIcon color="#EA3C12" /> Wallet Balance
          </Text>
          <Text>#12,000</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

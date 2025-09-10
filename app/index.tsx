import { Image, Text, View } from "react-native";

import { images } from "@/assets/images";

const Home = () => {
  return (
    <View className="flex size-full flex-col items-center bg-white">
      <Image source={images["logo"]} className="aspect-video max-h-40" />
      <Text className="text-xl font-bold text-orange-600">
        Hello World, Its AJ1732
      </Text>
    </View>
  );
};
export default Home;

import { Link } from "expo-router";
import { View } from "react-native";

import { NAVLNKS } from "@/constants/links";

export default function Navigation() {
  return (
    <View className="m-4 mb-8 flex flex-row items-center justify-between rounded-[2rem] border border-neutral-200 bg-neutral-100 p-4">
      {NAVLNKS.map(({ label, link }) => (
        <Link
          key={label}
          href={link}
          className="w-fit px-2 font-bold capitalize"
        >
          {label}
        </Link>
      ))}
    </View>
  );
}

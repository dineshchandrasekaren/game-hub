import {
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
  FaAppStoreIos,
  FaPlaystation,
  FaWindows,
} from "react-icons/fa6";
import { BsNintendoSwitch } from "react-icons/bs";
import type { IconType } from "react-icons";

const PlatformIcon = ({
  name,
  size = 20,
  color = "gray",
}: {
  name: string;
  size?: number;
  color?: string;
}) => {
  const icons: Record<string, IconType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: FaAppStoreIos,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: BsNintendoSwitch,
  };
  const Icon = icons[name];
  return Icon ? <Icon size={size} color={color} /> : null;
};

export default PlatformIcon;

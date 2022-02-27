import { useEffect } from "react";
import { Video, StandardEnvironment } from "spacesvr";
import TransparentFloor from "../ideas/TransparentFloor";
import CloudySky from "../ideas/CloudySky";
import AnimatedSpeaker1 from "../components/AnimatedSpeaker1";
import AnimatedSpeaker2 from "../components/AnimatedSpeaker2";
import useColorStore from "../stores/colorStore";

export default function Starter() {
  const colorStore = useColorStore();
  const colors = ["orange", "blue", "red", "purple", "green"];

  useEffect(() => {
    console.log(colorStore.color);
    setTimeout(() => {
      if (colorStore.color < 4) {
        colorStore.setColor(colorStore.color + 1);
      } else {
        colorStore.setColor(0);
      }
    }, 10000);
  }, [colorStore.color]);

  return (
    <StandardEnvironment>
      <ambientLight />
      <AnimatedSpeaker1 />
      <AnimatedSpeaker2 />
      <Video src="/placeholderVid.mp4" size={5} muted position={[0.5, 2, -9]} />

      <CloudySky color={colors[colorStore.color]} />
      <TransparentFloor opacity={0.7} />
    </StandardEnvironment>
  );
}

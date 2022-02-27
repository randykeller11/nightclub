import { Spinning, Floating, StandardEnvironment } from "spacesvr";
import TransparentFloor from "../ideas/TransparentFloor";
import CloudySky from "../ideas/CloudySky";
import Builder12 from "../ideas/Builder12";
import AnimatedSpeaker1 from "../components/AnimatedSpeaker1";
import AnimatedSpeaker2 from "../components/AnimatedSpeaker2";

export default function Starter() {
  return (
    <StandardEnvironment>
      <ambientLight />
      <AnimatedSpeaker1 />
      <AnimatedSpeaker2 />

      <CloudySky color="lightblue" />
      <TransparentFloor opacity={0.7} />
    </StandardEnvironment>
  );
}

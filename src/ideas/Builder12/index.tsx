import { useProximity } from "./utils/proximity";
import { useRef } from "react";
import { Group } from "three";
import BuilderModel2 from "./models/Builder2";
import { GroupProps } from "@react-three/fiber";
import { Dialogue, VisualDialogue } from "./layers/communication";

// sleeping boi
export default function Builder(props: GroupProps) {
  const group = useRef<Group>();

  const proximity = useProximity(group);
  const dialogue: Dialogue = [
    {
      key: "init",
      text: "i stayed up 24 hours building this world... you got any sleeping masks on you?",
    },
  ];

  return (
    <group name="builder" {...props}>
      <group rotation-y={0}>
        <group ref={group}>
          <BuilderModel2 animation={proximity.idle ? "lay" : "idle"} />
        </group>
        {!proximity.idle && (
          <group position={[-0.05, -0.31, -0.4]}>
            <VisualDialogue
              enabled={proximity.speaking}
              position={[-0.4, 1.1, -0.45]}
              dialogue={dialogue}
            />
          </group>
        )}
      </group>
    </group>
  );
}

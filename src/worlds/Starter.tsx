import { Spinning, Floating, StandardEnvironment } from "spacesvr";
import TransparentFloor from "../ideas/TransparentFloor";
import CloudySky from "../ideas/CloudySky";
import Builder12 from "../ideas/Builder12";

export default function Starter() {
  return (
    <StandardEnvironment>
      <ambientLight />
      <group position={[0, 0, -4]}>
        <Floating>
          <Spinning xSpeed={0.2} ySpeed={0.4} zSpeed={0.3}>
            <mesh>
              <torusKnotBufferGeometry args={[1, 0.2]} />
              <meshStandardMaterial color="blue" />
            </mesh>
          </Spinning>
        </Floating>
      </group>
      <Builder12 />
      <CloudySky color="white" />
      <TransparentFloor opacity={0.7} />
    </StandardEnvironment>
  );
}

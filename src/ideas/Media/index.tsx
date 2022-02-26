import { Video, Image } from "spacesvr";
import * as THREE from "three";
import Collidable from "./modifier/Collidable";
import { GroupProps } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { MeshStandardMaterial } from "three";

export type MediaProps = {
  media: string;
  framed: boolean;
  frameColor: string;
  collision: boolean;
} & GroupProps;

export default function Media(props: MediaProps) {
  const {
    media = "https://d27rt3a60hh1lx.cloudfront.net/images/turtle.jpg",
    framed = false,
    frameColor = "#111111",
    collision = false,
    ...rest
  } = props;

  const modUrl = media.toLowerCase();
  const IS_VIDEO = modUrl.endsWith(".mp4");
  const IS_IMAGE =
    modUrl.endsWith(".jpg") ||
    modUrl.endsWith(".jpeg") ||
    modUrl.endsWith(".png");

  const frameMat = useMemo(
    () => new MeshStandardMaterial({ metalness: 0.4, roughness: 0.3 }),
    []
  );
  useEffect(() => {
    frameMat.color.set(frameColor);
  }, [frameColor]);

  if (!IS_VIDEO && !IS_IMAGE) {
    console.error(
      "Framed Media :: Invalid source url, must be .mp4, .jpg, .jpeg, or .png"
    );
    return null;
  }

  return (
    <group name="media" {...rest}>
      <Collidable enabled={collision}>
        {IS_VIDEO && (
          <Video src={media} framed={framed} frameMaterial={frameMat} />
        )}
        {IS_IMAGE && (
          <Image src={media} framed={framed} frameMaterial={frameMat} />
        )}
      </Collidable>
    </group>
  );
}

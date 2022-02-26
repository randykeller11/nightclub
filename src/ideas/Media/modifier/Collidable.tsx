import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Box3, Group, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useLimiter } from "spacesvr";
import { useBox } from "@react-three/cannon";

type CollidableProps = { enabled?: boolean; children: ReactNode | ReactNode[] };

type ColliderProps = { size: Vector3 };

function Collider(props: ColliderProps) {
  const { size } = props;

  const group = useRef<Group>();

  const pos = useMemo(() => new Vector3(), []);

  const [, api] = useBox(
    () => ({ type: "Static", args: size.toArray() }),
    undefined,
    [size]
  );

  const limiter = useLimiter(50);
  useFrame(({ clock }) => {
    if (!limiter.isReady(clock) || !group.current) return;

    group.current.getWorldPosition(pos);
    api.position.copy(pos);
  });

  return <group name="collider" ref={group} />;
}

export default function Collidable(props: CollidableProps) {
  const { enabled, children } = props;

  const group = useRef<Group>();

  const [size, setSize] = useState<Vector3>();
  const [oldGraph, setOldGraph] = useState("");

  useEffect(() => {
    if (!group.current || !enabled) return;

    const bbox = new Box3().setFromObject(group.current);
    const dummy = new Vector3();
    bbox.getSize(dummy);

    if (!size || !dummy.equals(size)) setSize(dummy.clone());
  }, [children, oldGraph, group, enabled]);

  const limiter = useLimiter(2);
  useFrame(({ clock }) => {
    if (!limiter.isReady(clock) || !group.current) return;

    // check children to see if anything changes, namely any suspense resolves
    const graph: string[] = [];
    group.current.traverse((child) => graph.push(child.uuid));
    if (graph.toString() !== oldGraph) {
      setOldGraph(graph.toString());
    }
  });

  return (
    <group name="collidable">
      <group ref={group}>{children}</group>
      {enabled && size && <Collider size={size} />}
    </group>
  );
}

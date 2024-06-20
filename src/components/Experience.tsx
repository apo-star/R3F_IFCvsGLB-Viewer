import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { GlbModel } from "./GlbModel";
import { useModelType } from "../store";

const Experience = () => {
  const modelType = useModelType((state) => state.type);

  return (
    <>
      {modelType === "glb" && <GlbModel />}
      {modelType === "ifc" && <Model />}
      <ambientLight intensity={0.8} />
      <OrbitControls makeDefault />
    </>
  );
};

export default Experience;

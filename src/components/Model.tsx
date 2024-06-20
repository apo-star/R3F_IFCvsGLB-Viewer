import { useLoader } from "@react-three/fiber";
import { IFCLoader } from "web-ifc-three";
import { IFCModel } from "web-ifc-three/IFC/components/IFCModel";
import {
  acceleratedRaycast,
  computeBoundsTree,
  disposeBoundsTree,
} from "three-mesh-bvh";

const Model = () => {
  const model: IFCModel = useLoader(
    IFCLoader,
    "/sample-model.ifc",
    (loader) => {
      loader.ifcManager.setupThreeMeshBVH(
        computeBoundsTree,
        disposeBoundsTree,
        acceleratedRaycast
      );
      loader.ifcManager.setWasmPath("../../");
    }
  );

  model.name = "ifc";

  return <primitive object={model} />;
};

export default Model;

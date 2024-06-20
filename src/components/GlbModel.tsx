/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 glb-model.glb -ts 
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    result_1: THREE.Mesh;
    result_2: THREE.Mesh;
    result_3: THREE.Mesh;
    result_4: THREE.Mesh;
  };
  materials: {
    PaletteMaterial003: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
    PaletteMaterial004: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function GlbModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/glb-model.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.result_1.geometry}
          material={materials.PaletteMaterial003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.result_2.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.result_3.geometry}
          material={materials.PaletteMaterial002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.result_4.geometry}
          material={materials.PaletteMaterial004}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb-model.glb");

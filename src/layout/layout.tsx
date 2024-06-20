import { useModelType } from "../store";

export default function Layout() {
  const modelType = useModelType((state) => state.type);
  const setModelTYpe = useModelType((state) => state.set);
  const handleClick = (type: string) => {
    setModelTYpe(type);
  };
  return (
    <div className="absolute top-10 right-12 flex flex-col text-center">
      <button
        style={{
          borderColor: modelType === "glb" ? "red" : "black",
          borderWidth: modelType === "glb" ? 4 : 2,
        }}
        className="text-3xl text-black px-4 py-2 border border-black w-32 h-32 glb-btn"
        onClick={() => handleClick("glb")}
      />
      <p>GLBModel</p>
      <button
        style={{
          borderColor: modelType === "ifc" ? "red" : "black",
          borderWidth: modelType === "ifc" ? 4 : 2,
        }}
        className="text-3xl text-black px-4 py-2 border border-black w-32 h-32 ifc-btn"
        onClick={() => handleClick("ifc")}
      />
      <p>IFCModel</p>
    </div>
  );
}

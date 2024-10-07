import { Canvas } from "@react-three/fiber"

export const Box = () => {
  return (
    <div className="w-2">
      <h1 className="text-red-500">Hi</h1>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

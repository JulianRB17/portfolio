import { Environment, Lightformer } from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { easing } from 'maath';
import { Suspense, useRef } from 'react';
import { TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Animation({ mousePosition, windowDimensions, modelRef }) {
  const marbleTexture = useLoader(TextureLoader, 'textures/black_marble.jpg');
  const groupRef = useRef();
  const { scene } = useThree();
  scene.background = marbleTexture;

  const { width } = windowDimensions;

  // useFrame((state, delta) => {
  //   if (!badPerf && mousePosition) {
  //     let x = mousePosition[0];
  //     let y = mousePosition[1];
  //     easing.damp3(
  //       groupRef.current.rotation,
  //       [Math.PI / 2, 0, state.clock.elapsedTime / 10 + x / 1000],
  //       0.2,
  //       delta
  //     );

  //     easing.damp3(
  //       state.camera.position,
  //       [Math.sin(x / 10000), 1.25 + y / 100, Math.cos(x / 10000)],
  //       0.5,
  //       delta
  //     );
  //     state.camera.lookAt(0, 0, 0);
  //   }
  // });

  useFrame((state, delta) => {
    if (mousePosition && width > 400) {
      let x = mousePosition[0];
      let y = mousePosition[1];
      easing.damp3(
        groupRef.current.rotation,
        [Math.PI / 2, 0, state.clock.elapsedTime / 10 + x / 10000],
        0.2,
        delta
      );

      easing.damp3(
        state.camera.position,
        [Math.sin(x / 1000), 1.25 + y / 1000, Math.cos(x / 1000)],
        0.5,
        delta
      );
      state.camera.lookAt(0, 0, 0);
    }
    if (width < 400) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() / 10;
    }
  });

  // useFrame((state, delta) => {
  //   console.log(state.pointer.x, state.pointer.y);
  //   if (!badPerf) {
  //     easing.damp3(
  //       groupRef.current.rotation,
  //       [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x],
  //       0.2,
  //       delta
  //     );

  //     easing.damp3(
  //       state.camera.position,
  //       [
  //         Math.sin(state.pointer.x / 4) * 9,
  //         1.25 + state.pointer.y,
  //         Math.cos(state.pointer.x / 4) * 9,
  //       ],
  //       0.5,
  //       delta
  //     );
  //     state.camera.lookAt(0, 0, 0);
  //   }
  // });

  return (
    <Environment
      frames={Infinity}
      resolution={256}
      background
      blur={0.8}
      //     preset="city"
      // path="/hdri/" files="potsdamer_platz_1k.hdr"
    >
      <group ref={groupRef}>
        <Lightformer
          intensity={1}
          form="ring"
          // color="#B9E9FF"
          // color="#181e27"
          // color="#009299"
          color="#4b007a"
          rotation-y={Math.PI / 2}
          position={[-5, 2, -1]}
          scale={[10, 10, 1]}
        />

        <Lightformer
          intensity={1}
          form="ring"
          // color="#B9E9FF"
          // color="#009299"
          // color="#4b007a"
          color="#181e27"
          rotation-y={Math.PI / 2}
          position={[5, -2, 1]}
          scale={[10, 10, 1]}
        />

        {/* <mesh position={[0, 0, 0]}>
          <planeGeometry args={[10, 10]} uvFactor={new Vector2(1, 1)} />
          <meshStandardMaterial map={marbleTexture} side={DoubleSide} />
        </mesh> */}
      </group>
    </Environment>
  );
}

export default function AbstractHero({ mousePosition, windowDimensions }) {
  const modelRef = useRef();
  // const gltf = useLoader(GLTFLoader, 'models/abstract_2/scene.gltf');
  const gltf = useLoader(
    GLTFLoader,
    'models/paradox_abstract_art_of_python/scene.gltf'
  );

  return (
    <div className="abstract-hero">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 50 }}>
        <Suspense fallback={null}>
          <color args={['#525C8F']} attach={'background'} />
          {/* <mesh position={[-1, 0, 0]}>
            <boxGeometry args={[1, 1]} />
            <meshStandardMaterial color={'yellow'} />
          </mesh>
          <mesh position={[1, 0, 0]}>
            <torusGeometry args={[0.5, 0.2, 10, 50]} />
            <meshStandardMaterial color={'green'} />
          </mesh> */}
          {/* <primitive
            object={gltf.scene}
            scale={[0.03, 0.03, 0.03]}
            position={[5, 1, 0]}
            rotation={[0, 0, 2.5]}
          /> */}
          <primitive
            ref={modelRef}
            object={gltf.scene}
            scale={[1.5, 1.5, 1.5]}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />

          <Animation
            mousePosition={mousePosition}
            windowDimensions={windowDimensions}
            modelRef={modelRef}
          />
        </Suspense>
        {/* <directionalLight
          intensity={0.5}
          position={[5, -1, -1]}
          color={'#ffffff'}
        /> */}
      </Canvas>
    </div>
  );
}

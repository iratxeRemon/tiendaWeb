import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import GuitarraCanvas from "./GuitarraCanvas";
import { GuitarraModel } from "./GuitarraModel";
//

const Productos = ({ cambiarVista }) => {
    //const guitarra = useGLTF('/guitar/scene.gltf');
    //const guitarra = useGLTF('C:/Users/Iratxe/Documents/Iratxe/daw/proy/proy_web/public/guitar/scene.gltf');


    return (
        <>
        
            <button onClick={() => cambiarVista('principal')}>Volver</button>
            <div className="productos">
                <p>PRODUCTOS</p>
                {/*
                <Canvas frameloop="demand" camera={{ position: [0, 0, 30], fov: 45, near: 0.1, far: 200 }}>
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}  />
                    <primitive object={guitarra.scene} scale={2.5} position={[0, -10, 0]} />
                </Canvas>
                 */}

            <div id="canvas-container" style={{ width: "30vw", height: "40vh" }}>
                <GuitarraCanvas>
                    <GuitarraModel />
                </GuitarraCanvas>
            </div>
                 
                

                
                
            </div>
        </>
    );
};


export default Productos
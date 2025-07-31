import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedBlob = () => {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            // Slower, more subtle rotation
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.05;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <Icosahedron ref={meshRef} args={[2.5, 6]} >
            <MeshDistortMaterial
                color={new THREE.Color('#A755F7')} // Using the brand primary color for consistency
                attach="material"
                distort={0.55} // Slightly more distortion
                speed={1.5}    // Slightly slower speed
                roughness={0.1}
                metalness={0.1}
            />
        </Icosahedron>
    );
};

const FloatingParticles = ({ count = 200 }) => {
    const pointsRef = useRef<THREE.Points>(null!);

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const radius = 5;

        for (let i = 0; i < count; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = radius * Math.pow(Math.random(), 0.7);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions.set([x, y, z], i * 3);
        }
        return positions;
    }, [count]);

    useFrame(({ clock }) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
            pointsRef.current.rotation.x = clock.getElapsedTime() * 0.03;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.07}
                color="#FFFFFF"
                opacity={0.6}
                transparent
                sizeAttenuation
            />
        </points>
    );
};


const ThreeScene = () => {
    return (
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#A755F7" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFFFFF" />
            <AnimatedBlob />
            <FloatingParticles count={200} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
    );
};

export default ThreeScene;

"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const TechParticles = (props) => {
    const ref = useRef();

    // Generate particles in a large sphere surrounding the user
    const particles = useMemo(() => {
        const count = 5000; // High density for "data" feel
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Random point inside/on a sphere
            const r = 25 * Math.cbrt(Math.random()); // Cubic root for uniform distribution
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }

        return positions;
    }, []);

    // Global Mouse Tracking (Occlusion bypass)
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Normalize to -1 to 1
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((state, delta) => {
        if (!ref.current) return;

        const mouseX = mouse.current.x;
        const mouseY = mouse.current.y;

        // "Look" direction (Camera rotation simulation)
        const targetX = -mouseY * 0.4; // Pitch
        const targetY = mouseX * 0.4;  // Yaw

        // Smoothly rotate the camera
        state.camera.rotation.x += (targetX - state.camera.rotation.x) * delta * 2;
        state.camera.rotation.y += (targetY - state.camera.rotation.y) * delta * 2;

        // Ambient rotation of particle field
        ref.current.rotation.y += delta * 0.05;
        // Subtle pulsation or wobble
        ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={particles} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00ff99" // Neon/Tech Green
                    size={0.035}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                    blending={THREE.AdditiveBlending} // Glow effect
                />
            </Points>
        </group>
    );
};

const Background3D = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#1c1c22] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
                <TechParticles />
            </Canvas>
            {/* Gradient Overlay for texture */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#1c1c22]/20 to-[#1c1c22]/90" />
        </div>
    );
};

export default Background3D;

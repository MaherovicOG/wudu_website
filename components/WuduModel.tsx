"use client";

import * as THREE from "three";
import { useMemo } from "react";

interface WuduModelProps {
  config: "single" | "double";
  width: number;
  depth: number;
  height: number;
  color: string;
}

export default function WuduModel({ config, width, depth, height, color }: WuduModelProps) {
  const counterThickness = Math.max(1.2, height * 0.09);
  const basinDepth = depth * 0.62;
  const basinRadius = height * 0.22;
  const soapW = width * 0.31;
  const soapH = height * 0.31;
  const faucetHeight = Math.max(9, height * 1.0);

  const basinShape = useMemo(() => {
    const hw = width / 2;
    const hh = height / 2;
    const r = Math.min(basinRadius, hw, height);
    const shape = new THREE.Shape();
    shape.moveTo(-hw, hh);
    shape.lineTo(-hw, -hh + r);
    shape.quadraticCurveTo(-hw, -hh, -hw + r, -hh);
    shape.lineTo(hw - r, -hh);
    shape.quadraticCurveTo(hw, -hh, hw, -hh + r);
    shape.lineTo(hw, hh);
    shape.lineTo(-hw, hh);
    return shape;
  }, [width, height, basinRadius]);

  const soapShape = useMemo(() => {
    const hw = soapW / 2;
    const hh = soapH / 2;
    const r = Math.min(Math.min(soapW, soapH) * 0.4, hw, hh);
    const shape = new THREE.Shape();
    shape.moveTo(-hw + r, -hh);
    shape.lineTo(hw - r, -hh);
    shape.quadraticCurveTo(hw, -hh, hw, -hh + r);
    shape.lineTo(hw, hh - r);
    shape.quadraticCurveTo(hw, hh, hw - r, hh);
    shape.lineTo(-hw + r, hh);
    shape.quadraticCurveTo(-hw, hh, -hw, hh - r);
    shape.lineTo(-hw, -hh + r);
    shape.quadraticCurveTo(-hw, -hh, -hw + r, -hh);
    return shape;
  }, [soapW, soapH]);

  const faucetCurve = useMemo(() => {
    const hookReach = faucetHeight * 0.35;
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, faucetHeight * 0.6, 0),
      new THREE.Vector3(hookReach * 0.3, faucetHeight * 0.82, 0),
      new THREE.Vector3(hookReach * 0.78, faucetHeight * 0.96, 0),
      new THREE.Vector3(hookReach, faucetHeight * 0.88, 0),
    ]);
  }, [faucetHeight]);

  const faucetRadius = Math.max(0.55, faucetHeight * 0.07);
  const faucetZ = -depth * 0.3;

  const Faucet = ({ position }: { position: [number, number, number] }) => (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <tubeGeometry args={[faucetCurve, 32, faucetRadius, 12, false]} />
        <meshStandardMaterial color="#c29867" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, faucetRadius * 0.7, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[faucetRadius * 2, faucetRadius * 2.4, faucetRadius * 1.4, 16]} />
        <meshStandardMaterial color="#c29867" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );

  return (
    <group>
      <mesh position={[0, -counterThickness / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[width, counterThickness, depth]} />
        <meshStandardMaterial color="#a39d8b" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[0, -counterThickness - height / 2, -basinDepth / 2]} castShadow receiveShadow>
        <extrudeGeometry args={[basinShape, { depth: basinDepth, bevelEnabled: false }]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.1} />
      </mesh>
      <mesh position={[0, -counterThickness - height * 0.393, basinDepth / 2 + 0.05]} castShadow receiveShadow>
        <extrudeGeometry args={[soapShape, { depth: 0.6, bevelEnabled: false }]} />
        <meshStandardMaterial color="#f3eee2" roughness={0.7} metalness={0.1} />
      </mesh>
      {config === "double" ? (
        <>
          <Faucet position={[-width * 0.225, 0, faucetZ]} />
          <Faucet position={[width * 0.26, 0, faucetZ]} />
        </>
      ) : (
        <Faucet position={[-width * 0.225, 0, faucetZ]} />
      )}
    </group>
  );
}
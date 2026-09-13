import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Interactive Industrial 3D Scene
 * Built with Three.js featuring:
 * - Mechanical interlocking gear assemblies
 * - Industrial pressure vessel & tank with metallic banding
 * - High-pressure piping manifolds with flanges
 * - Structural steel framework
 * - Orange & metallic industrial lighting with volumetric glow
 * - Dynamic mouse parallax and drag-orbit controls
 * - Graceful WebGL fallback
 */
export default function Hero3D() {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    let animationFrameId;
    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05080d, 0.045);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 7.5);

    // 2. Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL initialization failed:", e);
      setHasWebGL(false);
      return;
    }

    // 3. Materials
    const steelMaterial = new THREE.MeshStandardMaterial({
      color: 0x8899aa,
      metalness: 0.88,
      roughness: 0.28,
    });

    const darkSteelMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e2733,
      metalness: 0.92,
      roughness: 0.35,
    });

    const orangeBrandMaterial = new THREE.MeshStandardMaterial({
      color: 0xf26522,
      metalness: 0.5,
      roughness: 0.3,
      emissive: 0x8a300a,
      emissiveIntensity: 0.35,
    });

    const brassAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xcca050,
      metalness: 0.85,
      roughness: 0.25,
    });

    // 4. Industrial Group Construction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- Helper: Create Gear Geometry with Teeth ---
    const createGear = (radius, teethCount, thickness, innerHole) => {
      const gearGroup = new THREE.Group();
      
      // Gear Core Ring
      const coreGeo = new THREE.CylinderGeometry(radius, radius, thickness, 32);
      const coreMesh = new THREE.Mesh(coreGeo, steelMaterial);
      coreMesh.rotation.x = Math.PI / 2;
      gearGroup.add(coreMesh);

      // Inner Hub Ring
      const hubGeo = new THREE.CylinderGeometry(innerHole * 1.5, innerHole * 1.5, thickness * 1.25, 24);
      const hubMesh = new THREE.Mesh(hubGeo, brassAccentMaterial);
      hubMesh.rotation.x = Math.PI / 2;
      gearGroup.add(hubMesh);

      // Central axle bore hole
      const boreGeo = new THREE.CylinderGeometry(innerHole, innerHole, thickness * 1.3, 16);
      const boreMesh = new THREE.Mesh(boreGeo, darkSteelMaterial);
      boreMesh.rotation.x = Math.PI / 2;
      gearGroup.add(boreMesh);

      // Gear Teeth
      const toothWidth = (Math.PI * 2 * radius) / (teethCount * 2.2);
      const toothHeight = radius * 0.22;
      const toothGeo = new THREE.BoxGeometry(toothWidth, thickness * 0.98, toothHeight);

      for (let i = 0; i < teethCount; i++) {
        const angle = (i / teethCount) * Math.PI * 2;
        const toothMesh = new THREE.Mesh(toothGeo, steelMaterial);
        toothMesh.position.x = Math.cos(angle) * (radius + toothHeight * 0.4);
        toothMesh.position.y = Math.sin(angle) * (radius + toothHeight * 0.4);
        toothMesh.rotation.z = angle - Math.PI / 2;
        gearGroup.add(toothMesh);
      }

      return gearGroup;
    };

    // Gear 1 (Main Big Gear)
    const gear1 = createGear(1.3, 20, 0.22, 0.35);
    gear1.position.set(-1.4, 0.4, 0);
    mainGroup.add(gear1);

    // Gear 2 (Interlocking Medium Gear)
    const gear2 = createGear(0.85, 13, 0.2, 0.25);
    gear2.position.set(0.6, 1.4, -0.2);
    mainGroup.add(gear2);

    // Gear 3 (Orange Accent Small Pinion)
    const gear3 = createGear(0.55, 9, 0.24, 0.18);
    gear3.children.forEach(c => {
      if (c instanceof THREE.Mesh && c.material === steelMaterial) {
        c.material = orangeBrandMaterial;
      }
    });
    gear3.position.set(-0.2, -0.9, 0.3);
    mainGroup.add(gear3);

    // --- Industrial Pressure Vessel / Reactor ---
    const vesselGroup = new THREE.Group();
    vesselGroup.position.set(1.6, -0.2, -0.4);

    // Cylindrical Body
    const vesselBodyGeo = new THREE.CylinderGeometry(0.75, 0.75, 2.2, 32);
    const vesselBody = new THREE.Mesh(vesselBodyGeo, darkSteelMaterial);
    vesselGroup.add(vesselBody);

    // Top Dished Dome Cap
    const domeTopGeo = new THREE.SphereGeometry(0.75, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeTop = new THREE.Mesh(domeTopGeo, steelMaterial);
    domeTop.position.y = 1.1;
    vesselGroup.add(domeTop);

    // Bottom Dished Dome Cap
    const domeBottomGeo = new THREE.SphereGeometry(0.75, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
    const domeBottom = new THREE.Mesh(domeBottomGeo, steelMaterial);
    domeBottom.position.y = -1.1;
    vesselGroup.add(domeBottom);

    // Reinforcing Bands / Rings
    const ringGeo = new THREE.TorusGeometry(0.78, 0.04, 16, 32);
    [-0.6, 0, 0.6].forEach(y => {
      const ring = new THREE.Mesh(ringGeo, orangeBrandMaterial);
      ring.position.y = y;
      ring.rotation.x = Math.PI / 2;
      vesselGroup.add(ring);
    });

    // Pressure Gauge / Indicator Port
    const gaugeStemGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.4, 12);
    const gaugeStem = new THREE.Mesh(gaugeStemGeo, brassAccentMaterial);
    gaugeStem.rotation.z = Math.PI / 2;
    gaugeStem.position.set(0.95, 0.4, 0);
    vesselGroup.add(gaugeStem);

    const gaugeDialGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.08, 20);
    const gaugeDial = new THREE.Mesh(gaugeDialGeo, orangeBrandMaterial);
    gaugeDial.rotation.z = Math.PI / 2;
    gaugeDial.position.set(1.18, 0.4, 0);
    vesselGroup.add(gaugeDial);

    mainGroup.add(vesselGroup);

    // --- High-Pressure Piping Manifold ---
    const pipeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.2, -1.8, -0.6),
      new THREE.Vector3(-1.8, -1.8, 0.2),
      new THREE.Vector3(-0.5, -1.8, 0.2),
      new THREE.Vector3(0.8, -1.5, 0.8),
      new THREE.Vector3(2.6, -1.5, 0.4),
      new THREE.Vector3(3.4, -1.2, -0.5)
    ]);
    const pipeGeo = new THREE.TubeGeometry(pipeCurve, 48, 0.12, 16, false);
    const pipeMesh = new THREE.Mesh(pipeGeo, steelMaterial);
    mainGroup.add(pipeMesh);

    // Pipe Flanges
    [-1.2, 0.3, 1.8].forEach(pos => {
      const flangeGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.06, 16);
      const flangeMesh = new THREE.Mesh(flangeGeo, brassAccentMaterial);
      flangeMesh.position.set(pos, -1.7 + (pos > 0 ? 0.2 : 0), 0.3);
      flangeMesh.rotation.z = Math.PI / 2;
      mainGroup.add(flangeMesh);
    });

    // --- Structural Overhead Steel Crane Lattice Truss ---
    const trussGroup = new THREE.Group();
    trussGroup.position.set(0, 2.5, -1);

    const chordGeo = new THREE.BoxGeometry(7, 0.08, 0.08);
    const topChord = new THREE.Mesh(chordGeo, steelMaterial);
    topChord.position.y = 0.35;
    const bottomChord = new THREE.Mesh(chordGeo, steelMaterial);
    bottomChord.position.y = -0.35;
    trussGroup.add(topChord, bottomChord);

    // Truss diagonal bracing
    for (let x = -3; x <= 3; x += 0.6) {
      const strutGeo = new THREE.BoxGeometry(0.04, 0.76, 0.04);
      const strut = new THREE.Mesh(strutGeo, darkSteelMaterial);
      strut.position.x = x;
      strut.rotation.z = x % 1.2 === 0 ? 0.5 : -0.5;
      trussGroup.add(strut);
    }
    mainGroup.add(trussGroup);

    // --- Industrial Floating Micro-Particles ---
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
      particleScales[i / 3] = Math.random() * 0.04 + 0.01;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xf26522,
      size: 0.06,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.8);
    scene.add(ambientLight);

    // Cool Key Light (Steel specularity)
    const keyLight = new THREE.DirectionalLight(0xe2e8f0, 3.2);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    // Warm Industrial Brand Orange Accent Light
    const orangeRimLight = new THREE.PointLight(0xf26522, 5.5, 12);
    orangeRimLight.position.set(-3, -1, 3);
    scene.add(orangeRimLight);

    // Secondary cyan/steel fill light
    const fillLight = new THREE.PointLight(0x38bdf8, 2.8, 10);
    fillLight.position.set(3, 2, -2);
    scene.add(fillLight);

    // 6. Interaction & Mouse Controls
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let manualRotX = 0;
    let manualRotY = 0;

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.35;
      targetY = y * 0.25;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        manualRotY += deltaX * 0.006;
        manualRotX += deltaY * 0.006;
        manualRotX = Math.max(-0.4, Math.min(0.4, manualRotX));
      }
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    // Handle Resize
    const handleResize = () => {
      if (!container || !renderer) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mechanical Interlocking Rotation:
      // Gear 1 rotates at speed w
      const w = 0.55;
      gear1.rotation.z = elapsedTime * w;
      // Gear 2 has 13 teeth vs Gear 1's 20 teeth -> w2 = -w * (20/13)
      gear2.rotation.z = -elapsedTime * (w * (20 / 13));
      // Gear 3 has 9 teeth vs Gear 1's 20 teeth -> w3 = -w * (20/9)
      gear3.rotation.z = -elapsedTime * (w * (20 / 9));

      // Vessel subtle breathing oscillation
      vesselGroup.position.y = -0.2 + Math.sin(elapsedTime * 0.8) * 0.05;

      // Particle drift
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.05) * 0.05;

      // Smooth camera & group interpolation toward mouse target
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mainGroup.rotation.y = manualRotY + mouseX * 0.6 + Math.sin(elapsedTime * 0.25) * 0.05;
      mainGroup.rotation.x = manualRotX + -mouseY * 0.4 + 0.1;

      // Soft light pulsation
      orangeRimLight.intensity = 5.5 + Math.sin(elapsedTime * 2.5) * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);

      if (renderer && renderer.domElement) {
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
      
      // Dispose Geometries and Materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((mat) => mat.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, []);

  // WebGL Fallback View
  if (!hasWebGL) {
    return (
      <div className="relative w-full h-full min-h-[460px] flex items-center justify-center bg-gradient-to-br from-[#0A1018] via-[#05080D] to-[#0E1622] rounded-2xl border border-slate-800 p-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-industrial opacity-60"></div>
        <div className="relative z-10 text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-[#F26522]/10 border border-[#F26522]/40 flex items-center justify-center">
            <svg className="w-10 h-10 text-[#F26522] animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#F26522] block mb-2">Industrial Schematic Mode</span>
          <h3 className="text-xl font-bold text-white mb-2">Precision Engineering System</h3>
          <p className="text-sm text-slate-400">
            Dhanvi Techno integrates structural engineering, pressure vessel design, and mechanical automation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[480px] lg:min-h-[580px] cursor-grab active:cursor-grabbing select-none">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Floating 3D HUD Badges */}
      <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2 bg-[#0A1018]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 text-xs font-mono text-slate-300">
        <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse"></span>
        <span>3D INDUSTRIAL SIMULATION</span>
      </div>

      <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:flex items-center gap-2 bg-[#0A1018]/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800/80 text-[11px] font-mono text-slate-400">
        <span>Click & drag to orbit • Move cursor to inspect</span>
      </div>

      {/* Subtle Corner Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05080D] via-transparent to-transparent opacity-80" />
    </div>
  );
}

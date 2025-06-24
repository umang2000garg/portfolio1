// Featured.jsx
import React from "react";

export default function Featured() {
  return (



    <div className="min-h-screen bg-cover bg-center bg-no-repeat text-white p-10"
      style={{ backgroundImage: 'url("/images/background/featured1.jpg")' }}>
      <h1 className="text-4xl font-bold mb-8 text-center">Featured Projects</h1>
  
      {/* 🚗 1. Lykan Hypersport */}
      <h2 className="text-2xl font-semibold mb-2 underline text-center text-white">Lykan Hypersport – Automotive Surfacing Challenge</h2>
      <p className="text-white mb-4">
        The Lykan Hypersport project was a self-driven challenge undertaken to master surface modeling techniques in SolidWorks. Inspired by the dramatic styling of W Motors' hypercar, this project was created from scratch using blueprint references and precise surfacing tools to recreate its bold design language.
      </p>
      <ul className="list-disc list-inside text-white mb-4">
        <li><strong>Tools Used:</strong> SolidWorks (3D modeling), KeyShot 10 (Rendering & lighting setup)</li>
        <li><strong>Major Techniques & Commands:</strong> Project Curve, Composite Curve, Surface Loft, Filled Surface, Knit Surface, Offset Surface, Mirror Bodies, Advanced sketching & 3D guide curves</li>
        <li><strong>What I Learned:</strong> Class-A surfacing, curvature continuity, 3D sketches from blueprints, body panel separation, visual symmetry, aesthetic balancing, photorealistic rendering</li>
        <li><strong>Challenges Overcome:</strong> Angular geometry recreation, surface intersections, curve continuity, multi-plane 3D lofting</li>
        <li><strong>Output:</strong> High-fidelity CAD model with professional renders showcased on LinkedIn with notable engagement</li>
      </ul>

      {/* Lykan Renders */}
      <h3 className="text-xl font-semibold mb-2 text-slate-200">Final Renders</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <img src="/images/featured/lykan1.png" alt="Lykan Render 1" className="w-full h-64 object-cover rounded-lg" />
        <img src="/images/featured/lykan2.png" alt="Lykan Render 2" className="w-full h-64 object-cover rounded-lg" />
        <img src="/images/featured/lykan3.png" alt="Lykan Render 3" className="w-full h-64 object-cover rounded-lg" />
      </div>

      {/* 🔩 2. V-12 Engine */}
     <h2 className="text-2xl font-semibold mb-2 underline text-center text-white">V-12 Engine Mechanism – Advanced Motion Assembly</h2>
<p className="text-white mb-4">
  A fully animated V-12 internal combustion engine created to explore assembly motion, timing mechanisms, and real-world engine geometry.
  The model simulates real engine behavior including cam timing, crankshaft-piston dynamics, and dead load balance for rotational inertia.
</p>
<ul className="list-disc list-inside text-white mb-4">
  <li><strong>Tools Used:</strong> SolidWorks (Assembly & Motion Study), KeyShot (Animation Render)</li>
  <li><strong>Major Commands:</strong> Assembly Mates, Mechanical Mating, Motion Simulation, Section View, Gear Mates</li>
  <li><strong>Skills Learned:</strong> Synchronizing motion, SOHC-based timing, multi-component interaction, rendering real-time mechanical motion</li>
  <li><strong>Output:</strong> A fully functional V-12 simulation used for demonstrating engineering motion principles</li>
</ul>

      <h3 className="text-xl font-semibold mb-2 text-slate-200">Final Renders</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <img src="/images/featured/engine1.png" alt="V-12 Full Engine View" className="rounded-lg shadow" />
        <img src="/images/featured/engine2.png" alt="V-12 Render" className="rounded-lg shadow" />
      </div>

      <h3 className="text-xl font-semibold mb-2  text-center text-white">Cylinder Head & Camshaft Assembly</h3>
<p className="text-white mb-4">
  The top assembly includes rocker arms, valves with compression and exhaust springs, and a single overhead camshaft (SOHC) layout.
  This design replicates real-world timing mechanisms, as first implemented by Toyota in high-efficiency engines.
  The section view helps visualize airflow and valve actuation in the combustion cycle.
</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <img src="/images/featured/cylenderhead1.jpg" alt="Cylinder Head View" className="rounded-lg shadow" />
        <img src="/images/featured/camshaft.jpg" alt="Camshaft Assembly" className="rounded-lg shadow" />
        <img src="/images/featured/cylenderheadcross.jpg" alt="Cross-section" className="rounded-lg shadow" />
      </div>

    <h3 className="text-xl font-semibold mb-2  text-center text-white">Engine Block</h3>
<p className="text-white mb-4">
  The lower engine casing features integrated cooling vents and realistic wall thickness for housing the crankshaft.
  Reinforced to handle stress and vibration in high-rev conditions, this block maintains symmetry and precision hole alignments for the piston assembly.
</p>
      <div className="mb-10">
        <img src="/images/featured/engineblock.jpg" alt="Engine Block Shot" className="w-65 h-65 object-cover mx-auto rounded-lg " />
      </div>

      {/* ✈️ 3. Gnome Engine */}
      <h2 className="text-2xl font-semibold underline text-center text-white mb-4">
  Gnome Engine – Radial Inertia Concept
</h2>
<p className="text-white mb-4">
  This project replicates a 6-cylinder radial Gnome engine inspired by early WW2 fighter planes. Designed in Fusion 360, 
  the engine layout demonstrates the synchronized movement of pistons arranged in a circular pattern around a central crankshaft. 
  A dead-load component was added to mimic flywheel inertia, improving realism in the motion study.
</p>
<ul className="list-disc list-inside text-white mb-4">
  <li><strong>Tools Used:</strong> Fusion 360 (3D design), KeyShot (lighting & animation)</li>
  <li><strong>Major Commands:</strong> Revolve, Circular Pattern, Joint Assembly, In-Context Constraints</li>
  <li><strong>Skills Learned:</strong> Motion balancing, crankshaft simulation, cylinder symmetry, multi-axis assembly planning</li>
  <li><strong>Output:</strong> Visually accurate and mechanically functional radial engine with professional renders</li>
</ul>
      <h3 className="text-xl font-semibold mb-2 text-slate-200">Final Renders</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <img src="/images/featured/radial1.png" alt="Radial Render 1" className="rounded-lg shadow" />
        <img src="/images/featured/radial2.png" alt="Radial Render 2" className="rounded-lg shadow" />
        <img src="/images/featured/radial3.jpg" alt="Radial Render 3" className="rounded-lg shadow" />
      </div>

      {/* 🛬 4. Airbus A380 */}
      <h2 className="text-2xl font-semibold underline text-center text-white mb-4">
  Airbus A380 – Large Scale Assembly Challenge
</h2>
<p className="text-white mb-4">
  This project involved modeling one of the largest commercial aircrafts, the Airbus A380, focusing on accurate proportions and 
  multi-part structuring. Designed entirely in SolidWorks, it includes detailed assemblies of the fuselage, wings, engines, 
  and landing gear. The goal was to simulate real-world complexity in large assemblies while maintaining clean file management 
  using subassemblies and references.
</p>
<ul className="list-disc list-inside text-white mb-4">
  <li><strong>Tools Used:</strong> SolidWorks</li>
  <li><strong>Major Commands:</strong> Surface Loft, Shell, Split Body, Sketch Projection, Patterns, Multi-Body Merge</li>
  <li><strong>Skills Learned:</strong> Large-assembly planning, fuselage geometry, engine nacelle sculpting, parametric modeling</li>
  <li><strong>Output:</strong> Complete CAD mockup of the aircraft with clean part hierarchy and structural breakdown</li>
</ul>


      <h3 className="text-xl font-semibold mb-2 text-slate-200">Final Renders</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <img src="/images/featured/plane1.png" alt="Airbus Render 1" className="rounded-lg shadow" />
        <img src="/images/featured/plane2.png" alt="Airbus Render 2" className="rounded-lg shadow" />
      </div>

     <h3 className="text-xl font-semibold mb-2 text-center text-white">From SolidWorks Workspace</h3>
<p className="text-white mb-4">
  The Airbus model was broken into subassemblies to ease handling. Fuselage skin was created with surface tools, 
  and gear mechanisms were mounted using reference sketches and alignment tools. Particular attention was given to symmetry and 
  reference geometry setup.
</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/images/featured/fuselage.jpg" alt="Fuselage Assembly" className="rounded-lg shadow" />
        <img src="/images/featured/fuselagedesign.jpg" alt="Fuselage Close-up" className="rounded-lg shadow" />
        <img src="/images/featured/landinggear.jpg" alt="Landing Gear" className="rounded-lg shadow" />
      </div>
    </div>
  );
}

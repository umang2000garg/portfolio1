// Internships.jsx
import React from "react";

export default function Internships() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-center underline mb-10">
         Internship Projects
      </h1>

      {/* 🔧 Rhyno Wheels – Product Design for Sand Casting */}
<h2 className="text-2xl font-semibold underline text-center text-white mb-4">
     Rhyno Wheels – Cast-Friendly Automotive Components
</h2>
<p className="text-white mb-4">
  During my internship at Rhyno Wheels, I was responsible for designing pillion grips and fenders for electric scooters. 
  These parts were developed specifically for <strong>sand casting</strong>, requiring clean draft angles and parting surfaces.
  I ensured the geometry was both visually appealing and easy to manufacture by incorporating industry-specific DFM guidelines.
</p>
<ul className="list-disc list-inside text-white mb-4">
  <li><strong>Tools Used:</strong> SolidWorks (CAD modeling), KeyShot (rendering)</li>
  <li><strong>Skills Learned:</strong> Design for casting processes, creating functional surfaces, draft analysis, and model preparation for tooling</li>
  <li><strong>Output:</strong> Final 3D models and rendered visuals used for brochures, product documentation, and manufacturing references</li>
</ul>
      <h3 className="text-xl font-semibold mb-2 text-white"> Project Renders</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <img src="/images/internships/SIDE VIEW.png" alt="Rhyno Pillion Grip Render" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/internships/FRONT VIEW.png" alt="Rhyno Fender Render" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/internships/CROSS VIEW.png" alt="Rhyno Fender Render" className="w-65 h-65 object-cover rounded-lg shadow" />

      </div>

      {/* 🧠 Tesseract 3D – Reverse Engineering Projects */}
      <h2 className="text-2xl font-semibold underline text-center text-white mb-4">
  2. Tesseract 3D – Reverse Engineering & Industrial 3D Printing
</h2>

<p className="text-white mb-4">
  My internship at <strong>Tesseract 3D</strong> exposed me to the complete scan-to-CAD and industrial 3D printing pipeline. 
  I worked extensively on refining scanned meshes, parametric remodeling, tolerance inspection, and batch 3D printing for clients 
  across industries. I was actively involved in project execution, including STL cleanup, CAD alignment, model slicing, 
  and post-processing support.
</p>

<ul className="list-disc list-inside text-white mb-4">
  <li><strong>Tools Used:</strong> Geomagic Design X, Autodesk Netfabb, SolidWorks, Autodesk Fusion360, SLA 3D Printers, Cura, Simplyfy3D</li>
  <li><strong>Output:</strong> Reverse-engineered CAD models from raw scans, verified STL prototypes, and 250+ SLA-printed figurines for Star Sports Pro Kabaddi auction</li>
  <li><strong>Skills Learned:</strong> STL alignment and editing, parametric surfacing from mesh, tolerance checks, managing SLA production batches, reverse engineering logic</li>
</ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <img src="/images/internships/reverse engineering of knee cap gaurd.jpg" alt="BNC Robotic Arm" className="w-65 h-65 object-cover mx-auto rounded-lg shadow " />
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-center text-white">Star Sports Project</h3>
      <p className="text-white mb-4">
        Another major contribution was during the <strong>Star Sports Pro Kabaddi Auction</strong>, 
        where I managed the SLA 3D printing pipeline for over 250 batch-printed figurines. 
        The role required material coordination, printer calibration, and finishing supervision for display-ready models.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <img src="/images/internships/gold.png" alt="Knee Cap Reverse Engineering" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/internships/BLUE.png" alt="Gas Leak Detector Prototype" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/internships/player3DP.jpg" alt="Pro Kabaddi 3D Prints" className="w-64 h-67 object-cover rounded-lg shadow" />
      </div>
      <h3 className="text-2xl font-semibold text-center text-white mb-4">
  Gas Leak Detector – Reverse Engineering to Functional Prototype
</h3>

<p className="text-white mb-4">
  This project involved reconstructing a legacy gas leak detector housing, which was originally not available in digital format. 
  Our team reverse engineered the design with accuracy and manufacturability in mind. The goal was to modernize the form while maintaining internal fitting compatibility.
</p>
      <h4 className="text-2xl font-semibold text-center text-white mb-2">Scanned Raw File</h4>
<p className="text-white mb-4">
  The existing housing was scanned using an <strong>EinScan Pro 2X</strong> 3D scanner with a matte developer spray to reduce reflection. 
  The point cloud and mesh data were aligned and converted into a solid using <strong>Geomagic Design X</strong>. 
  Careful attention was given to internal mounting zones and curvature accuracy during remodeling.
</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <img src="/images/internships/REVEG RAW.jpeg" alt="Knee Cap Reverse Engineering" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/internships/EGRAW2.jpeg" alt="Gas Leak Detector Prototype" className="w-full h-64 object-cover rounded-lg shadow" />
      </div>
      <h4 className="text-2xl font-semibold text-center text-white mb-2">Client Renders</h4>
<p className="text-white mb-4">
  The refined CAD model was rendered in <strong>KeyShot</strong> with realistic lighting, plastic textures, and matte finish options 
  to help visualize the product's appearance. These renders were used in client presentations to review housing aesthetics and branding placements.
</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <img src="/images/internships/R1.jpg" alt="Knee Cap Reverse Engineering" className="w-full h-64 object-cover rounded-lg shadow" />
        <img src="/images/internships/R2.jpg" alt="Gas Leak Detector Prototype" className="w-full h-64 object-cover rounded-lg shadow" />
        <img src="/images/internships/R3.jpg" alt="Pro Kabaddi 3D Prints" className="w-full h-64 object-cover rounded-lg shadow" />
        <img src="/images/internships/R4.jpg" alt="Pro Kabaddi 3D Prints" className="w-full h-64 object-cover rounded-lg shadow" />

      </div>
      <h4 className="text-2xl font-semibold text-center text-white mb-2">Prototype Testing</h4>
<p className="text-white mb-8">
  To validate the design, the housing was <strong>SLA 3D printed</strong> using <strong>Chitubox slicer</strong> and printed on an <strong>Elegoo Saturn 2</strong>. 
  The prototype allowed us to check fitment, button alignment, and internal PCB clearance before tooling or final production. 
  Surface quality and assembly feedback from this round led to minor design refinements.
</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <img src="/images/internships/reverse engineering.jpg" alt="Knee Cap Reverse Engineering" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/internships/reverse engineering2.jpg" alt="Gas Leak Detector Prototype" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/internships/gasleakdetectorback.jpg" alt="Pro Kabaddi 3D Prints" className="w-65 h-65 object-cover rounded-lg shadow" />
      </div>


      {/* 💡 Miscellaneous Concepts in Tesseract */}
      <h3 className="text-2xl font-semibold  text-center text-white mb-4">
        Miscellaneous Concepts – Tesseract3D</h3>
      <ul className="list-disc list-inside text-white mb-4">
        <li><strong>Vase Mode Lamp:</strong> 3D printed in single-wall vase mode for a translucent lamp aesthetic</li>
        <li><strong>Seagram’s Royal Pack:</strong> Aesthetic packaging design for a premium mock product line</li>
        <li><strong>BNC Robotic Arm :</strong> fully functional driven by Nema motors having huge 3D FDM prints assembly weighs around 10kg</li>

      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/images/internships/lamp concept designing.jpg" alt="Vase Mode Lamp" className="w-64 h-64 object-cover rounded-lg shadow" />
        <img src="/images/internships/decor .jpg" alt="Seagrams Royal Packaging" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/internships/sla print.jpg" alt="Seagrams Royal Packaging" className="w-65 h-65 object-cover rounded-lg shadow" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"></div>
        <img src="/images/internships/robotic arm.jpg" alt="BNC Robotic Arm" className="w-65 h-65 object-cover mx-auto rounded-lg shadow " style={{ transform: "rotate(270deg)" }} />
      </div>
    </div>
  );
}

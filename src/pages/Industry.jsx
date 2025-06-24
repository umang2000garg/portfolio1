// Industry.jsx
import React from "react";

export default function Industry() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-center underline mb-10">
      Industry Projects – Ekosight Technologies Pvt. Ltd.
      </h1>

      {/* 🧪 Soil Doctor Shaker */}
      <h2 className="text-2xl font-semibold underline text-white mb-4 text-center">
        1. Soil Doctor – Sample Shaker Device
      </h2>
      <p className="text-white mb-4">
        Designed a compact soil sample shaker to automate repetitive manual shaking required for soil testing. 
        It includes a spring bar mechanism housed in a laser-cut acrylic prototype (1st iteration), 
        followed by an aluminum extrusion model (2nd iteration), and finalized using <strong>vacuum casting and sheet metal</strong> 
        for pilot production (100 units).
      </p>
      <ul className="list-disc list-inside text-white mb-4">
        <li><strong>Tools Used:</strong> SolidWorks, KeyShot, Acrylic Laser Cutting, Vacuum Casting</li>
        <li><strong>Skills Learned:</strong> Prototyping strategy, mechanism testing, cost-sensitive design iteration</li>
        <li><strong>Output:</strong> Functional, pilot-ready electromechanical device for field testing</li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <img src="/images/industry/soil doc shaker.jpg" alt="Final Product" className="w-65 h-65 object-cover mx-auto rounded-lg shadow"/>
      </div>
       <h2 className="text-2xl font-semibold underline text-white mb-4 text-center">
       Final Renders
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <img src="/images/industry/shaker124.jpg" alt="Final Product" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/industry/shaker125.jpg" alt="CAD Model" className="w-65 h-65 object-cover rounded-lg shadow" />
      </div>

      <h2 className="text-xl font-semibold underline text-white mb-4 text-center">
       CAD Model and Prototyping
      </h2>
      <p className="text-white mb-4">
        The development process began with a functional CAD model created in SolidWorks, focusing on precise fitment and 
        motion clarity for the spring-mounted shaking platform. Multiple iterations were built to test durability, ease of 
        assembly, and performance. The first prototype was made from laser-cut acrylic to test the mechanism. Later versions 
        evolved into a more robust structure using aluminum extrusions and finally sheet metal. The final version, produced via 
        vacuum casting, balanced cost, durability, and manufacturability for pilot-scale deployment.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <img src="/images/industry/upper enclosure vc.jpg" alt="Final Product" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/industry/shaker sheet metal base .jpg" alt="CAD Model" className="w-65 h-65 object-cover rounded-lg shadow" />
      </div>
      {/* 🧪 Soil Doctor – Soil Testing Device */}
      <h2 className="text-2xl font-semibold underline text-white mb-4 text-center">
        2. Soil Doctor – Soil Testing Device
      </h2>
      <p className="text-white mb-4">
        Redesigned the internal architecture and outer enclosure of the existing soil tester device. 
        The upgraded version was optimized for <strong>injection molding</strong> and <strong>vacuum casting</strong> depending on production scale. 
        The project aimed to improve aesthetics, DFM/DFA compatibility, and mass production feasibility.
      </p>
      <ul className="list-disc list-inside text-white mb-4">
        <li><strong>Tools Used:</strong> SolidWorks, Vacuum Casting, Injection Molding</li>
        <li><strong>Skills Learned:</strong> Aesthetic modeling, part mounting, plastic snap fit design</li>
        <li><strong>Output:</strong> Pilot batch enclosure design for improved usability and durability</li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <img src="/images/industry/front soil doc.jpg" alt="Final Product" className="w-full h-65 object-cover rounded-lg shadow" />
        <img src="/images/industry/back side soil doc.jpg" alt="CAD Model" className="w-full h-65 object-cover rounded-lg shadow" />
      </div>

      <h2 className="text-2xl font-semibold underline text-white mb-4 text-center">
       Final Renders
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <img src="/images/industry/soil doc device.jpg" alt="Final Product" className="w-full h-65 object-cover rounded-lg shadow" />
        <img src="/images/industry/step for keyshot.9.jpg" alt="CAD Model" className="w-full h-65 object-cover rounded-lg shadow" />
      </div>

      <h2 className="text-2xl font-semibold underline text-white mb-4 text-center">
       CAD Model and Prototyping
      </h2>
      <p className="text-white mb-4">
       The CAD model was designed with careful consideration for electronic component placement, wire routing,
       and future manufacturability through injection molding. Multiple prototype iterations were developed using 3D printing 
       and vacuum casting to test user ergonomics, enclosure fitment, and internal mounting points. 
       This iterativeprocess helped refine the form and function,ensuring the final design met both technical and aesthetic expectations for field deployment.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <img src="/images/industry/upper case.jpg" alt="Final Product" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/industry/lower case.jpg" alt="CAD Model" className="w-65h-65 object-cover rounded-lg shadow" />
        <img src="/images/industry/lid.jpg" alt="CAD Model" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/industry/soil doctor device sampleholder.jpg" alt="CAD Model" className="w-64 h-64 object-cover rounded-lg shadow" />

      </div>

      {/* 🧪 FEA Analysis – Soil Tester Lid */}
      <h3 className="text-xl font-semibold text-white underline mb-2 text-center">
        🔍 FEA Analysis – Lid of Soil Tester
      </h3>
      <p className="text-white mb-4">
        A structural analysis was performed on the lid of the soil testing device to ensure safety under applied force. 
        The material used was <strong>High Impact ABS</strong>, and a simulated force of <strong>0.2 N</strong> was applied. 
        The following results were obtained using ANSYS:
      </p>
      <ul className="list-disc list-inside text-white mb-4">
        <li><strong>Material Properties:</strong> Tensile Yield Strength = 27.44 MPa, Ultimate Strength = 36.26 MPa</li>
        <li><strong>Total Deformation:</strong> Min = 0, Max = 0.0981 mm, Avg = 0.0304 mm</li>
        <li><strong>Von Mises Stress:</strong> Min = 0.000004 MPa, Max = 1.171 MPa, Avg = 0.0745 MPa</li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <img src="/images/industry/lid1a.png" alt="Total Deformation" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/industry/lid2a.png" alt="Von Mises Stress" className="w-65 h-65 object-cover rounded-lg shadow" />
      </div>

      {/* 🧪 Soil Doctor – Titration Device */}
      <h2 className="text-2xl font-semibold underline text-white mb-4 text-center">
        3. Soil Doctor – Titration Device
      </h2>
      <p className="text-white mb-4">
        This device automates chemical titration for nutrient detection in soil samples. 
        I designed the enclosure and mechanism layout with <strong>injection molding</strong> as the target production method. 
        Emphasis was placed on aesthetic design, chemical resistance, and internal part alignment.
      </p>
      <ul className="list-disc list-inside text-white mb-4">
        <li><strong>Tools Used:</strong> SolidWorks, KeyShot, DFM for Plastic Molding</li>
        <li><strong>Skills Learned:</strong> Liquid handling design, compact mechanism layout, sealing optimization</li>
        <li><strong>Output:</strong> Pilot-ready titration unit tested for leakage and dosing control</li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <img src="/images/industry/titration device.jpg" alt="CAD Model" className="w-65 h-65 object-cover rounded-lg shadow" />
      </div>
       <h2 className="text-2xl font-semibold underline text-white mb-4 text-center">
       Final Renders
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <img src="/images/industry/soil doc titration pump.jpg" alt="Final Product" className="w-65 h-65 object-cover rounded-lg shadow" />
      </div>
       <h2 className="text-2xl font-semibold underline text-white mb-4 text-center">
       CAD Model and Prototyping
      </h2>
      <p className="text-white mb-4">
       The design process began with CAD modeling of the titration housing, focusing on compact placement of reservoirs, 
       valves, and tubing. The internal architecture was laid out for ease of assembly and minimal leakage risk. Multiple 
       prototypes were 3D printed to test component fitting, chemical compatibility, and ergonomic handling. 
       The final geometry was validated for manufacturability through vacuum casting and prepared for scale-up using 
       injection molding.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <img src="/images/industry/titration device uppercase.jpg" alt="Final Product" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/industry/titration device lower case.jpg" alt="CAD Model" className="w-65 h-65 object-cover rounded-lg shadow" />      </div>
    </div>
  );
}

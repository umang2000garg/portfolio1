// Freelance.jsx
import React from "react";

export default function Freelance() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
         Freelance Projects
      </h1>

      {/* ✋ Hand Model Render */}
      <h2 className="text-2xl font-semibold underline text-center text-white mb-4">
        1. Hand Model – Organic Mesh Sculpting
      </h2>
      <p className="text-white mb-4">
        This sculpted hand model was created as a freelance design asset for a 3D printing and presentation requirement. 
        Modeled in Blender using organic mesh techniques, it focused on anatomical proportion, finger curvature, and subtle detailing.
        Advanced node material graphs were used to render realistic surface textures and lighting.
      </p>
      <ul className="list-disc list-inside text-white mb-4">
        <li><strong>Tools Used:</strong> Blender 3D (Modeling), KeyShot (Rendering)</li>
        <li><strong>Major Techniques:</strong> Mesh editing, sculpting, displacement mapping, UV unwrapping</li>
        <li><strong>Skills Learned:</strong> Organic topology creation, hand pose balance, lighting & shading via nodes</li>
        <li><strong>Output:</strong> Print-ready mesh with cinematic render quality</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-white">Final Renders</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <img src="/images/freelance/hand.png" alt="Hand Render 1" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/freelance/hand1.png" alt="Hand Render 2" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/freelance/hand2.png" alt="Hand Render 3" className="w-65 h-80 object-cover rounded-lg shadow" />
        <img src="/images/freelance/hand3.jpeg" alt="Hand Render 4" className="h-80 object-cover rounded-lg shadow" />
      </div>

      {/* 🍩 Donut & Coffee Render */}
      <h2 className="text-2xl font-semibold underline text-center text-white mb-4">
        2. Donut & Coffee Render – Visual Appeal for Product Presentation
      </h2>
      <p className="text-white mb-4">
         Created purely for skill enhancement in texturing and product lighting, this render showcases a stylized donut and coffee cup 
  with photorealistic materials. Modeled and rendered entirely by me in Blender, it demonstrates attention to detail in both form 
  and finish. The scene uses procedural texturing and HDRI-based lighting to achieve a cozy, café-like atmosphere.
      </p>
      <ul className="list-disc list-inside text-white mb-4">
        <li><strong>Tools Used:</strong> Blender 3D (Modeling, shading, rendering)</li>
        <li><strong>Major Techniques:</strong> Procedural textures, UV Mapping, HDRI lighting, Material Graphs</li>
        <li><strong>Skills Learned:</strong> Surface realism, color balance, foam texture, photogenic presentation</li>
        <li><strong>Output:</strong> Single-shot render suitable for packaging or portfolio visuals</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 text-white">Final Render</h3>
      <div className="mb-10">
        <img src="/images/freelance/donut.jpg" alt="Donut Render" className="w-65 h-65 object-cover rounded-lg shadow mx-auto" />
      </div>
    </div>
  );
}

// Others.jsx
import React from "react";

export default function Others() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-center underline mb-8">
        Miscellaneous Projects
      </h1>

      <p className="text-white mb-6">
        This section showcases a collection of smaller design projects created using various tools including
        <strong> Fusion 360, SolidWorks, Blender, and KeyShot</strong>. Each project was an opportunity to explore unique modeling techniques,
        rendering workflows, or design concepts. Projects include:
      </p>

      <ul className="list-disc list-inside text-white mb-4">
        <li>Chess Set</li>
        <li>Tractor Model</li>
        <li>Lamp Design </li>
        <li>Wobble Mechanism</li>
        <li>Cutting Tool</li>
        <li>Car Models</li>
        <li> Isolated CAD Part Designs</li>
      </ul>

      <h3 className="text-xl font-semibold text-white underline mb-4">🖼️ Gallery</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/images/others/chess1.png" alt="Chess Set" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/chess2.png" alt="Tractor Model" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/chess3.png" alt="Lamp Design" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/PART1.jpg" alt="CAD Part 1" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/part 4.jpg" alt="CAD Part 2" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/part 3.jpg" alt="CAD Part 3" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/PART2.jpg" alt="CAD Part 4" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/WOBBLE MECHANISM .jpg" alt="CAD Part 4" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/CUTTER 4.jpg" alt="CAD Part 5" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/untitled164.png" alt="CAD Part 6" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/aventador68.jpg" alt="CAD Part 7" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/Screenshot (48).png" alt="CAD Part 8" className="w-65 h-65 object-cover rounded-lg shadow" />
        <img src="/images/others/Screenshot (53).png" alt="CAD Part 9" className="w-65 h-65 object-cover rounded-lg shadow" />
      </div>
    </div>
  );
}

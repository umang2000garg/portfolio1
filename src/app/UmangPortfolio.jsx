// UmangPortfolio.jsx
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/buttons";
import { useNavigate } from "react-router-dom";

export default function UmangPortfolio() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/engine.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay Content */}
      <div
        className="relative z-10 min-h-screen bg-cover bg-center bg-no-repeat p-10 text-white px-4 py-10 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: 'url("/images/background/portfolio intro .jpg")',
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Umang Garg</h1>
        <p className="text-lg md:text-xl text-slate-300 mb-2">
          Product Designer | CAD Modeler | Design for Manufacturing
        </p>

        {/* 🔹 Intro Paragraph */}
        <p className="text-md max-w-3xl text-slate-400 mb-8">
          With a background in mechanical engineering and hands-on experience
          across product prototyping, reverse engineering, and manufacturing
          techniques, I specialize in turning ideas into production-ready
          designs. From Blender mesh modeling to SolidWorks assemblies, I blend
          creativity and technical depth to deliver precise, thoughtful
          outcomes.
        </p>

        {/* 🔹 Navigation Tabs */}
       <Tabs defaultValue="projects" className="w-full max-w-4xl">
  <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent shadow-none border-none">
    <TabsTrigger
      value="featured"
      className="p-0 bg-transparent shadow-none border-none focus:outline-none"
    >
      <Button className="w-40 py-3 text-base" onClick={() => navigate("/featured")}>
        🚀 Featured
      </Button>
    </TabsTrigger>
    <TabsTrigger
      value="freelance"
      className="p-0 bg-transparent shadow-none border-none focus:outline-none"
    >
      <Button className="w-40 py-3 text-base" onClick={() => navigate("/freelance")}>
        🛠️ Freelance
      </Button>
    </TabsTrigger>
    <TabsTrigger
      value="internships"
      className="p-0 bg-transparent shadow-none border-none focus:outline-none"
    >
      <Button className="w-40 py-3 text-base" onClick={() => navigate("/internships")}>
        🎓 Internships
      </Button>
    </TabsTrigger>
    <TabsTrigger
      value="industry"
      className="p-0 bg-transparent shadow-none border-none focus:outline-none"
    >
      <Button className="w-40 py-3 text-base" onClick={() => navigate("/industry")}>
        🏭 Industry
      </Button>
    </TabsTrigger>
    <TabsTrigger
      value="others"
      className="p-0 bg-transparent shadow-none border-none focus:outline-none"
    >
      <Button className="w-40 py-3 text-base" onClick={() => navigate("/others")}>
        🧪 Others
      </Button>
    </TabsTrigger>
  </TabsList>
</Tabs>

      </div>
    </div>
  );
}

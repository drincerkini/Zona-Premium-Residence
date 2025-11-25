// pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import HeroSection from "../components/HeroSection";
import ArchitectureSection from "../components/ArchitectureSection";
import ArchitectureSectionReverse from "../components/ArchitectureSectionReverse";

import image1 from "../images/img1.jpeg";
import image2 from "../images/img2.jpeg";
import image3 from "../images/img3.jpeg";
import GallerySection from "../components/GallerySection";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-center">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <HeroSection />

          <ArchitectureSection
            image={image1}
            title="Modern Architectural Elegance"
            text="Zona Premium Residence masterfully combines sleek modern architectural lines with warm, inviting materials to create a harmonious living environment. Every detail is thoughtfully designed to balance aesthetics and functionality, resulting in spaces that feel both luxurious and comfortable. From expansive windows that flood interiors with natural light to meticulously crafted finishes, this residence offers a sophisticated lifestyle tailored to those who appreciate elegance and quality."
          />

          <ArchitectureSectionReverse
            image={image2}
            title="Designed For Premium Living"
            text="Spacious interiors, crafted with precision and attention to detail, provide an open and inviting atmosphere that enhances everyday living. Utilizing only the highest-quality materials, every room exudes elegance and durability. The sophisticated layout is designed to optimize comfort and flow, seamlessly connecting living spaces while ensuring privacy where needed. This thoughtful design elevates the living experience, making Zona Premium Residence the ideal choice for those seeking both style and substance in their home."
          />

          <ArchitectureSection
            image={image3}
            title="Elegant Outdoor Spaces"
            text="Beautifully landscaped gardens and spacious terraces seamlessly blend the tranquility of nature with elegant design, creating serene outdoor spaces perfect for relaxation and rejuvenation. Whether you're enjoying a quiet morning coffee surrounded by lush greenery or hosting unforgettable gatherings under the open sky, these thoughtfully crafted areas invite you to unwind, connect with nature, and savor every moment in peaceful comfort."
          />

          <ArchitectureSectionReverse
            image={image1}
            title="Sophisticated Interiors"
            text="A perfect blend of contemporary design and unparalleled comfort, thoughtfully crafted to elevate your everyday living experience. Every detail reflects sophistication and elegance, creating a harmonious space that caters to your premium lifestyle. From spacious, sunlit rooms to high-quality finishes and smart functionality, this residence is designed to offer both luxury and warmth, ensuring you feel right at home while making a statement of refined taste and modern living."
          />

          <GallerySection images={[image1, image2, image3]} />
        </>
      )}
    </div>
  );
}

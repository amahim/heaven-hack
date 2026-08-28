"use client";

import React, { useState } from "react";
import Image from "next/image";

const LIVING_IMAGES = [
  "photo_10_2026-08-28_21-00-42.jpg",
  "photo_15_2026-08-28_21-00-43.jpg",
  "photo_18_2026-08-28_21-00-43.jpg",
  "photo_19_2026-08-28_21-00-43.jpg",
  "photo_20_2026-08-28_21-00-43.jpg",
  "photo_22_2026-08-28_21-00-43.jpg",
  "photo_23_2026-08-28_21-00-43.jpg",
  "photo_24_2026-08-28_21-00-43.jpg",
  "photo_2_2026-08-28_21-00-42.jpg",
  "photo_33_2026-08-28_21-00-43.jpg",
  "photo_34_2026-08-28_21-00-43.jpg",
  "photo_35_2026-08-28_21-00-43.jpg",
  "photo_36_2026-08-28_21-00-43.jpg",
  "photo_38_2026-08-28_21-00-43.jpg",
  "photo_40_2026-08-28_21-00-43.jpg",
  "photo_41_2026-08-28_21-00-43.jpg",
  "photo_42_2026-08-28_21-00-43.jpg",
  "photo_43_2026-08-28_21-00-43.jpg",
  "photo_47_2026-08-28_21-00-43.jpg",
  "photo_49_2026-08-28_21-00-43.jpg",
  "photo_52_2026-08-28_21-00-43.jpg",
  "photo_53_2026-08-28_21-00-43.jpg",
  "photo_55_2026-08-28_21-00-43.jpg",
  "photo_56_2026-08-28_21-00-43.jpg",
  "photo_59_2026-08-28_21-00-44.jpg",
  "photo_63_2026-08-28_21-00-44.jpg",
  "photo_64_2026-08-28_21-00-44.jpg",
  "photo_66_2026-08-28_21-00-44.jpg",
  "photo_67_2026-08-28_21-00-44.jpg",
  "photo_72_2026-08-28_21-00-44.jpg",
  "photo_73_2026-08-28_21-00-44.jpg",
  "photo_77_2026-08-28_21-00-44.jpg",
  "photo_78_2026-08-28_21-00-44.jpg",
  "photo_79_2026-08-28_21-00-44.jpg",
  "photo_80_2026-08-28_21-00-44.jpg",
  "photo_81_2026-08-28_21-00-44.jpg",
  "photo_83_2026-08-28_21-00-44.jpg",
  "photo_84_2026-08-28_21-00-44.jpg",
  "photo_85_2026-08-28_21-00-44.jpg",
  "photo_86_2026-08-28_21-00-44.jpg",
  "photo_87_2026-08-28_21-00-44.jpg",
  "photo_88_2026-08-28_21-00-44.jpg",
  "photo_89_2026-08-28_21-00-44.jpg",
  "photo_9_2026-08-28_21-00-42.jpg"
];

const BEDROOM_IMAGES = [
  "photo_1_2026-08-28_21-00-42.jpg",
  "photo_21_2026-08-28_21-00-43.jpg",
  "photo_29_2026-08-28_21-00-43.jpg",
  "photo_30_2026-08-28_21-00-43.jpg",
  "photo_31_2026-08-28_21-00-43.jpg",
  "photo_32_2026-08-28_21-00-43.jpg",
  "photo_37_2026-08-28_21-00-43.jpg",
  "photo_46_2026-08-28_21-00-43.jpg",
  "photo_48_2026-08-28_21-00-43.jpg",
  "photo_4_2026-08-28_21-00-42.jpg",
  "photo_57_2026-08-28_21-00-43.jpg",
  "photo_58_2026-08-28_21-00-44.jpg",
  "photo_60_2026-08-28_21-00-44.jpg",
  "photo_61_2026-08-28_21-00-44.jpg",
  "photo_62_2026-08-28_21-00-44.jpg",
  "photo_68_2026-08-28_21-00-44.jpg",
  "photo_69_2026-08-28_21-00-44.jpg",
  "photo_74_2026-08-28_21-00-44.jpg",
  "photo_76_2026-08-28_21-00-44.jpg",
  "photo_80_2026-08-28_21-00-44.jpg",
  "photo_83_2026-08-28_21-00-44.jpg"
];

const DINING_IMAGES = [
  "photo_12_2026-08-28_21-00-42.jpg",
  "photo_13_2026-08-28_21-00-42.jpg",
  "photo_14_2026-08-28_21-00-42.jpg",
  "photo_16_2026-08-28_21-00-43.jpg",
  "photo_19_2026-08-28_21-00-43.jpg",
  "photo_25_2026-08-28_21-00-43.jpg",
  "photo_27_2026-08-28_21-00-43.jpg",
  "photo_28_2026-08-28_21-00-43.jpg",
  "photo_39_2026-08-28_21-00-43.jpg",
  "photo_3_2026-08-28_21-00-42.jpg",
  "photo_44_2026-08-28_21-00-43.jpg",
  "photo_50_2026-08-28_21-00-43.jpg",
  "photo_51_2026-08-28_21-00-43.jpg",
  "photo_6_2026-08-28_21-00-42.jpg",
  "photo_71_2026-08-28_21-00-44 - Copy.jpg",
  "photo_72_2026-08-28_21-00-44 - Copy.jpg",
  "photo_75_2026-08-28_21-00-44 - Copy.jpg",
  "photo_78_2026-08-28_21-00-44 - Copy.jpg",
  "photo_7_2026-08-28_21-00-42.jpg"
];

const CUSTOM_IMAGES = [
  "photo_10_2026-08-28_21-00-42.jpg",
  "photo_12_2026-08-28_21-00-42.jpg",
  "photo_14_2026-08-28_21-00-42.jpg",
  "photo_15_2026-08-28_21-00-43.jpg",
  "photo_16_2026-08-28_21-00-43.jpg",
  "photo_1_2026-08-28_21-00-42.jpg",
  "photo_2_2026-08-28_21-00-42.jpg",
  "photo_3_2026-08-28_21-00-42.jpg",
  "photo_4_2026-08-28_21-00-42.jpg",
  "photo_6_2026-08-28_21-00-42.jpg",
  "photo_71_2026-08-28_21-00-44 - Copy.jpg",
  "photo_7_2026-08-28_21-00-42.jpg",
  "photo_8_2026-08-28_21-00-42.jpg",
  "photo_9_2026-08-28_21-00-42.jpg"
];

export default function Home() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "bespoke",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeCollection, setActiveCollection] = useState(0);

  // Gallery and Lightbox Modal States
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"living" | "bedroom" | "dining" | "custom" | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomActive, setZoomActive] = useState(false);

  const openGallery = (category: "living" | "bedroom" | "dining" | "custom") => {
    setSelectedCategory(category);
    setGalleryOpen(true);
    // Disable main body scroll when gallery is open
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setSelectedCategory(null);
    // Restore main body scroll
    document.body.style.overflow = "";
  };

  const openLightbox = (imgSrc: string) => {
    setSelectedImage(imgSrc);
    setZoomActive(false);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    setZoomActive(false);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid closing lightbox when clicking on the image to zoom
    setZoomActive(!zoomActive);
  };

  const getCategoryImages = () => {
    switch (selectedCategory) {
      case "living": return { title: "Living Room", folder: "Living", list: LIVING_IMAGES };
      case "bedroom": return { title: "Bedroom", folder: "Bedroom", list: BEDROOM_IMAGES };
      case "dining": return { title: "Dining Room", folder: "Dining", list: DINING_IMAGES };
      case "custom": return { title: "Bespoke & Workspace", folder: "Custom", list: CUSTOM_IMAGES };
      default: return { title: "", folder: "", list: [] };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert("Please fill in your name and phone number so we can reach you.");
      return;
    }
    // Simulate submission
    setSubmitted(true);
    // Reset form after submission
    setFormState({ name: "", phone: "", service: "bespoke", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container">
          <a href="#" className="logo-link">
            <span className="logo-main">HEAVEN</span>
            <span className="logo-sub">Furniture Mart</span>
          </a>
          <nav className="header-nav">
            <a href="#collections" className="nav-link">Collections</a>
            <a href="#bespoke" className="nav-link">Bespoke</a>
            <a href="#why-choose" className="nav-link">Why Heaven</a>
            <a href="#showroom" className="nav-link">Showroom</a>
            <a href="#quote" className="btn btn-secondary" style={{ padding: "0.6rem 1.5rem", fontSize: "0.8rem" }}>
              Request a Quote
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-sec">
        <video
          className="hero-bg-video"
          src="/herovideo.MP4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero_bg.jpg"
        />
        <div className="hero-bg-overlay" />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div className="hero-content">
            <span className="hero-tag">Designed. Crafted. Customized.</span>
            <h1 className="hero-title">
              Bespoke Furniture <br />
              <span className="text-gold">Tailored to Your Story</span>
            </h1>
            <p className="hero-description">
              Step into the world of premium interior styling. We design and hand-craft custom wooden furniture tailored exclusively to your space, size, and personal taste.
            </p>
            <div className="hero-buttons">
              <a href="#quote" className="btn btn-primary">
                Book Consultation
              </a>
              <a href="#collections" className="btn btn-outline-white">
                View Collections
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="section bg-ivory-solid" id="about">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="section-tagline">The Studio Essence</span>
              <h2 className="section-title-medium" style={{ color: "var(--color-teal)" }}>
                We believe furniture is a reflection of lifestyle, taste, and comfort.
              </h2>
            </div>
            <div>
              <p className="section-desc" style={{ marginBottom: "2rem" }}>
                Heaven Furniture Mart is one of Chattogram's leading bespoke furniture brands. Since our founding in 2020, we have rejected mass-produced, off-the-shelf catalog models. Instead, we collaborate with you to create premium furniture that blends timeless luxury with modern function.
              </p>
              <p className="section-desc">
                From our physical design studio and showroom on <strong>Agrabad Access Road, Chattogram</strong>, our master craftsmen bring your vision to life using only the finest premium hardwoods and materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS SNAPSHOT */}
      <section className="section bg-dark-solid" id="collections">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="section-tagline">Signature Collections</span>
            <h2 className="section-title">Explore Our Work</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              A preview of our craft. Every category is customizable to your home or office's exact layout, proportions, and fabric preferences.
            </p>
          </div>

          <div className="collections-accordion">
            {/* Living Room */}
            <div
              className={`accordion-panel ${activeCollection === 0 ? "active" : ""}`}
              onMouseEnter={() => setActiveCollection(0)}
              onClick={() => {
                setActiveCollection(0);
                // Also open gallery if already active and clicked
                if (activeCollection === 0) openGallery("living");
              }}
            >
              <Image
                className="accordion-panel-img"
                src="/officialImages/Living/photo_10_2026-08-28_21-00-42.jpg"
                alt="Heaven Furniture Mart custom luxurious sofa set and coffee table"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="accordion-panel-overlay" />
              <div className="accordion-panel-content">
                <h3 className="panel-title">Living Room</h3>
                <p className="panel-tagline">Sofas · Coffee Tables · Consoles</p>
                <div className="panel-details">
                  <p className="panel-features">
                    We design bespoke sectionals, modular sofas, and solid teak coffee tables built specifically for your layout and fabric selections.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery("living");
                    }}
                    className="panel-cta-btn"
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    Explore Gallery ({LIVING_IMAGES.length} Photos) <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bedroom */}
            <div
              className={`accordion-panel ${activeCollection === 1 ? "active" : ""}`}
              onMouseEnter={() => setActiveCollection(1)}
              onClick={() => {
                setActiveCollection(1);
                if (activeCollection === 1) openGallery("bedroom");
              }}
            >
              <Image
                className="accordion-panel-img"
                src="/officialImages/Bedroom/photo_1_2026-08-28_21-00-42.jpg"
                alt="Heaven Furniture Mart custom solid wood bed, wardrobe, and modern nightstands"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="accordion-panel-overlay" />
              <div className="accordion-panel-content">
                <h3 className="panel-title">Bedroom</h3>
                <p className="panel-tagline">Beds · Wardrobes · Dressers</p>
                <div className="panel-details">
                  <p className="panel-features">
                    Create your sanctuary with custom-built solid wood frames, integrated floating nightstands, and sliding wardrobes tailored to your dimensions.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery("bedroom");
                    }}
                    className="panel-cta-btn"
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    Explore Gallery ({BEDROOM_IMAGES.length} Photos) <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Dining */}
            <div
              className={`accordion-panel ${activeCollection === 2 ? "active" : ""}`}
              onMouseEnter={() => setActiveCollection(2)}
              onClick={() => {
                setActiveCollection(2);
                if (activeCollection === 2) openGallery("dining");
              }}
            >
              <Image
                className="accordion-panel-img"
                src="/officialImages/Dining/photo_12_2026-08-28_21-00-42.jpg"
                alt="Heaven Furniture Mart bespoke solid teak wooden dining table and luxury dining chairs set"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="accordion-panel-overlay" />
              <div className="accordion-panel-content">
                <h3 className="panel-title">Dining Room</h3>
                <p className="panel-tagline">Dining Tables · Chairs · Cabinets</p>
                <div className="panel-details">
                  <p className="panel-features">
                    Host gatherings around solid teak wooden tables carved with expert joints, combined with chairs upholstered in premium spill-resistant fabrics.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery("dining");
                    }}
                    className="panel-cta-btn"
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    Explore Gallery ({DINING_IMAGES.length} Photos) <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Custom/Office */}
            <div
              className={`accordion-panel ${activeCollection === 3 ? "active" : ""}`}
              onMouseEnter={() => setActiveCollection(3)}
              onClick={() => {
                setActiveCollection(3);
                if (activeCollection === 3) openGallery("custom");
              }}
            >
              <Image
                className="accordion-panel-img"
                src="/officialImages/Custom/photo_1_2026-08-28_21-00-42.jpg"
                alt="Heaven Furniture Mart custom executive desk and custom study room workstation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="accordion-panel-overlay" />
              <div className="accordion-panel-content">
                <h3 className="panel-title">Office & Custom</h3>
                <p className="panel-tagline">Workstations · Bookshelves</p>
                <div className="panel-details">
                  <p className="panel-features">
                    Increase your productivity with library-grade wooden bookcases, heavy executive desks, and tailored storage credenzas.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery("custom");
                    }}
                    className="panel-cta-btn"
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    Explore Gallery ({CUSTOM_IMAGES.length} Photos) <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BESPOKE HIGHLIGHT */}
      <section className="section bg-ivory-solid" id="bespoke">
        <div className="container">
          <div className="grid-2">
            <div className="bespoke-media">
              <Image
                src="/images/craftsmanship.jpg"
                alt="A close up of skilled craftsman hand carving a custom solid wood furniture detail in the workshop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="section-tagline">Our Signature Edge</span>
              <h2 className="section-title-medium" style={{ color: "var(--color-teal)" }}>
                From Concept Sketch to Final Installation
              </h2>
              <p className="section-desc">
                We believe your furniture should fit your home, not the other way around. Our custom bespoke service allows you to customize the wood species, dimensions, fabric color, and design details of any piece.
              </p>

              <div className="bespoke-steps">
                <div className="bespoke-step">
                  <span className="bespoke-step-num">01</span>
                  <div className="bespoke-step-content">
                    <h4 style={{ color: "var(--color-teal)" }}>Free Design Consultation</h4>
                    <p>Discuss your floor plan, style preferences, and utility requirements with our expert designers.</p>
                  </div>
                </div>

                <div className="bespoke-step">
                  <span className="bespoke-step-num">02</span>
                  <div className="bespoke-step-content">
                    <h4 style={{ color: "var(--color-teal)" }}>Custom Proportions & Wood Selection</h4>
                    <p>Select from premium, seasoned teak and luxury hardwoods, and tailor the dimensions to fit your space perfectly.</p>
                  </div>
                </div>

                <div className="bespoke-step">
                  <span className="bespoke-step-num">03</span>
                  <div className="bespoke-step-content">
                    <h4 style={{ color: "var(--color-teal)" }}>Artisanal Hand-Crafting</h4>
                    <p>Our skilled in-house artisans hand-carve and build each joint, ensuring outstanding durability and a stunning finish.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HEAVEN (TRUST BULLETS) */}
      <section className="section bg-dark-solid" id="why-choose">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="section-tagline">Why Choose Heaven</span>
            <h2 className="section-title">The Pillars of Our Standard</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Our commitment to excellence dictates every phase of our interaction, offering peace of mind along with premium style.
            </p>
          </div>

          <div className="grid-3">
            {/* Consultation */}
            <div className="why-card">
              <svg className="why-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h3 className="why-card-title">Free Consultations</h3>
              <p className="why-card-desc">
                Partner with our interior designers at no charge to draft layout concepts and choose structural directions.
              </p>
            </div>

            {/* Fully Bespoke */}
            <div className="why-card">
              <svg className="why-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l.188-.188a3 3 0 114.154 0l.188.188a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
              </svg>
              <h3 className="why-card-title">100% Bespoke Craft</h3>
              <p className="why-card-desc">
                No templates or mass manufacturing. Every cut and detail is designed to suit your home’s architecture.
              </p>
            </div>

            {/* Premium Materials */}
            <div className="why-card">
              <svg className="why-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <h3 className="why-card-title">Premium Materials</h3>
              <p className="why-card-desc">
                We source only premium seasoned wood, durable fabrics, and high-performance hardware for longevity.
              </p>
            </div>

            {/* Showroom */}
            <div className="why-card">
              <svg className="why-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="why-card-title">Agrabad Showroom</h3>
              <p className="why-card-desc">
                Visit our physical studio in Chattogram to experience the tactile finish, materials, and scale firsthand.
              </p>
            </div>

            {/* Delivery */}
            <div className="why-card">
              <svg className="why-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M13 16h4M17 16h2a2 2 0 002-2v-5l-3-3h-3v10m-3-10V4a1 1 0 00-1-1H4z" />
              </svg>
              <h3 className="why-card-title">Full Delivery & Setup</h3>
              <p className="why-card-desc">
                Stress-free delivery and white-glove assembly are fully handled by our specialized logistics team.
              </p>
            </div>

            {/* Easy Payments */}
            <div className="why-card">
              <svg className="why-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <h3 className="why-card-title">Flexible Payments</h3>
              <p className="why-card-desc">
                Comfortable partial payment schedules and transparent pricing structure built with our clients in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF (MD QUOTE, TIMELINE & SHOWROOM) */}
      <section className="section bg-teal-solid" id="showroom">
        <div className="container">
          <div className="quote-section">
            <span className="quote-icon">“</span>
            <blockquote className="quote-text">
              At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.
            </blockquote>
            <cite className="quote-author">
              Abul Kalam Bhuiyan
              <span className="quote-author-title">Managing Director, Heaven Furniture Mart</span>
            </cite>
          </div>

          {/* Timeline Milestones */}
          <div className="timeline-sec">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="section-tagline" style={{ color: "var(--color-ivory)" }}>Our Journey</span>
              <h3 className="section-title-medium" style={{ fontSize: "1.8rem" }}>Milestones of Excellence</h3>
            </div>
            <div className="timeline-grid">
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <p className="timeline-desc">Founded by Abul Kalam Bhuiyan with a mission to craft personalized luxury furniture.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2021</div>
                <p className="timeline-desc">Opened the grand physical showroom in Agrabad Access Road, Chattogram.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">24–25</div>
                <p className="timeline-desc">Exhibited our premium custom layouts at the prestigious International Furniture Fair.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <p className="timeline-desc">Formally inducted as an active corporate member of the Chamber of Commerce.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2026</div>
                <p className="timeline-desc">Received nationwide recognition from BFIOA for excellence in custom furniture manufacturing.</p>
              </div>
            </div>
          </div>

          {/* Showroom Photo Highlight */}
          <div className="showroom-showcase">
            <Image
              src="/images/showroom.jpg"
              alt="Heaven Furniture Mart elegant showroom exterior and custom gallery setup located in Agrabad, Chattogram"
              fill
              sizes="100vw"
            />
            <div className="showroom-showcase-overlay">
              <div className="showroom-info">
                <h3>Our Agrabad Showroom</h3>
                <p>Agrabad Access Road, Chattogram. Open daily 10:00 AM — 8:30 PM. Call: +880 1960-481983</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="section bg-ivory-solid" id="quote">
        <div className="container">
          <div className="cta-box">
            <span className="section-tagline">Begin Your Creation</span>
            <h2 className="section-title" style={{ color: "var(--color-teal)", marginBottom: "1rem" }}>
              Request a Design Consultation
            </h2>
            <p className="section-desc" style={{ color: "var(--color-text-muted-dark)", margin: "0 auto 3rem auto" }}>
              Schedule a design session. Share your layout ideas or required dimensions, and our team will get in touch with a customized quote and structural sketch.
            </p>

            {submitted ? (
              <div
                style={{
                  backgroundColor: "rgba(51, 73, 74, 0.05)",
                  border: "1px solid var(--color-teal)",
                  padding: "3rem",
                  textAlign: "center",
                  color: "var(--color-teal)",
                }}
              >
                <h3 className="section-title-medium" style={{ fontSize: "1.8rem", color: "var(--color-teal)" }}>
                  Thank You
                </h3>
                <p style={{ fontWeight: 500 }}>
                  Your request has been received. One of our design coordinators will call you within 24 hours.
                </p>
              </div>
            ) : (
              <form className="cta-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input
                      className="form-input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                      className="form-input"
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. +880 1960-481983"
                      value={formState.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="service">Preferred Collection</label>
                  <select
                    className="form-input"
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleInputChange}
                  >
                    <option value="living">Living Room Sofa / Coffee Table</option>
                    <option value="bedroom">Bedroom Bed / Wardrobe</option>
                    <option value="dining">Dining Table & Chairs</option>
                    <option value="office">Office & Study Workstations</option>
                    <option value="bespoke">Fully Bespoke / Custom Design</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Provide Details (Dimensions, Wood Type, Style)</label>
                  <textarea
                    className="form-textarea"
                    id="message"
                    name="message"
                    placeholder="Describe your space or specify dimensions..."
                    value={formState.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button className="btn btn-primary" type="submit" style={{ alignSelf: "flex-start", marginTop: "1rem" }}>
                  Submit Consultation Request
                </button>
              </form>
            )}

            <div className="whatsapp-direct">
              <div className="whatsapp-divider">OR</div>
              <a
                className="whatsapp-link"
                href="https://wa.me/8801960481983"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  style={{ width: "24px", height: "24px", fill: "currentColor" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.202-1.364a9.92 9.92 0 004.81 1.239h.005c5.502 0 9.99-4.479 9.99-9.986.002-2.67-1.037-5.18-2.927-7.072A9.924 9.924 0 0012.012 2zm5.727 14.008c-.313.88-1.56 1.6-2.147 1.7-.5.087-1.157.17-3.397-.758-2.863-1.184-4.693-4.085-4.836-4.275-.143-.19-1.163-1.545-1.163-2.946 0-1.4.733-2.09.994-2.373.26-.282.574-.35.766-.35h.548c.174 0 .385-.065.597.45.22.533.75 1.834.815 1.968.065.134.11.29.02.47-.09.18-.135.29-.27.45-.134.16-.282.355-.403.48-.135.135-.276.282-.12.55.157.27.7 1.15 1.5 1.865.733.65 1.353.85 1.637.986.284.135.45.114.619-.08.168-.194.733-.854.927-1.144.195-.29.39-.24.66-.14.27.1.1.84.34.84.28 0 .733-.346.883-.497s.483.473.548.552z" />
                </svg>
                Chat Directly on WhatsApp
              </a>
              <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted-dark)" }}>
                Active support with our lead design team (+880 1960-481983)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo-link">
                <span className="logo-main" style={{ color: "var(--color-ivory)" }}>HEAVEN</span>
                <span className="logo-sub">Furniture Mart</span>
              </a>
              <p>
                Crafting luxury, bespoke furniture tailored to the space and taste of Chattogram's premier homes and executive workspaces since 2020.
              </p>
            </div>

            <div>
              <h4 className="footer-title">Navigation</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Home</a></li>
                <li><a href="#collections" className="footer-link">Collections</a></li>
                <li><a href="#bespoke" className="footer-link">Bespoke Highlight</a></li>
                <li><a href="#why-choose" className="footer-link">Why Choose Us</a></li>
                <li><a href="#showroom" className="footer-link">Our Showroom</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Contact Information</h4>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <svg className="footer-contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Agrabad Access Road, Chattogram, Bangladesh</span>
                </div>

                <div className="footer-contact-item">
                  <svg className="footer-contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+880 1960-481983</span>
                </div>

                <div className="footer-contact-item">
                  <svg className="footer-contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
                  </svg>
                  <span>heavenfurnituremart@gmail.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="footer-social-icons">
                <a
                  className="footer-social-link"
                  href="https://facebook.com/HeavenFurnitureMart"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg style={{ width: "18px", height: "18px", fill: "currentColor" }} viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  className="footer-social-link"
                  href="https://instagram.com/heaven_furniture_ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg style={{ width: "18px", height: "18px", fill: "currentColor" }} viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  className="footer-social-link"
                  href="https://youtube.com/@HeavenFurnitureMart"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg style={{ width: "18px", height: "18px", fill: "currentColor" }} viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Heaven Furniture Mart. All rights reserved.</span>
            <span>Designed & Crafted in Chattogram, Bangladesh.</span>
          </div>
        </div>
      </footer>

      {/* GALLERY MODAL */}
      {galleryOpen && selectedCategory && (
        <div className="gallery-modal-overlay">
          <div className="gallery-modal-header">
            <h2 className="gallery-modal-title">
              {getCategoryImages().title} <span style={{ color: "var(--color-gold)", fontSize: "1.1rem", fontFamily: "var(--font-sans)", fontWeight: 500, marginLeft: "1rem" }}>Heaven Gallery</span>
            </h2>
            <button className="gallery-close-btn" onClick={closeGallery} aria-label="Close Gallery">
              ✕
            </button>
          </div>
          <div className="gallery-grid-container">
            <div className="gallery-grid">
              {getCategoryImages().list.map((filename, index) => {
                const imgSrc = `/officialImages/${getCategoryImages().folder}/${filename}`;
                return (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => openLightbox(imgSrc)}
                  >
                    <Image
                      className="gallery-item-img"
                      src={imgSrc}
                      alt={`Heaven Furniture Mart bespoke piece ${index + 1}`}
                      width={400}
                      height={400}
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX OVERLAY */}
      {lightboxOpen && selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close Photo">
            ✕
          </button>
          <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <Image
              className={`lightbox-image ${zoomActive ? "zoomed" : ""}`}
              src={selectedImage}
              alt="Bespoke furniture piece close up display"
              width={1200}
              height={1200}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
              onClick={toggleZoom}
            />
          </div>
        </div>
      )}
    </>
  );
}

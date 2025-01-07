"use client";
import { motion } from "framer-motion"; // Update import
import {   Wind, Zap, Leaf, Globe,   } from 'lucide-react';
import Head from "next/head";
import Image from "next/image"; // Add this import
import React, { useEffect } from "react";

const carouselImages = [
  "/WIND4.jpg",
  "/WIND9.jpg",
  "/WIND15.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = React.useState(0);


  // Add this useEffect for auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Changes image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>
          $WIND - Revolutionary Web3 Meme Token for Sustainable Energy
        </title>
        <meta
          name="description"
          content="Join the future of sustainable energy with $WIND - the first Web3 meme token combining AI and renewable energy. Early investors welcome."
        />
        <meta
          name="keywords"
          content="wind token, crypto, web3, sustainable energy, meme token, blockchain"
        />
        <meta
          property="og:title"
          content="$WIND - Revolutionary Web3 Meme Token"
        />
        <meta
          property="og:description"
          content="The future of renewable energy meets Web3. Join the revolution with $WIND token."
        />
        <meta property="og:image" content="/wind-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
        <motion.div
          className="fixed inset-0 bg-hero-glow opacity-50 mix-blend-overlay pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative ">
          {/* Navbar */}
          <motion.nav
            className="sticky z-50 top-0 w-full backdrop-blur-lg border-b border-violet-600/20 bg-violet-950/30"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
              <div
                className="text-3xl font-bold"
                style={{
                  background:
                    "linear-gradient(to right, rgb(167, 139, 250), rgb(103, 232, 249))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                $WIND
              </div>

              <a
                href="#join"
                className="mx-4 hover:text-violet-400 transition-colors flex items-center gap-2"
              >
                <Wind className="w-5 h-5" />
                Join
              </a>
            </div>
          </motion.nav>

          {/* Hero Section */}
          <section
            style={{
              background: "url('/WIND24.jpg')",
              backgroundPosition: "top-left",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="relative lg:min-h-screen min-h-[70vh] max-h-[100vh] flex items-end justify-center overflow-hidden  bg-contain bg-center"
          >
            <motion.div
              className="text-center relative z-10 bg-matrix-bg w-full pb-[5rem]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Welcome to $WIND
              </h1> */}
              <motion.p
                className="mt-6 text-xl md:text-2xl text-white max-w-3xl mx-auto px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                The Energy of the Future – A fun, inventive, and influential
                wind energy token on Solana.
              </motion.p>

              <motion.div
                className="mt-10 flex gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="https://x.com/windaimeme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-xl bg-violet-600 rounded-lg inline-block
                    relative overflow-hidden group hover:shadow-neon transition-shadow duration-300 flex items-center gap-2"
                >
                  <Image
                    src="/x.svg"
                    alt="X (Twitter)"
                    width={24}
                    height={24}
                  />
                  <span className="relative z-10">Twitter</span>
                  <motion.div
                    className="absolute inset-0 bg-violet-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </a>
                <a
                  href="https://t.me/WindAiMeme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-xl bg-violet-600 rounded-lg inline-block
                    relative overflow-hidden group hover:shadow-neon transition-shadow duration-300 flex items-center gap-2"
                >
                  <Image
                    className="text-white"
                    src="/telegram.svg"
                    alt="Telegram"
                    width={24}
                    height={24}
                  />
                  <span className="relative z-10">Telegram</span>
                  <motion.div
                    className="absolute inset-0 bg-violet-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </a>
              </motion.div>
            </motion.div>
          </section>

          {/* About Section */}
          <section className="py-20 px-4 bg-violet-950/30 backdrop-blur-sm relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(167, 139, 250), rgb(103, 232, 249))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  More Than Just a Token
                </h2>
                <p className="text-lg md:text-xl text-violet-100 max-w-3xl mx-auto leading-relaxed">
                  $WIND is a fun, inventive, and influential wind energy token
                  that aims to transform how we think about sustainable energy.
                  Rooted in sustainability, $WIND is powered by nature&apos;s
                  breath and integrated into Solana&apos;s green ecosystem.
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-violet-900/20 p-8 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-violet-300">
                    Sustainable Vision
                  </h3>
                  <p className="text-violet-100">
                    Paving the path for future utilities that combine blockchain
                    efficiency with environmental responsibility.
                  </p>
                </div>
                <div className="bg-violet-900/20 p-8 rounded-xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-violet-300">
                    Green Ecosystem
                  </h3>
                  <p className="text-violet-100">
                    Built on Solana&apos;s energy-efficient blockchain, ensuring
                    minimal environmental impact while maximizing performance.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Wind Image Carousel Section */}
          <section className="relative h-[600px] overflow-hidden  backdrop-blur-sm mx-auto max-w-7xl my-20 rounded-xl">
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {carouselImages.map((image, index) => (
                <motion.div
                  key={image}
                  className="absolute inset-0 py-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentImage ? 1 : 0,
                    scale: index === currentImage ? 1 : 1.1,
                  }}
                  transition={{ duration: 1 }}
                >
                  <div className="relative w-fit mx-auto h-full bg-violet-500/50 lg:rounded-lg">
                    <img
                      src={image}
                      alt={`Wind energy ${index + 1}`}
                      //  fill
                      className=" h-full object-contain object-top lg:rounded-lg"
                    />
                  </div>
                </motion.div>
              ))}

              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImage
                        ? "bg-violet-400 w-8"
                        : "bg-violet-400/50 hover:bg-violet-400/75"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </section>

          {/* Mission Section (New) */}
          <section className="py-16 px-4 bg-violet-950/30 border-t border-violet-500 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg mb-8">
                To harness the power of wind energy, contribute to a healthier
                planet, and build a community dedicated to a cleaner and greener
                future.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                <motion.div
                  className="p-6 backdrop-blur-md bg-violet-900/20 rounded-lg"
                  //  whileHover={{ scale: 1.05 }}
                >
                  <Globe className="w-8 h-8 mb-4 mx-auto text-violet-400" />
                  <h3 className="text-xl font-bold mb-2">Well-being</h3>
                  <p>Promoting a sustainable planet for all.</p>
                </motion.div>
                <motion.div
                  className="p-6 backdrop-blur-md bg-violet-900/20 rounded-lg"
                  //whileHover={{ scale: 1.05 }}
                >
                  <Zap className="w-8 h-8 mb-4 mx-auto text-violet-400" />
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p>
                    Leveraging cutting-edge technology to support green
                    initiatives.
                  </p>
                </motion.div>
                <motion.div
                  className="p-6 backdrop-blur-md bg-violet-900/20 rounded-lg"
                  //whileHover={{ scale: 1.05 }}
                >
                  <Leaf className="w-8 h-8 mb-4 mx-auto text-violet-400" />
                  <h3 className="text-xl font-bold mb-2">Nature</h3>
                  <p>Preserving and utilizing natural resources responsibly.</p>
                </motion.div>
                <motion.div
                  className="p-6 backdrop-blur-md bg-violet-900/20 rounded-lg"
                  //whileHover={{ scale: 1.05 }}
                >
                  <Wind className="w-8 h-8 mb-4 mx-auto text-violet-400" />
                  <h3 className="text-xl font-bold mb-2">Decentralization</h3>
                  <p>Empowering communities through blockchain technology.</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* New Dynamic Section */}
          <section className="relative border-t border-violet-600  py-20 px-4 bg-violet-950/30 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full max-w-[500px] h-[500px] mx-auto bg-violet-500/50 rounded-2xl "
                >
                  <Image
                    src="/WIND20.jpg"
                    alt="Wind Energy"
                    fill
                    className="rounded-2xl shadow-2xl object-cover"
                  />
                </motion.div>
              </div>

              <div className="relative lg:h-[600px] overflow-hidden p-3">
                {/* Static Content */}
                <div className="relative z-10 text-center mt-[50%] transform -translate-y-1/2">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{
                      background:
                        "linear-gradient(to right, rgb(167, 139, 250), rgb(103, 232, 249))",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Transforming Energy
                  </h2>
                  <p className="text-lg text-violet-100">
                    Join us in creating a sustainable future powered by wind
                    energy and blockchain technology.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 text-center bg-violet-950/80 border-t border-violet-800/50">
            <p className="text-sm text-violet-300">
              &copy; 2025 $WIND. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

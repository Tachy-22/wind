"use client";
import { motion } from "framer-motion";
import { Twitter, Send, Wind, Zap, Leaf, Globe } from 'lucide-react';
import Head from "next/head";

export default function Home() {
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
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
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
                  href="https://twitter.com/windtoken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-xl bg-violet-600 rounded-lg inline-block
                    relative overflow-hidden group hover:shadow-neon transition-shadow duration-300 flex items-center gap-2"
                >
                  <Twitter className="w-6 h-6" />
                  <span className="relative z-10">Twitter</span>
                  <motion.div
                    className="absolute inset-0 bg-violet-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </a>
                <a
                  href="https://t.me/windtoken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-xl bg-violet-600 rounded-lg inline-block
                    relative overflow-hidden group hover:shadow-neon transition-shadow duration-300 flex items-center gap-2"
                >
                  <Send className="w-6 h-6" />
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
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

          {/* Mission Section (New) */}
          <section className="py-16 px-4 bg-violet-950/50 backdrop-blur-sm">
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

          {/* Wind Energy Stats */}
          <section
            id="stats"
            className="px-4 py-16 text-center bg-violet-600/50 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              className=" w-full mx-auto p-8 rounded-2xl "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl text-violet-100 leading-relaxed">
                Did you know, that 1 hour of wind energy powers 1,000 homes.
                <span className="block mt-2 text-violet-300">
                  Imagine scaling this with $WIND.
                </span>
              </p>
            </motion.div>
          </section>

          {/* Why Wind? */}
          <section
            id="why-wind"
            className="min-h-screen px-4 py-16 bg-gradient-to-b from-violet-950/50 to-cyber-dark backdrop-blur-sm flex items-center justify-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-center">Why Wind?</h2>
              <p className="mt-4 text-lg text-center">
                Wind is limitless, sustainable, and the key to a greener
                tomorrow. $WIND represents the future.
              </p>
              <motion.div
                className="mt-8 flex justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/WIND12.jpg"
                  alt="Wind energy illustration"
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </section>

          {/* Join Section */}
          {/* <section
            id="join"
            className="min-h-screen px-4 py-16 text-center bg-violet-950/50 backdrop-blur-sm flex items-center justify-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-violet-100">Join $WIND</h2>
              <p className="mt-4 text-lg text-violet-200">
                Be part of the renewable revolution and meme token future.
              </p>
              <motion.div
                className="mt-8"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="#"
                  className="px-8 py-4 text-xl font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors border border-violet-400/50 shadow-lg shadow-violet-500/20"
                >
                  Buy $WIND Now
                </a>
              </motion.div>
            </div>
          </section> */}

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

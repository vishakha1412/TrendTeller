import React from 'react'
import { motion } from 'framer-motion';



export const Home = () => {
  return (
     <>
   <div className="min-h-screen bg-gradient-to-br from-pink-300 via-yellow-200 to-yellow-400 text-gray-900 font-sans  flex flex-col items-center justify-center text-center ">
      <div className="overflow-hidden whitespace-nowrap bg-yellow-100 py-2 text-sm font-semibold text-pink-600 rounded-3xl">
  <div className="animate-marquee inline-block rounded-2xl">
    #BreakingNews &nbsp; #LOLZone &nbsp; #MovieBuzz &nbsp; #TrendTeller &nbsp; #ViralVibes
  </div>
</div>


       

       
      <section className="flex flex-col items-center justify-center text-center ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-pink-600 drop-shadow-lg"
        >
          Welcome to TrendTeller
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-gray-800 max-w-xl"
        >
          Discover what’s trending across news, gifs, and movies. Curated, visualized, and made fun.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition"
        >
          Dive In
         </motion.button>
      </section>
      </div>
     


     </>
  )
}

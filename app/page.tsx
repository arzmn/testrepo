'use client'

import React from 'react'
import Hero from './Components/Hero'
import Logos from './Components/Logos'
import Working from './Components/Working'
import CtaSection from './Components/CtaSection'
import Features from './Components/Features'
import Pricing from './Components/Pricing'
export default function page() {
  return (
    <>
      <Hero />
      <Logos />
      <Working />
      <CtaSection/>
      <Features/>
      <Pricing/>
    </>
  )
}


import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain"/>
        <button type="button" onClick={() => window.open('https://github.com/intocor/Summarizer.git')} className="black_btn">
          GitHub 
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Pagod ka na bang magbasa kase tamad ka talaga simula palang noong ipinanganak ka?
        Pero ayaw mo namang bumagsak at nangangailangan ka lang ng motivation
        Well, hindi ito motivation tool. Open-source summarizer tool ito mare.
        Kaya, ito ang lifehack na para sa iyo.
      </h2>
    </header>
  )
}

export default Hero
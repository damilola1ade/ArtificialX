import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div data-aos="fade-down" className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Who are we?" text="Our team consists of a team of experienced experts, technology experts, business experts and community leaders. We have been able to use our expertise to achieve extraordinary results and are working daily to develop and deliver solutions for our clients that give them the full impact of their energy savings." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We are experts at helping you create an informed vision for your company while achieving financial results by providing comprehensive solutions." />
      <Feature title="Knowledgebase" text="It has been predicted that AI will be able to do almost any job a human being can do by 2030. In fact, it is estimated that AI could take over 50% of all jobs in the world by 2035." />
      <Feature title="Education" text="The field of AI research deals with the creation of intelligent machines that can perform tasks that are normally requiring human intelligence like facial recognition, voice transcription, natural language processing and more." />
    </div>
  </div>
);

export default WhatGPT3;

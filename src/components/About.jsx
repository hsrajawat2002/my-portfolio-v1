import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Hello, myself<code className="italic bold text-2xl"> Harshvardhan Singh</code>. I was born and brought up in Kanpur, 
        a vibrant city known for its rich cultural heritage. From a young age, 
        I developed a strong sense of dedication and a diligent work ethic. I completed 
        my schooling from KV IIT Kanpur.
        </p>

        <br />
        <p className="text-xl">
        I am currently pursuing my B.Tech in Electrical Engineering from <code className="bold text-2xl">IIT Jammu</code>, 
        where I have maintained a CGPA of <code className="bold text-2xl">8.02</code>. Alongside my academic pursuits, 
        I have a genuine passion for coding and problem-solving. I thoroughly enjoy challenging myself 
        with complex algorithms and logic puzzles, and I actively engage in platforms like  
        <code> <a className="bold text-2xl underline" href="https://leetcode.com/Harshvardhan_Singh_26/" rel="noreferrer" target="_blank">LeetCode</a> </code> to enhance 
        my skills and stay updated with the latest coding trends.
        </p>
      </div>
    </div>
  );
};

export default About;

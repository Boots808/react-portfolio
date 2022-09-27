import React from "react";
// import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section>
      <h1 id="about">All About Me</h1>
      <img
        src="./../../assets/images/headshot.PNG"
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Well hello there! My name is Bethany and I am an entry level full
          stack web developer. I recently completed a Full Stack Development
          boot camp through the University of Minnesota. - I have strong
          leadership skills and ability to multitask - I am an ambitious team
          player with clear oral and written communication, strong
          organizational skills, efficient time and project management, and
          proven proficiency to take initiative - I am a resourceful, organized,
          quick learner who can synthesize new information accurately and
          efficiently - Please check out my portfolio
        </p>
      </div>
    </section>
  );
}

export default About;

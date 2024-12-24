import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Krupin Arseni</h1>
        <a href='https://github.com/swiftEnjoer'>GitHub </a>
        <a href=''>Telegram </a>
        <a href="https://id.mail.ru/profile?utm_campaign=mailid&utm_medium=ph&from=headline">Email</a>
      </header>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>University: BSU</strong>, City — Minsk
            <br />
            Years Attended: 2023 - 2027
          </li>
        </ul>
      </section>

      <section className="experience">
        <h2>Work Experience : self-employment</h2>
      <p>As a self-employed frontend developer, I specialize in creating responsive and visually
         appealing web applications that enhance user experiences. With expertise in HTML, CSS, and JavaScript</p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Languages</h2>
        <ul>
          <li>English -C2</li>
          <li>Russian - Native</li>
          <li>Belarusian - Native</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
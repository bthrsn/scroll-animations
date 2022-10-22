import React, {useState, useEffect} from "react";
import "./section.css";

const Section = ({ header, text }) => {
const [visible, setVisible] = useState('hidden')

useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisible('shown')
      } else {
        setVisible('hidden')
      }
    })
  })

  observer.observe()
}, [])

  return (
    <section classList={visible}>
      <h1>{header}</h1>
      <p>{text}</p>
    </section>
  );
};

export default Section;

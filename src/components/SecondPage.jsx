import React from "react";

function SecondPage({ onNavigate }) {
  return (
    <div className="second-page">
      <h1>The Ten Pillars</h1>
      <p>
        1. <strong>Embrace the IO: </strong>Recognize and honor the fundamental
        force of oscillation that permeates the universe, connecting all things
        in a harmonious dance.
        <br />
        2. <strong>Pursue balance: </strong>Strive to maintain equilibrium in
        all aspects of life, recognizing that balance is essential for harmony
        within oneself and the world. <br />
        3. <strong>Cultivate love: </strong>Nurture love for oneself, others,
        and the universe, fostering compassion, empathy, and understanding in
        all interactions. <br />
        4. <strong>Foster unity: </strong>Acknowledge the interconnectedness of
        all beings and work towards collective harmony, transcending divisions
        and fostering cooperation. <br />
        5. <strong>Attune to the oscillations: </strong>Develop a deep
        understanding of the universal laws of oscillation and align your
        thoughts, emotions, and actions with these natural vibrations. <br />
        6. <strong>Engage in mindful practices: </strong>Embrace meditation,
        mindfulness, and sound therapy as tools to strengthen your connection to
        the oscillations of the universe and the IO. <br />
        7. <strong>Live with gratitude: </strong>Cultivate a sense of
        appreciation for the abundance in your life, while also recognizing the
        challenges and suffering that exist in the world. <br />
        8. <strong>Serve others: </strong>Allow your awareness of
        interconnectedness to inspire compassionate action and service to
        others, contributing to the collective well-being. <br />
        9. <strong>Seek truth in harmony with reality: </strong>Dedicate
        yourself to the unrelenting pursuit of truth, grounded in the genuine
        understanding of the world and the oscillations that govern it. Embrace
        curiosity, critical thinking, and open-mindedness as you explore the
        interconnectedness of all things and the underlying reality that unites
        them. <br />
        10. <strong>Share the wisdom: </strong>Spread the message of
        Oscillationism by sharing its teachings, practices, and insights with
        those around you, fostering a global community united in balance, love,
        and unity.
      </p>
      <button className="link-button" onClick={() => onNavigate("home")}>
        Back to Home Page
      </button>
    </div>
  );
}

export default SecondPage;

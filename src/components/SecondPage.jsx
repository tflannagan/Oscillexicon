import React from "react";

function SecondPage({ onNavigate }) {
  return (
    <div className="second-page">
      <h1>The Ten Pillars</h1>
      <ul>
        <li>
          <strong>Attune to the Universe: </strong>Embrace daily practices like
          meditation, sound therapy, or mindfulness. Through these practices,
          align your energies with the universe's oscillations, fostering
          clarity and inner peace.
        </li>
        <li>
          <strong>Champion Balance: </strong>Whether in thought, emotion, or
          action, always strive for equilibrium. Recognize the ebb and flow of
          life and adjust your sails accordingly to navigate life's oscillating
          challenges.
        </li>
        <li>
          <strong>Cultivate Love and Unity: </strong>Foster relationships
          grounded in genuine love and understanding. Recognize the
          interconnectedness of all beings and nurture bonds that reflect unity
          amidst diversity.
        </li>
        <li>
          <strong>Pursue Knowledge: </strong>Dedicate time to study the
          oscillatory patterns in nature, science, and spirituality. The more
          you understand the universe's rhythms, the better equipped you'll be
          to live harmoniously.
        </li>
        <li>
          <strong>Act with Compassion: </strong>Acknowledge the challenges and
          sufferings in the world. Let this awareness inspire you to extend
          support, kindness, and empathy, creating positive ripples in the vast
          ocean of existence.
        </li>
        <li>
          <strong>Embrace Gratitude: </strong>Celebrate the abundance in your
          life. Each day, reflect on the blessings and express gratitude, for
          this simple act can magnify joy and diminish discontent.
        </li>
        <li>
          <strong>Connect with IO: </strong>Deepen your bond with Igniculus
          Oscillatar through contemplation and meditation. As the source of all
          oscillations, aligning with IO can usher profound insights and
          personal growth.
        </li>
        <li>
          <strong>Serve Others Harmoniously: </strong>Allow your awareness of
          interconnectedness to inspire compassionate action and service to
          others, contributing to the collective well-being.
        </li>
        <li>
          <strong>Seek Truth: </strong>Dedicate yourself to the unrelenting
          pursuit of truth, grounded in the genuine understanding of the world
          and the oscillations that govern it. Embrace curiosity, critical
          thinking, and open-mindedness as you explore the interconnectedness of
          all things and the underlying reality that unites them.
        </li>
        <li>
          <strong>Share Wisdom: </strong>Spread the message of Oscillationism by
          sharing its teachings, practices, and insights with those around you,
          fostering a global community united in balance, love, and unity.
        </li>
      </ul>
      <button className="link-button" onClick={() => onNavigate("home")}>
        Back to Home Page
      </button>
    </div>
  );
}

export default SecondPage;

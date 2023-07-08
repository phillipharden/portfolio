import React from "react";
import LiftPhit from "../images/liftphit.png";
import PlayFit from "../images/playfit.png";
import PizzysPizza from "../images/pizzyspizza.png";

function Projects() {
  return (
    <div className="projects container">
      <h2>My Projects</h2>
      <hr className="rounded" />
      <div className="projects-container">
        <article className="project-article">
          <h3>Lift Phit</h3>

          <div className="project-article-container">
            <div className="project-img">
              <a href="https://github.com/Phillipiscoding/lift-phit">
                <img
                  src={LiftPhit}
                  alt="This is a screenshot of an application I built called Lift Phit"
                />
              </a>
            </div>

            <div className="project-info">
              <div className="project-description">
                <p>
                  Lift Phit is an app dedicated to workout tracking. With Lift
                  Phit, users have the ability to create an account, log in, and
                  seamlessly track their gym workouts.
                </p>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Phillipiscoding/lift-phit"
                  className="btn btn-primary"
                >
                  Code
                </a>
                <a
                  href="https://github.com/Phillipiscoding/lift-phit"
                  className="btn btn-primary"
                >
                  Live App
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="project-article">
          <h3>Play Fit</h3>
          <div className="project-article-container">
            <div className="project-img">
              <a href="https://github.com/Phillipiscoding/playfit">
                <img
                  src={PlayFit}
                  alt="This is a screenshot of an application that I developed called Play Fit."
                />
              </a>
            </div>

            <div className="project-info">
              <div className="project-description">
                <p>
                  I developed this app to demonstrate my API integration
                  abilities. With Play Fit, users can easily search for artists,
                  albums, and songs by connecting to the Spotify API.
                  Additionally, the app connects to an exercise API, enabling
                  users to search for exercises and view detailed descriptions
                  and demos on how to perform them.
                </p>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Phillipiscoding/playfit"
                  className="btn btn-primary"
                >
                  Code
                </a>
                <a
                  href="https://github.com/Phillipiscoding/playfit"
                  className="btn btn-primary"
                >
                  Live App
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="project-article">
          <h3>Pizzys Pizza</h3>
          <div className="project-article-container">
            <div className="project-img">
              <a href="https://phillipiscoding.github.io/pizzyspizza/">
                <img
                  src={PizzysPizza}
                  alt="This is a screenshot of a fictional pizzera's website called Pizzys Pizza"
                />
              </a>
            </div>

            <div className="project-info">
              <div className="project-description">
                <p>
                  I designed this website for a fictional pizzeria, drawing
                  inspiration from the underwhelming online presence of local
                  small business restaurants. My goal is to inspire them to
                  consider allowing me to enhance their websites, providing a
                  much-needed boost to their online marketing efforts.
                </p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Phillipiscoding/pizzyspizza"
                  className="btn btn-primary"
                >
                  Code
                </a>
                <a
                  href="https://phillipiscoding.github.io/pizzyspizza/"
                  className="btn btn-primary"
                >
                  Live App
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

    </div>
  );
}

export default Projects;

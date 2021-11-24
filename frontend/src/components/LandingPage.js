import React from 'react';
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import "../styles/LandingPage.css"

//images
import Matt from '../assets/LandingPage/MattDillon.jpg'
import Will from '../assets/LandingPage/WillSanders.jpg'
import John from '../assets/LandingPage/JohnQuattrocchi.png'
import Express from '../assets/LandingPage/ExpressJS.png'
import Crayons from '../assets/LandingPage/Crayons.jpg'
import StoryPaint from '../assets/LandingPage/StoryPaint2.png'
import PaintExample from '../assets/LandingPage/StoryPaintExample.png'
import Elephant from '../assets/LandingPage/ElephantExample.png'
import Peppa from '../assets/LandingPage/PeppaPigExample.png'
export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/color");
  };
  const handleClick2 = () => {
    navigate("/login");
  };
  return (
    <Box className="LandingPage" sx={{ paddingTop: "10rem" }}>
      <div class="container-fluid">
        <div class="d-flex justify-content-center LandingPage-logo">
          <img class="img-fluid" id="title" src={StoryPaint} alt="StoryPaintTitle" />
        </div>
      </div>

      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-6 col-lg-12 col-md-12 col-12">
            <h2 class="text-center">Choose from different stories</h2>
            <div class="row d-flex justify-content-center">
              <img class="img-thumbnail img-fluid mb-3" id="example1" src={PaintExample}
                alt="StoryPaintExample" />
            </div>
            <div class="row ">
              <div class="col-md-6 col-12 mb-3 d-flex justify-content-center">
                <img src={Elephant} alt="ElephantExample" id="example2" class="img-thumbnail img-fluid" />
              </div>
              <div class="col-md-6 col-12 d-flex justify-content-center">
                <img src={Peppa} alt="" id="example2" class="img-thumbnail img-fluid" />
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-6 col-md-8 col-sm-10 m-1  text-white text-center p-5">
            <div class="bg-dark bg-opacity-75 p-xl-5 p-3">
              <h2 class="mb-4 text-white text-center">Log in/Create an Account</h2>
              <p class="m-0">Create an account to save all your progress to your profile and download them anytime. Otherwise, continue as a guest,
                where you can still download any of your completed pictures.</p>
              <button onClick={handleClick} class="btn btn-secondary m-3">
                Continue as Guest
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container" id="developers">
        <h2 class="display-5 fw-bold text-center pt-3 pb-2">Developers</h2>
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-8 col-12">
              <div class="card text-center bg-light bg-opacity-25 mb-4">
                <div class="card-header bg-dark bg-opacity-25 fw-bold fs-3">
                  Matthew Dillon
                </div>
                <div class="card-body bg-light bg-opacity-50">
                  <img class="img-thumbnail" src={Matt} alt="MattDillon" />
                  <h5 class="card-title">Full Stack Developer</h5>
                  <p class="card-text">
                    Matthew is a life long computer lover with a professional background in the
                    casino
                    industry, where he worked in management for 10 years.His passion now is in
                    coding,
                    where he's
                    looking for his first software developer role.Matthew continues to improve his
                    skills and loves
                    the endless learning that programming provides.
                  </p>
                </div>
                <div class="card-footer bg-dark bg-opacity-25">
                  <span>
                    <a href="https://www.linkedin.com/in/coderdill/" target="_blank">
                      <i class="fab fa-linkedin fa-2x me-2"></i>
                    </a>
                    <a href="https://github.com/coderdill" target="_blank">
                      <i class="fab fa-github fa-2x me-2"></i>
                    </a>
                    <a href="https://www.facebook.com/coderdill" target="_blank">
                      <i class="fab fa-facebook-square fa-2x me-2"></i>
                    </a>
                    <a href="https://www.twitter.com/coderdill" target="_blank">
                      <i class="fab fa-twitter-square fa-2x me-2"></i>
                    </a>
                    <a href="https://www.coderdill.com/" target="_blank">
                      <i class="fas fa-globe fa-2x"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-8 col-12">
              <div class="card text-center bg-light bg-opacity-25 mb-4">
                <div class="card-header bg-dark bg-opacity-25 fw-bold fs-3 ">
                  Will Sanders
                </div>
                <div class="card-body bg-light bg-opacity-50">
                  <img class="img-thumbnail" src={Will} alt="WillSanders" />
                  <h5 class="card-title">Full Stack Developer</h5>
                  <p class="card-text">
                    ************************
                  </p>
                </div>
                <div class="card-footer bg-dark bg-opacity-25">
                  <span>
                    <a href="https://www.linkedin.com/in/williamsanders81/" target="_blank">
                      <i class=" fab fa-linkedin fa-2x me-2"></i>
                    </a>
                    <a href="https://github.com/wsanders81/" target="_blank">
                      <i class="fab fa-github fa-2x me-2"></i>
                    </a>
                    <a href="https://willsanders.dev/" target="_blank">
                      <i class="fas fa-globe fa-2x"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-8 col-12">
              <div class="card text-center bg-light bg-opacity-25 mb-4">
                <div class="card-header bg-dark bg-opacity-25 fw-bold fs-3 container-fluid">
                  John Quattrocchi Jr
                </div>
                <div class="card-body bg-light bg-opacity-50">
                  <img class="img-thumbnail" src={John}
                    alt="JohnQuattrocchi" />
                  <h5 class="card-title">UX/UI Designer</h5>
                  <p class="card-text">
                    John began his coding journey in early 2021 upon joining a
                    Springboard program. He has a background in the poker and
                    casino industry. Throughout his career he has had the
                    opportunity to hone his large scale project and event
                    management skills. John has a genuine and life-long interest
                    in advancing technologies (and gaming in his spare time).
                  </p>
                </div>
                <div class="card-footer bg-dark bg-opacity-25">
                  <span>
                    <a href="https://www.linkedin.com/in/jquatjr/" target="_blank">
                      <i class="fab fa-linkedin fa-2x me-2"></i>
                    </a>
                    <a href="https://github.com/jquatjr" target="_blank">
                      <i class="fab fa-github fa-2x me-2"></i>
                    </a>
                    <a href="https://www.facebook.com/gotacrotchy" target="_blank">
                      <i class="fab fa-facebook-square fa-2x me-2"></i>
                    </a>
                    <a href="https://www.twitter.com/johnqtd" target="_blank">
                      <i class="fab fa-twitter-square fa-2x me-2"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <hr />
      </div>
      <div class="container bg-light bg-opacity-50 pb-4">
        <div class="row">
          <h4 class="text-center">This App Brought to You By:</h4>
          <div class="col-2"></div>
          <div class="col-4 text-center">
            <div class="fs-5 fw-bold">Front End</div>
            <li>
              <span>
                <i class="fab fa-react"></i> React.js
              </span>
            </li>

            <li>Material.Ui</li>
            <li>
              <span>
                <i class="fab fa-bootstrap"></i> Bootstrap
              </span>
            </li>
            <li>JQuery</li>
          </div>
          <div class="col-4 text-center">
            <div class="fs-5 fw-bold">Back End</div>
            <li>
              <span>
                <i class="fab fa-node"></i> Node.js
              </span>
            </li>
            <li>
              <img id="express" src={Express} alt="ExpressNode" />
              Express.js
            </li>
            <li>Node-postgres</li>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </Box >
  );
}

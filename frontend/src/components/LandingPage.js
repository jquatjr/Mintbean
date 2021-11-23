import { Paper, Box, Typography, Button } from "@mui/material";
import React from 'react';
import { useNavigate } from "react-router";
import '../styles/LandingPage.css'
export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/color");
  };
  const handleClick2 = () => {
    navigate("/login");
  };
  return (
    <Box sx={{ paddingTop: "10rem" }}>
      <div class="container-fluid">
        <div class="d-flex justify-content-center LandingPage-logo">
          <img id="title" src="/assets/StoryPaint2.png" alt="" />
        </div>
        <div class="row"></div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col col-2"></div>
          <div class="col col-8">
            <h2 class="text-center">Paint a coloring book with a story</h2>
            <p class="fw-light fs-4 text-center">
              Create an account to save all your progress and pick up where you
              left off next time. Otherwise, continue as a guest,
              where you can still download your book.
            </p>
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-10 m-1 bg-dark bg-opacity-75 text-white text-center p-5">
            <h2 class="mb-4 text-white text-center">Create an Account</h2>
            <div class="row">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Username</span>
                <input type="text" class="form-control" placeholder="Username" />
              </div>
            </div>
            <div class="row">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Password</span>
                <input
                  type="text"
                  required
                  class="form-control"
                  placeholder="Password"
                />
              </div>
            </div>

            <span>
              <button
                onClick={handleClick2}
                class="btn btn-secondary m-md-3 m-sm-2 m-3"
              >
                Create Account
              </button>
              <button
                onClick={handleClick}
                class="btn btn-secondary m-md-3 m-sm-2 m-3"
              >
                Continue as Guest
              </button>
            </span>
          </div>
        </div>
      </div>

      <div class="container">
        <h2 class="display-5 fw-bold text-center pt-3 pb-2">Developers</h2>
        <div class="container">
          <div class="row">
            <div class="col col-sm-4">

            </div>
          </div>
        </div>

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
              <img id="express" src="ExpressJS.png" alt="" />
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
    </Box>
  );
}

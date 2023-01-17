<!-- ABOUT THE PROJECT -->

## About The Project

[![Feedback App Screen Shot][product-screenshot]](https://awave.fi)

Simple web app to submit & edit feedback. Made for learning and practising purpose.

# Built with

- [![React][react.js]][react-url]
- [json-server][json-server-url] (Emulate the backend json service)
- [concurrently][concurrently-url] (To run concurrently app and json-server)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

You can download and install the project following below steps.

1. Clone the repo
   ```sh
   git clone https://github.com/teppana88/feedback-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the app and json-server in concurrently mode
   ```js
   npm dev
   ```
   This will run json-server on port :3001 and React on port :3000.\
   (On macOS Ventura by default the json-server port 5000 is blocked, use port 3001 or enable 5000 port on OS level.)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs concurrently app and json-server on local.\
You can also run below scripts individually but these won't start json-server.

Some other basic React scripts also included.

<!-- CONTACT -->

## Contact

About me - [@teemupiirainen](https://twitter.com/teemupiirainen) - teemu.piirainen[at].awave.fi

Project Link: [https://github.com/teppana88/feedback-app.git](https://github.com/teppana88/feedback-app.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[concurrently-url]: https://www.npmjs.com/package/concurrently
[json-server-url]: https://www.npmjs.com/package/json-server
[product-screenshot]: public/Feedback-app.png

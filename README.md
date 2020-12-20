# Logger
Just a javascript logger

[![Coverage Status](https://coveralls.io/repos/github/boazhoch/Logger/badge.svg?t=73ePoQ)](https://coveralls.io/github/boazhoch/Logger)


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img src="/logo.png" alt="Logo" width="80" height="80">
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Logger is Typescript library that utilize all the great benefits of modern javascript with the latest apis.
It's remove the effort of how to use it, it's ease and flexible.

### Built With

* [Typescript](https://www.typescriptlang.org/)
* [Rollup](https://rollupjs.org/guide/en/)
* [eslint](https://eslint.org/)

<!-- GETTING STARTED -->
## Getting Started

### Installation

Support of ESM and cjs, just run `npm install -S logger` to install.


<!-- USAGE EXAMPLES -->
## Usage

```typescript
import LoggerFactory from "logger"

const logger = LoggerFactory(); // You can pass options to logger, once you initilize logger it will get the same instance back ( Logger is singleton ).
const person = { firstName: "Ploni", lastName: "Almoni" }
  
logger.debug`Hey ${person}` // output: Hey { firstName: "Ploni", lastName: "Almoni" }
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Boaz Hoch - boazmier@gmail.com

Project Link: [https://github.com/boazhoch/Logger](https://github.com/boazhoch/Logger)

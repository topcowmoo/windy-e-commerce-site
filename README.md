<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/topcowmoo/windy-e-commerce-site">
    <img src="./assets/images/SMfavicon-32x32.png" alt="Logo" width="70" height="70">
  </a>

<h3 align="center">Windy E-Commerce Site</h3>

  <p align="center">
   I was challenged with building the back end for an e-commerce site. I took a working Express.js API and configured it to use Sequelize to interact with a MYSQL database. This site can now search, update, create and delete data from the database. I used Insomnia to test the routes and have provided some screenshots below to show functionality.

To see how the site works on the back end, please view my demo:

https://drive.google.com/file/d/1q_LhyzKBZ6-6fw9hbPgev_rvDWNz-TUh/view

  <br />
    <a href="https://github.com/topcowmoo/windy-e-commerce-site"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://pacific-basin-11264-4d339f96ea1b.herokuapp.com/">Link to Deployed app on Heroku</a>
    · -->
    <a href="https://github.com/topcowmoo/windy-e-commerce-site/issues">Report Bug</a>
    ·
    <a href="https://github.com/topcowmoo/windy-e-commerce-site/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

An E-Commerce site configured with a working Express.js API which uses Sequelize to interact with a MySQL database.

Creating and sourcing schema in database:

![image](https://github.com/topcowmoo/windy-e-commerce-site/assets/149528212/abe0121d-89d5-4a8e-b145-9864c3b958cf)

Seeding the database:

![image](https://github.com/topcowmoo/windy-e-commerce-site/assets/149528212/cd88f48e-be69-42a3-ac93-c43c4ed5d858)

Server is started:

![image](https://github.com/topcowmoo/windy-e-commerce-site/assets/149528212/ce132cfb-6929-461f-bc2c-3188979e83d9)

Example of a GET request of one Product in Insomnia:

![image](https://github.com/topcowmoo/windy-e-commerce-site/assets/149528212/a9bf0575-9c40-4c40-9723-3116d62a9e06)

Example of a PUT request to update a Category in Insomnia:

![image](https://github.com/topcowmoo/windy-e-commerce-site/assets/149528212/b9c9542b-31ee-42b6-b8a1-3b32c83af094)

Example of a DELETE request to delete a Tag by Id in Insomnia:

![image](https://github.com/topcowmoo/windy-e-commerce-site/assets/149528212/f3fdd26d-914e-4bf5-9de7-7dbed13df622)

Example of a POST request to create a new Tag in Insomnia:

![image](https://github.com/topcowmoo/windy-e-commerce-site/assets/149528212/c2e26d6d-9cbf-429b-9edb-3c0684260906)

<!-- BUILT WITH -->

## Built With

<a href="HTML-url">
  <img src="./assets/images/nodejs.png" alt="Alt text" width="45" height="45">
  <img src="./assets/images/javascript.png" alt="Alt text" width="45" height="45">
  <img src="./assets/images/apps-insomnia.png" alt="Alt text" width="45" height="45">
  <img src="./assets/images/mysql-original-wordmark.png" alt="Alt text" width="45" height="45">
</a>

<!-- INSTALLATION -->

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/topcowmoo/windy-e-commerce-site
   ```
2. Install NPM packages
   ````sh
   npm install   ```
   ````
3. Create and source the schema from the terminal
   ````sh
   CREATE DATABASE ecommerce_db;
   source ./db/schema.sql   ```
   ````
4. Seed the database from the terminal
   ````sh
   npm run seed ```
   ````
5. Start the server from the terminal
   ````sh
   npm start ```
   ````

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Salvatore Mammoliti - [@github](https://github.com/topcowmoo) - mammoliti.sam@gmail.com

Project Link: [https://github.com/topcowmoo/windy-e-commerce-site](https://github.com/topcowmoo/windy-e-commerce-site)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Pair Programing with Sahil Banati](https://github.com/sbanati)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [ChatGPT](https://chat.openai.com/)
- [Best README Template](https://github.com/othneildrew/Best-README-Template)
- [Iconduck](https://iconduck.com/)
- [Shields.io](https://shields.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

![GitHub language stats](https://img.shields.io/github/languages/top/topcowmoo/windy-e-commerce-site)

![Languages](https://img.shields.io/github/languages/count/topcowmoo/windy-e-commerce-site)

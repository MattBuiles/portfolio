# Portfolio Website

This is a portfolio website designed to showcase personal information, experience, projects, and certifications in an elegant and attractive manner.

## Project Structure

The project is organized as follows:

```
portfolio-website
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── main.css         # Main styles for the website
│   │   │   └── responsive.css    # Responsive styles for various screen sizes
│   │   ├── js
│   │   │   └── main.js          # JavaScript for interactivity
│   │   └── fonts                # Custom font files
│   ├── components
│   │   ├── Header.js            # Navigation bar and website title
│   │   ├── About.js             # Personal information and background
│   │   ├── Experience.js        # Work experience and skills
│   │   ├── Projects.js          # List of projects with descriptions and links
│   │   ├── Certificates.js       # Display of obtained certifications
│   │   ├── Contact.js            # Contact form for visitors
│   │   └── Footer.js            # Copyright information and social media links
│   ├── data
│   │   ├── projects.json        # JSON data for projects
│   │   ├── experience.json      # JSON data for experience
│   │   └── certificates.json     # JSON data for certificates
│   ├── pages
│   │   └── index.html           # Main HTML file
│   └── app.js                   # Application initialization and state management
├── package.json                  # npm configuration file
├── .gitignore                    # Git ignore file
└── README.md                     # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the portfolio website.

## Features

- **Responsive Design**: The website is designed to be fully responsive, ensuring a great user experience on all devices.
- **Interactive Components**: JavaScript is used to add interactivity, such as form handling and animations.
- **Dynamic Data**: Projects, experience, and certificates are loaded from JSON files, making it easy to update content.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
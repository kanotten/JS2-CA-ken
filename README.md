
# Vibeo Project

Vibeo is a social media-style website where users can log in, register, and view a feed of posts. The project uses Tailwind CSS for styling, ensuring a responsive and clean design. Below are the steps to set up, run, and understand the structure of the project.

## Project Structure

Here is the file tree for the project:

```
Vibeo/
├── assets/
│   └── vibeo1.png          # Image for the hero banner
├── dist/                   # Compiled CSS and other assets
├── index.html              # Login page (Login form)
├── register.html           # Registration page (Registration form)
├── feed.html               # Home page (Feed with posts)
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # NPM dependencies and scripts
├── postcss.config.js       # PostCSS configuration (used for Tailwind CSS)
└── README.md               # Project documentation
```

## Prerequisites

To run the project locally, you'll need the following tools installed:

1. **Node.js** (preferably version 18 or later)
   - Download and install from [nodejs.org](https://nodejs.org/).
2. **NPM** (Node Package Manager) – this comes with Node.js.

## Installation

1. **Clone the repository** (or download the project files):

   ```bash
   git clone <repository-url>
   cd vibeo
   ```

2. **Install the required dependencies**:

   Navigate to the project folder and run the following command to install all required dependencies.

   ```bash
   npm install
   ```

   This will install Tailwind CSS, PostCSS, and other necessary packages.

## Project Setup

After installing the dependencies, you need to set up Tailwind CSS. The project is configured to use Tailwind for styling, and PostCSS to compile Tailwind styles.

### Tailwind Setup

The project already includes a `tailwind.config.js` file and PostCSS configuration, so no extra setup is needed. Tailwind is automatically configured for your styles.

### File Structure

1. **index.html** – Login page for users to log in to their accounts.
2. **register.html** – Registration page for new users to sign up.
3. **feed.html** – Home page where users can see a feed of posts.

All pages utilize Tailwind CSS for responsive and flexible design.

### PostCSS Configuration

Tailwind is integrated using PostCSS. The `postcss.config.js` file is already set up for you, so the following command will build the styles:

```bash
npx tailwindcss build src/styles.css -o dist/styles.css
```

This will take the `src/styles.css` file and use Tailwind’s CLI to generate the final `dist/styles.css` file.

## Running the Project Locally

1. **Start the development server**:

   You can use a simple local server or use NPM scripts to start the project. Here's how you can do it using the `lite-server`:

   ```bash
   npm install --save-dev lite-server
   ```

2. **Start the server**:

   Add the following script to your `package.json` file under `scripts`:

   ```json
   "scripts": {
     "start": "lite-server"
   }
   ```

   Run this command to start the server:

   ```bash
   npm start
   ```

   This will open the project in your default web browser.

## Usage

Once the server is running, you can navigate to the following pages:

- **Login Page** – `index.html`
  - Users can log in to their accounts using this page.

- **Registration Page** – `register.html`
  - Users can sign up for an account here.

- **Home Feed Page** – `feed.html`
  - After logging in, users can view a feed of posts.

### Tailwind Design

Each page is styled using **Tailwind CSS**, and the design is **responsive**. The following features are included:

- **Responsive Grid Layout for Posts** – On the feed page, posts are displayed in a flexible grid layout.
- **Hover Effects** – Posts have interactive hover effects to enhance user experience.
- **Navigation Bar** – The header includes a navigation bar with links to the home, create post, profile, and logout.

## Tailwind Customization

Tailwind’s default configuration is used, but you can customize the design by editing the `tailwind.config.js` file. Here, you can adjust colors, breakpoints, and other aspects of the design.

### Adding New Pages or Components

To add new pages or components:

1. **Create new HTML files** for each new page.
2. **Include Tailwind classes** in the new pages to ensure the design stays consistent.
3. **Link the new pages** from your existing pages (such as adding links to the navigation bar).

## Contributing

If you'd like to contribute to the project:

1. **Fork the repository** and create a new branch.
2. **Make your changes** and commit them.
3. **Submit a pull request** for review.

## License

This project is open-source and available under the [MIT License](LICENSE).

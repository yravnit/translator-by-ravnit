# AI-Powered Language Translation Web App

## Overview

This is a modern, user-friendly web application that enables text translation between different languages. Built using **React.js**, the app integrates with the **Lingva API** for translating text, while offering a seamless and responsive UI. It supports light and dark modes with a glassy design and is optimized for deployment on **GitHub Pages**.

### Key Features:

-   **Text Translation:** Translate text between different languages using the Lingva API.
-   **Language Selection:** Easily choose from a list of supported languages.
-   **Audio Support:** Listen to translations via audio playback.
-   **Light/Dark Modes:** Toggle between light and dark themes for a better user experience.
-   **Responsive Design:** Optimized for desktop and mobile devices.
-   **Modern UI:** Tailored design with Tailwind CSS and Material Design elements.

## Tech Stack

-   **Frontend:** React.js, Tailwind CSS, JavaScript
-   **Backend:** Serverless Functions (Netlify or Vercel)
-   **API:** Lingva API (REST and GraphQL)
-   **Deployment:** GitHub Pages (Frontend), Netlify/Vercel (Backend)

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/) (Node Package Manager)

### Steps to Set Up the Project Locally

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yravnit/translator-by-ravnit.git
    cd translator-by-ravnit
    ```

2. **Install Dependencies:**
   In your terminal, run the following command to install all required dependencies for both the frontend and backend:

    ```bash
    npm install
    ```

3. **Run the Development Server:**
   To run the development server, use:

    ```bash
    npm run dev
    ```

    The frontend should now be running at `http://localhost:3000`.

4. **Deploy to GitHub Pages:**
   To deploy the app to GitHub Pages, use the following command:

    ```bash
    npm run deploy
    ```

    The site will be available at `https://<your-username>.github.io/translator-by-ravnit/`.

### Testing the Translation:

1. Select a source language.
2. Select a target language.
3. Input text to translate.
4. Click **Translate** to view the translated text and listen to the audio pronunciation.

## How It Works

1. **Frontend Interface:** The frontend allows users to input text, select source and target languages, and click the translate button.
2. **Backend Communication:** The frontend sends translation requests to the serverless backend (hosted on Netlify/Vercel), which processes the translation through the Lingva API.
3. **Displaying Translations:** After retrieving the translated text, it is displayed on the frontend, along with an optional audio pronunciation.

## API Endpoints

### 1. Translation Endpoint

**GET** `/api/v1/:source/:target/:query`

-   **Description:** Translates the given query text from the source language to the target language.
-   **Response:**

    ```json
    {
      "translation": "Translated text here",
      "info": { ... }
    }
    ```

### 2. Audio Endpoint

**GET** `/api/v1/audio/:lang/:query`

-   **Description:** Retrieves the audio pronunciation of the translated text.
-   **Response:**

    ```json
    {
      "audio": [1, 2, 3, 4, ...]
    }
    ```

### 3. Languages Endpoint

**GET** `/api/v1/languages/?:(source|target)`

-   **Description:** Fetches the list of available languages for translation.
-   **Response:**

    ```json
    {
      "languages": [
        { "code": "en", "name": "English" },
        { "code": "es", "name": "Spanish" },
        { "code": "fr", "name": "French" },
        ...
      ]
    }
    ```

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add feature'`).
4. Push to your fork (`git push origin feature-name`).
5. Open a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

-   Thanks to [Lingva API](https://github.com/thedaviddelta/lingva-translate) for providing the translation API.
-   Tailwind CSS for the elegant and responsive design.
-   [React.js](https://reactjs.org/) for building the frontend.

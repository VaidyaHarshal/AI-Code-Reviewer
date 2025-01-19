# AI-Code-Reviewer

AI-Code-Reviewer is a powerful tool designed to streamline and enhance the process of code review using AI. The application leverages the Codellama:7b model from Ollama to provide insightful feedback on code quality, style, and potential improvements. It features a server-client architecture, ensuring seamless interaction between the user and the AI engine.

## Features
- **Automated Code Review**: Generate feedback on code quality, potential bugs, and optimization suggestions.
- **Server-Client Architecture**: Modular design for scalability and easy deployment.
- **Codellama Integration**: Utilize Codellama:7b for state-of-the-art AI-powered code analysis.

## Prerequisites
- [Ollama](https://ollama.com/download) installed and configured.
- Node.js and npm installed for running the client and server.
- Access to the Codellama:7b model(ollama run codellama:7b).

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/AI-Code-Reviewer.git
    cd AI-Code-Reviewer
    ```

2. **Install Dependencies**
    Navigate to both the `server` and `client` directories and install dependencies:
    ```bash
    cd server
    npm install
    cd ../client
    npm install
    ```

3. **Setup Codellama**
    Ensure Codellama:7b is downloaded and configured with Ollama on your machine.

## Usage

1. **Start the Server**
    ```bash
    cd server
    node index.js
    ```

2. **Start the Client**
    ```bash
    npm run dev
    ```

3. **Access the Application**
    Open your web browser and navigate to:
    ```
    http://localhost:5173/
    ```

4. **Upload Code for Review**
    Use the interface to write your code or paste it directly. The AI will provide feedback and suggestions.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with your suggestions and improvements.


## Acknowledgments
- [Ollama](https://ollama.com) for providing the Codellama model.

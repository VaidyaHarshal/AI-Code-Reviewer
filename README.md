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
    Navigate to AI-Code-Reviewer directory and install dependencies:
    ```bash
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

2. **Start the Client in AI-Code-Reviewer folder**
    ```bash
    npm run dev
    ```

3. **Run the ollama model in terminal**
    ```bash
    ollama run codellama:7b
    ```

5. **Access the Application**
    Open your web browser and navigate to:
    ```
    http://localhost:5173/
    ```

5. **Write/Paste Code for Review**
    Use the interface to write your code or paste it directly. The AI will provide feedback and suggestions.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with your suggestions and improvements.


## Acknowledgments
- [Ollama](https://ollama.com) for providing the Codellama model.

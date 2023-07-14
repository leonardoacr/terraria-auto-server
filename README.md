# Terraria Auto-Server

This script automates the process of creating a Terraria server and exposing it through ngrok. It simplifies the setup by handling the server creation, configuration, and providing the public IP and port for users to connect to. You can easily change to adapt to your needs. 

<div align="center">

`` `Run and expose your own server with only one click` ``

</div>


## Installation

- Clone this repository or download the script files.
- Navigate to the project directory in your terminal or command prompt.
- Install the required dependencies by running the following command:

   ```shell
   npm install
   ```

### Expose your localhost with Ngrok
In order to make it possible for people to access your server, you need to expose your localhost to the public. It's important to note that this approach is not meant for production purposes and should only be used for personal usage. I recommend using a service such as Ngrok to securely expose your localhost to the internet.

- Download Ngrok from the official website: https://ngrok.com/download

- Get your key installed so you can use ngrok.

- Unzip the downloaded file to a location of your choice.

- Rename the `.env.example` file to `.env`.

- Open the `.env` file and update the following variables:

   - `TERRARIA_SERVER_PATH`: The path to the Terraria server executable.
   - `NGROK_EXE_PATH`: The path to the Ngrok executable.

   Example `.env` file:

   ```plaintext
   TERRARIA_SERVER_PATH='/path/to/terraria/TerrariaServer.exe'
   NGROK_EXE_PATH='/path/to/ngrok/ngrok.exe'
   ```

- Ngrok will generate a public URL that you can use to access your localhost from anywhere. Open a terminal or command prompt and run the following command to start the automated process:

   ```shell
   node index.js
   ```

- Wait the program to perform the automations.

- Copy the IP:PORT and test on Terraria Multiplayer IP option. If it is running, you can share with your friends! The next times you use this, you will just need to run the last command.
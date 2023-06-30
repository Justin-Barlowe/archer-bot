<!DOCTYPE html>
<html>

<body>
  <h1>Discord Reply Bot - WheresArcher</h1>
  <p>
    The Discord Reply Bot - WheresArcher is a Node.js-based Discord bot that responds with the whereabouts of a user named
    Archer, who claimed to be playing Call of Duty but is actually somewhere else. You can use the code and change the name for
    those flaky gaming friends.  
  </p>

  <h2>Features</h2>
  <ul>
    <li>Detects the command <code>/wheresarcher</code> in Discord channels.</li>
    <li>Responds with a custom message revealing Archer's current location.</li>
  </ul>

  <h2>Prerequisites</h2>
  <ul>
    <li>Node.js (version 16.0.0 or higher)</li>
    <li>Discord Bot Token (Create a bot on the Discord Developer Portal and obtain the token)</li>
  </ul>

  <h2>Installation</h2>
  <ol>
    <li>
      Clone the repository:
      <pre><code>git clone https://github.com/your-username/discord-reply-bot-wheresarcher.git</code></pre>
    </li>
    <li>
      Navigate to the project directory:
      <pre><code>cd discord-reply-bot-wheresarcher</code></pre>
    </li>
    <li>
      Install the required dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>
      Create a <code>.env</code> file in the project root and add the following line, replacing
      <code>&lt;token&gt;</code> with your actual bot token:
      <pre><code>token=&lt;YOUR_DISCORD_BOT_TOKEN&gt;</code></pre>
    </li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>Start the bot:
      <pre><code>npm start</code></pre>
    </li>
    <li>
      Add the bot to your Discord server by following the Discord Developer Portal instructions.
    </li>
    <li>
      In any text channel, type <code>/wheresarcher</code> to trigger the bot's response with Archer's current location.
    </li>
  </ol>

  <h2>Customization</h2>
  <p>
    You can customize the response message by modifying the <code>wheresarcher.js</code> file in the project. Look for the
    <code>messages</code> array and update the response message accordingly.
  </p>

  <h2>Contributing</h2>
  <p>
    Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue on
    the GitHub repository.
  </p>

  <h2>License</h2>
  <p>
    This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.
  </p>
</body>

</html>

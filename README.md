# 🚀 Git Commit Message Generator

An intelligent VS Code extension that generates meaningful commit messages using AI. Supports multiple AI providers including OpenAI, Claude, Gemini, local models via Ollama, and custom endpoints.

## ✨ Features

- 🤖 **Multiple AI Providers**: OpenAI (GPT), Anthropic (Claude), Google (Gemini), Ollama (local models), or custom APIs
- 🎨 **Customizable Styles**: Conventional Commits, Simple, or Detailed formats
- ⚡ **One-Click Generation**: Generate commit messages directly from the Source Control view
- 🔄 **Flexible Actions**: Use message, commit directly, copy to clipboard, or edit before applying
- 🏠 **Privacy-Friendly**: Support for local models via Ollama (no data sent to cloud)
- 🔧 **Highly Configurable**: Customize model, endpoint, and message style

## 📦 Installation

### Option 1: Install from Source (Development)

1. **Clone or download this repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Compile the extension**:
   ```bash
   npm run compile
   ```

4. **Run the extension**:
   - **Mac**: Press `Cmd + Shift + D` (opens Run & Debug), then click green ▶️ button
   - **Or**: Press `Fn + F5` (Mac) or `F5` (Windows/Linux)
   - **Or**: Menu → `Run` → `Start Debugging`
   - A new "Extension Development Host" window will open

### Option 2: Package and Install

1. **Install vsce** (if not already installed):
   ```bash
   npm install -g @vscode/vsce
   ```

2. **Package the extension**:
   ```bash
   npm run package
   vsce package
   ```

3. **Install the .vsix file**:
   - In VS Code: `Extensions` → `...` → `Install from VSIX...`
   - Or use command: `code --install-extension git-commit-msg-generator-1.0.0.vsix`

## ⚙️ Configuration

### 1. Select Your AI Provider

Open VS Code Settings (`Cmd+,` or `Ctrl+,`) and search for "Git Commit Message Generator"

#### Option A: OpenAI (GPT-3.5, GPT-4)

1. Get an API key from [OpenAI](https://platform.openai.com/api-keys)
2. Configure in settings:
   - **AI Provider**: `openai`
   - **OpenAI API Key**: Your API key
   - **OpenAI Model**: `gpt-3.5-turbo`, `gpt-4`, or `gpt-4-turbo`

#### Option B: Anthropic (Claude)

1. Get an API key from [Anthropic](https://console.anthropic.com/)
2. Configure in settings:
   - **AI Provider**: `anthropic`
   - **Anthropic API Key**: Your API key
   - **Anthropic Model**: `claude-3-opus-20240229`, `claude-3-sonnet-20240229`, or `claude-3-haiku-20240307`

#### Option C: Google (Gemini)

1. Get an API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Configure in settings:
   - **AI Provider**: `google`
   - **Google API Key**: Your API key
   - **Google Model**: `gemini-pro`, `gemini-1.5-pro`, or `gemini-1.5-flash`

#### Option D: Ollama (Local Models - Recommended for Privacy)

1. Install [Ollama](https://ollama.ai/)
2. Pull a model:
   ```bash
   ollama pull llama2
   # Or other models: codellama, mistral, phi, etc.
   ```
3. Start Ollama (usually runs automatically)
4. Configure in settings:
   - **AI Provider**: `ollama`
   - **Ollama Endpoint**: `http://localhost:11434` (default)
   - **Ollama Model**: `llama2` (or your chosen model)

#### Option E: Custom API Endpoint

For other providers or self-hosted models:
- **AI Provider**: `custom`
- **Custom Endpoint**: Your API URL
- **Custom API Key**: Your API key (optional)

### 2. Choose Commit Message Style

- **Conventional**: Uses Conventional Commits format (`feat:`, `fix:`, `docs:`, etc.)
- **Simple**: Short, clear one-liner
- **Detailed**: Comprehensive with bullet points

## 🎯 Usage

### Method 1: Source Control View (Recommended)

1. Make changes to your code
2. Stage your changes in the Source Control view
3. Click the **✨ Generate Commit Message** button in the Source Control title bar
4. Choose an action:
   - **Use this message**: Applies to the commit input box
   - **Commit and Run**: Executes `git commit -m "..."` in terminal
   - **Copy to Clipboard**: Copies the message for use elsewhere
   - **Edit Message**: Modify before applying

### Method 2: Command Palette

1. Stage your changes
2. Open Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`)
3. Type: `Generate Commit Message`
4. Select your action

## 🛠️ Development Setup

If you want to modify or contribute to this extension:

```bash
# Clone the repository
cd commit_msg_generator

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch mode (auto-recompile on changes)
npm run watch

# Run in debug mode
# Press F5 in VS Code
```

## 📝 Configuration Reference

### Settings (settings.json)

```json
{
  "gitCommitMsgGenerator.aiProvider": "openai",
  "gitCommitMsgGenerator.openaiApiKey": "sk-...",
  "gitCommitMsgGenerator.openaiModel": "gpt-3.5-turbo",
  "gitCommitMsgGenerator.commitStyle": "conventional"
}
```

### Environment Variables (Alternative to settings)

You can also use environment variables:
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `GOOGLE_API_KEY`

## 🔒 Security Notes

- **API Keys**: Stored in VS Code settings. Use workspace settings for project-specific keys.
- **Local Models**: Use Ollama for complete privacy - no data leaves your machine
- **Git Ignore**: Never commit `.vscode/settings.json` with API keys
- **Secret Storage**: Consider using VS Code's SecretStorage API for production use

## 🤝 Examples

### Example Output (Conventional Style)
```
feat: add user authentication with JWT tokens
```

### Example Output (Detailed Style)
```
Implement user authentication system

- Add JWT token generation and validation
- Create login and signup endpoints
- Implement password hashing with bcrypt
- Add authentication middleware for protected routes
```

## ⚡ Troubleshooting

### "No staged changes found"
- Stage your changes first: `git add .` or use the Source Control view

### "API key not configured"
- Add your API key in VS Code Settings

### "Ollama connection failed"
- Ensure Ollama is running: `ollama serve`
- Check the endpoint URL in settings

### Extension not appearing
- Reload VS Code window: `Cmd+R` or `Ctrl+R`
- Check Extensions view for errors

## 📄 License

MIT

## 🙏 Credits

Built with:
- [VS Code Extension API](https://code.visualstudio.com/api)
- [OpenAI API](https://openai.com/)
- [Anthropic API](https://anthropic.com/)
- [Google Gemini API](https://ai.google.dev/)
- [Ollama](https://ollama.ai/)

---

**Enjoy generating amazing commit messages! 🎉**

For issues and feature requests, please open an issue on GitHub.

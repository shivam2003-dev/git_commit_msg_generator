# 🚀 Quick Start Guide

## ✅ Installation Complete!

Your Git Commit Message Generator extension is ready to use!

## 🎯 Next Steps

### 1. **Test the Extension (Development Mode)**

Press `F5` in VS Code to launch the Extension Development Host

### 2. **Configure Your AI Provider**

Choose one of these options:

#### Option A: OpenAI (Easiest to get started)
1. Get API key: https://platform.openai.com/api-keys
2. Open Settings (`Cmd+,`)
3. Search: "Git Commit Message"
4. Set:
   - AI Provider: `openai`
   - OpenAI API Key: `your-key-here`

#### Option B: Ollama (100% Free & Private)
```bash
# Install Ollama
brew install ollama

# Start Ollama
ollama serve

# In another terminal, pull a model
ollama pull llama2
```

Then in VS Code Settings:
- AI Provider: `ollama`
- Ollama Model: `llama2`

### 3. **Try It Out!**

1. Make some code changes
2. Stage them: `git add .`
3. Click the ✨ sparkle icon in Source Control view
4. Choose your action!

## 📖 Full Documentation

See [README.md](./README.md) for complete documentation.

## 🐛 Troubleshooting

**Extension not showing?**
- Reload window: `Cmd+Shift+P` → "Reload Window"

**No button in Source Control?**
- Make sure you have a git repository
- The button appears in the SCM title bar

**API errors?**
- Check your API key in settings
- For Ollama: ensure `ollama serve` is running

## 🎨 Example Usage

```bash
# 1. Make changes
echo "console.log('hello');" >> src/test.ts

# 2. Stage changes
git add src/test.ts

# 3. Click "Generate Commit Message" in VS Code
# 4. Get something like: "feat: add console log statement"
```

## 💡 Tips

- Use **Conventional** style for professional commits
- Use **Ollama** for unlimited free generations
- Use **Edit Message** to refine AI suggestions
- Use **Copy** to use message elsewhere

---

**Ready to create amazing commits! 🎉**

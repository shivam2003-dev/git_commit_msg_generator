# 📍 How to Find and Use the Extension Button

## 🎯 Step-by-Step Visual Guide

### Step 1: Open Source Control View

**Click the Source Control icon** in the **LEFT sidebar** (not Cmd+Shift+G):

```
VS Code Sidebar (Left side):
┌───┐
│ 🔍 │ ← Explorer (files)
├───┤
│ 🔎 │ ← Search  
├───┤
│ ⎇  │ ← SOURCE CONTROL ← **CLICK THIS ONE!**
├───┤
│ ▶ │ ← Run & Debug
├───┤
│ ⊞  │ ← Extensions
└───┘
```

The Source Control icon looks like a **branching diagram** or **fork symbol** (⎇).

---

### Step 2: Look for the Sparkle Button

Once Source Control is open, you'll see:

```
┌─────────────────────────────────────────────┐
│ SOURCE CONTROL                    [... ✨]  │← Button is HERE!
├─────────────────────────────────────────────┤
│ Message (Ctrl+Enter to commit on main)      │
│ ┌─────────────────────────────────────────┐ │
│ │ [Type commit message here]              │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ ▼ Changes                                   │
│   • file1.js                                │
│   • file2.ts                                │
└─────────────────────────────────────────────┘
```

The **✨ sparkle button** appears in the **top-right corner** of the Source Control panel.

---

### Step 3: Requirements for Button to Appear

The button **only shows** when:

✅ You're in a git repository  
✅ You have **staged changes** (files added with `git add`)  
✅ The extension is installed and enabled  

---

## 🧪 Quick Test to See the Button

Run these commands in your terminal:

```bash
# 1. Create a test repository
cd ~/Desktop
mkdir test-git-button
cd test-git-button
git init

# 2. Create a file
echo "console.log('test');" > test.js

# 3. Stage the file (IMPORTANT!)
git add test.js

# 4. Open in VS Code
code .
```

**Now in VS Code:**
1. Click the **Source Control icon** (⎇) in the left sidebar
2. You should see **✨ Generate Commit Message** button in top-right
3. Click it!

---

## 🔍 Alternative Ways to Access

### Method 1: Command Palette
1. Press `Cmd + Shift + P`
2. Type: **"Generate Commit Message"**
3. Press Enter

### Method 2: Right-click in Source Control
1. Open Source Control view
2. Right-click in the changes area
3. Look for "Generate Commit Message" (if available)

---

## 📸 Visual Reference

### Mac Keyboard Note:
- `Cmd + Shift + G` = Global search/find (not Source Control)
- **Click the ⎇ icon** in sidebar = Source Control view

### The Correct Icon:
```
THIS IS SOURCE CONTROL (⎇):        NOT THIS (🔍):
┌───────────────────┐              ┌───────────────┐
│ ⎇  SOURCE CONTROL │              │ 🔍 SEARCH     │
│                   │              │               │
│ [... ✨] button   │              │ No button here│
└───────────────────┘              └───────────────┘
     ✓ CORRECT                         ✗ WRONG
```

---

## ⚙️ Settings Check

Make sure you've configured your API key:

1. `Cmd + ,` (Settings)
2. Search: **"git commit message"**
3. Find: **"OpenAI API Key"**
4. Paste your key
5. **Reload window**: `Cmd + Shift + P` → "Reload Window"

---

## 🐛 Troubleshooting

### "I don't see the button!"

**Check #1: Are you in Source Control view?**
- Click the ⎇ (branch/fork) icon in the left sidebar
- NOT the search icon (🔍)

**Check #2: Do you have staged changes?**
```bash
git add .    # Stage all changes
```

**Check #3: Is this a git repository?**
```bash
git status   # Should show git info, not "not a git repository"
```

**Check #4: Is the extension enabled?**
1. `Cmd + Shift + X` (Extensions)
2. Search: "Git Commit Message Generator"
3. Make sure it's enabled (not disabled)

**Check #5: Reload VS Code**
1. `Cmd + Shift + P`
2. Type: "Reload Window"
3. Press Enter

---

## 💡 Pro Tips

### After clicking the ✨ button, you'll get 4 options:

1. **✓ Use this message** - Puts it in the commit message box
2. **▶ Commit and Run** - Runs `git commit -m "..."` in terminal
3. **📋 Copy to Clipboard** - Copy for later use
4. **✎ Edit Message** - Modify before using

---

## 🎬 Complete Workflow

```bash
# Terminal commands:
cd ~/Desktop/my-project
echo "new feature" >> file.js
git add file.js

# In VS Code:
# 1. Click ⎇ icon (left sidebar)
# 2. Click ✨ button (top-right)
# 3. AI generates: "feat: add new feature to file"
# 4. Click "Commit and Run"
# Done! ✅
```

---

## 📞 Still Can't Find It?

Take a screenshot of your VS Code window and check:
- Is the left sidebar showing the Source Control view?
- Do you see "SOURCE CONTROL" at the top of the panel?
- Are there staged changes listed?

If yes to all, the ✨ button should be visible in the top-right corner!

---

**The button is there, just need to look in the right place! 🎯**

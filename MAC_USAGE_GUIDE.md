# 🍎 Running Extension on Mac - Complete Guide

## Method 1: Using the Debug Panel (Recommended)

### Step-by-Step:

1. **Open the Run and Debug view:**
   - Click the **Run icon** (▶️ with bug) in the left sidebar
   - OR press: `Cmd + Shift + D`

2. **Select the configuration:**
   - At the top, you'll see a dropdown that says "Run Extension"
   - Make sure "Run Extension" is selected

3. **Click the green play button** (▶️)
   - OR press: `Fn + F5` (if F5 alone doesn't work)
   - OR press: `Cmd + Shift + D` then `Fn + F5`

4. **Extension Development Host window opens:**
   - A new VS Code window will open with title "[Extension Development Host]"
   - Your extension is now running in this window!

---

## Method 2: Using Command Palette

1. **Open Command Palette:**
   ```
   Cmd + Shift + P
   ```

2. **Type and select:**
   ```
   Debug: Start Debugging
   ```

3. **Extension Development Host opens!**

---

## Method 3: Using the Menu Bar

1. **Click:** `Run` menu → `Start Debugging`
2. **Or:** `Run` menu → `Run Without Debugging` (`Ctrl + F5`)

---

## Method 4: Enable Function Keys on Mac

If you want `F5` to work directly:

### For Mac with Touch Bar:
1. Go to: **System Settings** → **Keyboard**
2. Find: "Use F1, F2, etc. as standard function keys"
3. Enable the checkbox
4. Now `F5` will work directly (no need for `Fn`)

### For Mac without Touch Bar:
- Press: `Fn + F5` together

---

## ✅ What to Expect After Launch

When you start debugging, you'll see:

1. **Bottom bar turns orange** (Debug mode indicator)
2. **Debug console opens** at bottom
3. **NEW window opens** titled: `[Extension Development Host]`

### In the Extension Development Host window:

1. **Open a git repository** (or create a test folder with git)
   ```bash
   # Create test repo
   mkdir ~/Desktop/test-repo
   cd ~/Desktop/test-repo
   git init
   ```

2. **Make some changes:**
   ```bash
   echo "console.log('test');" > test.js
   ```

3. **Stage changes:**
   ```bash
   git add test.js
   ```

4. **Look for the ✨ sparkle button:**
   - Go to Source Control view (Cmd + Shift + G)
   - You should see a ✨ button in the top-right
   - Click it to generate commit message!

---

## 🐛 Troubleshooting

### "F5 doesn't work at all"
- Use `Fn + F5`
- Or use Command Palette: `Cmd + Shift + P` → "Start Debugging"

### "No Extension Development Host window opens"
Try compiling first:
```bash
npm run compile
```

Then try again with Run and Debug panel.

### "Extension not appearing in new window"
1. In the Extension Development Host window, open Command Palette
2. Type: "Developer: Show Running Extensions"
3. Look for "Git Commit Message Generator"
4. If not there, check the Debug Console for errors

### "Can't find Run icon in sidebar"
- Look for play button with bug icon (▶️🐛) on the left
- It's usually between Source Control and Extensions icons
- Or press: `Cmd + Shift + D`

---

## 📹 Visual Guide

```
Main VS Code Window:
┌─────────────────────────────────────────┐
│ File Edit View Run ...                  │
├──┬──────────────────────────────────────┤
│  │ 1. Click Run icon (▶️🐛)            │
│▶️│    OR press Cmd+Shift+D             │
│🐛│                                      │
│  │ 2. See "Run Extension" dropdown      │
│  │ 3. Click green ▶️ button            │
│  │    OR press Fn+F5                    │
└──┴──────────────────────────────────────┘

↓ New window opens ↓

Extension Development Host Window:
┌─────────────────────────────────────────┐
│ [Extension Development Host]            │
├─────────────────────────────────────────┤
│ Your extension is running here!         │
│ Test it with any git repository         │
└─────────────────────────────────────────┘
```

---

## 🎯 Quick Test

After launching Extension Development Host:

```bash
# In terminal of Extension Development Host window:
cd ~/Desktop
mkdir test-commit && cd test-commit
git init
echo "test" > test.txt
git add test.txt

# Now in VS Code:
# 1. Open Source Control (Cmd+Shift+G)
# 2. Click ✨ button
# 3. Watch AI generate commit message!
```

---

## ⌨️ Mac Keyboard Shortcuts Summary

| Action | Shortcut |
|--------|----------|
| Open Run & Debug | `Cmd + Shift + D` |
| Start Debugging | `Fn + F5` or `Cmd + Shift + D` then click ▶️ |
| Stop Debugging | `Shift + F5` |
| Command Palette | `Cmd + Shift + P` |
| Source Control | `Cmd + Shift + G` |

---

## 💡 Pro Tip

Create a keyboard shortcut for easier access:

1. `Cmd + K` then `Cmd + S` (opens Keyboard Shortcuts)
2. Search: "Debug: Start Debugging"
3. Click the + icon and set your preferred shortcut

---

**Now try it! Press `Cmd + Shift + D` and click the green play button!** 🚀

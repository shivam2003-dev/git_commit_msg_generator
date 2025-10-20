import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
    console.log('Git Commit Message Generator is now active!');

    let disposable = vscode.commands.registerCommand('git-commit-msg-generator.generateCommitMessage', async () => {
        try {
            await generateAndShowCommitMessage();
        } catch (error) {
            vscode.window.showErrorMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    });

    context.subscriptions.push(disposable);
}

async function generateAndShowCommitMessage() {
    // Get git extension
    const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
    const git = gitExtension?.getAPI(1);

    if (!git) {
        vscode.window.showErrorMessage('Git extension not found');
        return;
    }

    // Get the first repository
    const repo = git.repositories[0];
    if (!repo) {
        vscode.window.showErrorMessage('No git repository found');
        return;
    }

    // Get staged changes
    const diff = await repo.diff(true);
    
    if (!diff || diff.trim().length === 0) {
        vscode.window.showWarningMessage('No staged changes found. Please stage your changes first.');
        return;
    }

    // Show progress
    await vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Generating commit message...",
        cancellable: false
    }, async (progress) => {
        try {
            // Get configuration
            const config = vscode.workspace.getConfiguration('gitCommitMsgGenerator');
            const provider = config.get<string>('aiProvider', 'openai');
            
            // Generate commit message
            const commitMessage = await generateCommitMessage(diff, provider, config);
            
            // Show quick pick with options
            const action = await vscode.window.showQuickPick([
                {
                    label: '$(check) Use this message',
                    description: 'Apply to git commit input',
                    action: 'use'
                },
                {
                    label: '$(play) Commit and Run',
                    description: 'Execute git commit in terminal',
                    action: 'commit'
                },
                {
                    label: '$(copy) Copy to Clipboard',
                    description: 'Copy message to clipboard',
                    action: 'copy'
                },
                {
                    label: '$(edit) Edit Message',
                    description: 'Modify before using',
                    action: 'edit'
                }
            ], {
                placeHolder: `Generated: ${commitMessage}`
            });

            if (!action) {
                return;
            }

            switch (action.action) {
                case 'use':
                    repo.inputBox.value = commitMessage;
                    vscode.window.showInformationMessage('Commit message applied!');
                    break;
                    
                case 'commit':
                    await executeCommitInTerminal(commitMessage);
                    break;
                    
                case 'copy':
                    await vscode.env.clipboard.writeText(commitMessage);
                    vscode.window.showInformationMessage('Commit message copied to clipboard!');
                    break;
                    
                case 'edit':
                    const edited = await vscode.window.showInputBox({
                        value: commitMessage,
                        prompt: 'Edit commit message',
                        placeHolder: 'Enter your commit message'
                    });
                    if (edited) {
                        repo.inputBox.value = edited;
                        vscode.window.showInformationMessage('Edited commit message applied!');
                    }
                    break;
            }
        } catch (error) {
            throw error;
        }
    });
}

async function executeCommitInTerminal(message: string) {
    const terminal = vscode.window.createTerminal('Git Commit');
    terminal.show();
    
    // Escape quotes in commit message
    const escapedMessage = message.replace(/"/g, '\\"');
    terminal.sendText(`git commit -m "${escapedMessage}"`);
    
    vscode.window.showInformationMessage('Commit command sent to terminal!');
}

async function generateCommitMessage(diff: string, provider: string, config: vscode.WorkspaceConfiguration): Promise<string> {
    const commitStyle = config.get<string>('commitStyle', 'conventional');
    
    const prompt = buildPrompt(diff, commitStyle);
    
    switch (provider) {
        case 'openai':
            return await generateWithOpenAI(prompt, config);
        case 'anthropic':
            return await generateWithAnthropic(prompt, config);
        case 'google':
            return await generateWithGoogle(prompt, config);
        case 'ollama':
            return await generateWithOllama(prompt, config);
        case 'custom':
            return await generateWithCustom(prompt, config);
        default:
            throw new Error(`Unknown provider: ${provider}`);
    }
}

function buildPrompt(diff: string, style: string): string {
    let styleInstruction = '';
    
    switch (style) {
        case 'conventional':
            styleInstruction = 'Use Conventional Commits format (e.g., feat:, fix:, docs:, style:, refactor:, test:, chore:). Keep it concise and under 72 characters.';
            break;
        case 'simple':
            styleInstruction = 'Write a simple, clear one-line description of the changes.';
            break;
        case 'detailed':
            styleInstruction = 'Write a detailed commit message with a summary line followed by bullet points of key changes.';
            break;
    }
    
    return `You are a helpful assistant that generates git commit messages based on code changes.

${styleInstruction}

Analyze these git diff changes and generate an appropriate commit message:

\`\`\`diff
${diff.substring(0, 3000)}
\`\`\`

Respond with ONLY the commit message, no explanations or additional text.`;
}

async function generateWithOpenAI(prompt: string, config: vscode.WorkspaceConfiguration): Promise<string> {
    const apiKey = config.get<string>('openaiApiKey');
    if (!apiKey) {
        throw new Error('OpenAI API key not configured. Please set it in settings.');
    }
    
    const model = config.get<string>('openaiModel', 'gpt-3.5-turbo');
    
    const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            model: model,
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 200,
            temperature: 0.7
        },
        {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        }
    );
    
    return response.data.choices[0].message.content.trim();
}

async function generateWithAnthropic(prompt: string, config: vscode.WorkspaceConfiguration): Promise<string> {
    const apiKey = config.get<string>('anthropicApiKey');
    if (!apiKey) {
        throw new Error('Anthropic API key not configured. Please set it in settings.');
    }
    
    const model = config.get<string>('anthropicModel', 'claude-3-sonnet-20240229');
    
    const response = await axios.post(
        'https://api.anthropic.com/v1/messages',
        {
            model: model,
            max_tokens: 200,
            messages: [{ role: 'user', content: prompt }]
        },
        {
            headers: {
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'Content-Type': 'application/json'
            }
        }
    );
    
    return response.data.content[0].text.trim();
}

async function generateWithGoogle(prompt: string, config: vscode.WorkspaceConfiguration): Promise<string> {
    const apiKey = config.get<string>('googleApiKey');
    if (!apiKey) {
        throw new Error('Google API key not configured. Please set it in settings.');
    }
    
    const model = config.get<string>('googleModel', 'gemini-pro');
    
    const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
            contents: [{
                parts: [{ text: prompt }]
            }]
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    
    return response.data.candidates[0].content.parts[0].text.trim();
}

async function generateWithOllama(prompt: string, config: vscode.WorkspaceConfiguration): Promise<string> {
    const endpoint = config.get<string>('ollamaEndpoint', 'http://localhost:11434');
    const model = config.get<string>('ollamaModel', 'llama2');
    
    const response = await axios.post(
        `${endpoint}/api/generate`,
        {
            model: model,
            prompt: prompt,
            stream: false
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    
    return response.data.response.trim();
}

async function generateWithCustom(prompt: string, config: vscode.WorkspaceConfiguration): Promise<string> {
    const endpoint = config.get<string>('customEndpoint');
    const apiKey = config.get<string>('customApiKey');
    
    if (!endpoint) {
        throw new Error('Custom endpoint not configured. Please set it in settings.');
    }
    
    const headers: any = {
        'Content-Type': 'application/json'
    };
    
    if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
    }
    
    const response = await axios.post(
        endpoint,
        {
            prompt: prompt,
            max_tokens: 200
        },
        { headers }
    );
    
    // This is a generic implementation - you may need to adjust based on your API's response format
    return response.data.message || response.data.response || response.data.text || 'Unable to parse response';
}

export function deactivate() {}

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

function randomUpper(): string {
  return randomChar("A", 25);
}
function randomLower(): string {
  return randomChar("a", 25);
}
function randomDigit(): string {
  return randomChar("0", 9);
}
function randomChar(first: string, maxDistance: number): string {
  return String.fromCharCode(
    first.charCodeAt(0) + Math.floor(Math.random() * maxDistance)
  );
}
function scramble(input: string): string {
  return input
    .replace(/[A-Z]/g, _ => {return randomUpper();})
    .replace(/[a-z]/g, _ => {return randomLower();})
    .replace(/[0-9]/g, _ => {return randomDigit();})
  ;
}
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  // console.log('Congratulations, your extension "scramble" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('scramble.scramble', () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    const editor = vscode.window.activeTextEditor;
    if (editor === undefined) {
      return null;
    }
    editor.edit(eb => {
      editor.selections.forEach( selection => {
        let text = editor.document.getText(selection);
        eb.delete(selection);
        eb.insert(selection.start, scramble(text));
      });
    });
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

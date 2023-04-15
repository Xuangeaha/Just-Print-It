const vscode = require('vscode');

function activate(context) {
    // 注册菜单项
    const printItCommand = vscode.commands.registerCommand('just-print-it.print-it', () => {
        // 获取当前编辑器
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        // // 获取代码片段
        // var snippet;
        // const languageId = vscode.window.activeTextEditor.document.languageId

        // if (languageId == 'batch') {
        //     snippet = new vscode.SnippetString("")
        // } else if (languageId == 'c') {
        //     snippet = new vscode.SnippetString("printf(\"${1}\");")
        // } else {
        //     snippet = new vscode.SnippetString("print(\"${1}\");")
        // }

        // // 插入代码片段
        // editor.insertSnippet(snippet);

        vscode.window.showInformationMessage('The function is still developing. You may type "print" in the editor and use the snippet temporarily.')
    });

    // 将菜单项注册到订阅数组中
    context.subscriptions.push(printItCommand);
}

exports.activate = activate;

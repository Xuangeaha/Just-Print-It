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

        // 获取代码片段
        var snippet;
        const languageId = vscode.window.activeTextEditor.document.languageId

        if (languageId == 'bat') {
            snippet = new vscode.SnippetString("echo ${1}")
        } else if (languageId == 'c') {
            snippet = new vscode.SnippetString("printf(\"${1}\");")
        } else if (languageId == 'csharp') {
            snippet = new vscode.SnippetString("Console.WriteLine(\"${1}\");")
        } else if (languageId == 'cpp') {
            snippet = new vscode.SnippetString("printf(\"${1}\");")
        } else if (languageId == 'clojure') {
            snippet = new vscode.SnippetString("(println \"${1}\")")
        } else if (languageId == 'coffeescript') {
            snippet = new vscode.SnippetString("console.log \"${1}\"")
        } else if (languageId == 'dart') {
            snippet = new vscode.SnippetString("print('${1}');")
        } else if (languageId == 'fsharp') {
            snippet = new vscode.SnippetString("printfn \"${1}\"")
        } else if (languageId == 'go') {
            snippet = new vscode.SnippetString("fmt.Println(\"${1}\")")
        } else if (languageId == 'groovy') {
            snippet = new vscode.SnippetString("println('${1}');")
        } else if (languageId == 'java') {
            snippet = new vscode.SnippetString("System.out.println(\"${1}\");")
        } else if (languageId == 'javascript') {
            snippet = new vscode.SnippetString("Console.log(\"${1}\");")
        } else if (languageId == 'javascriptreact') {
            snippet = new vscode.SnippetString("Console.log(\"${1}\");")
        } else if (languageId == 'julia') {
            snippet = new vscode.SnippetString("println(\"${1}\")")
        } else if (languageId == 'lua') {
            snippet = new vscode.SnippetString("print(\"${1}\")")
        } else if (languageId == 'objective-c') {
            snippet = new vscode.SnippetString("NSLog(@\"${1}\");")
        } else if (languageId == 'objective-cpp') {
            snippet = new vscode.SnippetString("NSLog(@\"${1}\");")
        } else if (languageId == 'perl') {
            snippet = new vscode.SnippetString("print \"${1}\";")
        } else if (languageId == 'perl6') {
            snippet = new vscode.SnippetString("print \"${1}\";")
        } else if (languageId == 'php') {
            snippet = new vscode.SnippetString("echo \"${1}\";")
        } else if (languageId == 'powershell') {
            snippet = new vscode.SnippetString("Write-Output \"${1}\"")
        } else if (languageId == 'python') {
            snippet = new vscode.SnippetString("print(\"${1}\")")
        } else if (languageId == 'r') {
            snippet = new vscode.SnippetString("print ( \"${1}\" )")
        } else if (languageId == 'ruby') {
            snippet = new vscode.SnippetString("puts \"${1}\"")
        } else if (languageId == 'rust') {
            snippet = new vscode.SnippetString("println!(\"${1}\");")
        } else if (languageId == 'shellscript') {
            snippet = new vscode.SnippetString("echo \"${1}\"")
        } else if (languageId == 'swift') {
            snippet = new vscode.SnippetString("print(\"${1}\")")
        } else if (languageId == 'typescript') {
            snippet = new vscode.SnippetString("Console.log(\"${1}\");")
        } else if (languageId == 'typescriptreact') {
            snippet = new vscode.SnippetString("Console.log(\"${1}\");")
        } else if (languageId == 'vbs') {
            snippet = new vscode.SnippetString("Msgbox(\"${1}\",${2},\"${3}\")")
        } else if (languageId == 'vb') {
            snippet = new vscode.SnippetString("Console.WriteLine(\"${1}\")")
        } else if (languageId == 'haskell') { // haskell support
            snippet = new vscode.SnippetString("putStrLn \"${1}\"")
        } else {
            vscode.window.showErrorMessage("Unsupported language: " + languageId)
        }

        // 插入代码片段
        editor.insertSnippet(snippet);
    });

    // 将菜单项注册到订阅数组中
    context.subscriptions.push(printItCommand);
}

exports.activate = activate;

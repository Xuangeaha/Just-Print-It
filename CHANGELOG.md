# Change Log

All notable changes to the "divider" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## 0.3.2 2023-03-11

Repair bug (*PD-4*):

```plaintext
[error] PackageIntegrityCheckFailed: Signature: PackageIntegrityCheckFailed
    at yt.download (vscode-file://vscode-app/d:/Microsoft%20VS%20Code/resources/app/out/vs/code/node/sharedProcess/sharedProcessMain.js:91:468)
    at async X.x (vscode-file://vscode-app/d:/Microsoft%20VS%20Code/resources/app/out/vs/code/node/sharedProcess/sharedProcessMain.js:91:20760)
    at async X.h (vscode-file://vscode-app/d:/Microsoft%20VS%20Code/resources/app/out/vs/code/node/sharedProcess/sharedProcessMain.js:91:18897)
```

## 0.3.1 2023-03-11

Update the `keywords`.

Repair bug (*PD-3*):

```plaintext
Unknown language in `contributes.print-divider.language`. Provided value: kotlin

"contributes.print-divider.language" 中包含未知语言。提供的值: kotlin
```

## 0.3.0 2023-03-04

Remove language support for `kotlin`.

Repair bug (*PD-2*):

```plaintext
Unknown language in "contributes.print-divider.language". Provided value: kotlin

"contributes.print-divider.language" 中包含未知语言。提供的值: kotlin
```

## 0.2.2 2023-02-27

Optimize `README.MD`.

## 0.2.1 2023-02-27

Repair bug (*PD-1*):

```plaintext
Unknown language in "contributes.print-divider.language". Provided value: c#

"contributes.print-divider.language" 中包含未知语言。提供的值: c#
```

## 0.2.0 2023-02-23

Add language support for `R`, `Go`, `Rust`, `Swift`, `Ruby`, `Kotlin`, `Objective-C`, `Lua` and `Julia`.

## 0.1.1 2023-02-19

Optimize `README.MD` and `package.json`.

Redesign the `icon`.

## 0.1.0 2023-02-19

Add language support for `PHP`, `C#`, `JavaScript` and `TypeScript`.

## 0.0.2 2023-02-18

Add `keywords` to `package.json`.

Redesign the `icon`.

Repository migration.

## 0.0.1 2023-02-18

Add language support for `Python`, `Java` and `C`.

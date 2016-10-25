'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand(
        'com.sapota.marek.mrutabs.move',
        () => {
            vscode.commands.executeCommand(
                'moveActiveEditor',
                {to: 'first'},
            );
        },
    );

    context.subscriptions.push(disposable);

    function moveTab() {
        vscode.commands.executeCommand(
            'com.sapota.marek.mrutabs.move',
        );
    }
    vscode.window.onDidChangeActiveTextEditor(moveTab);
}

export function deactivate() {
}
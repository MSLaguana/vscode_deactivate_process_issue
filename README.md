This repo is intended to demonstrate how extension activation does not allow time for cleaning everything up

Simply clone this repo, open this folder up in vscode, and hit f5 to launch the extension.

In the command palatte, run "Spawn child process" to launch a child node process. Observe that navigating
to `localhost:8080` responds with a counter of how many http requests have been made.

Run "Kill child process" and observe that the server is no longer running.

Run "Spawn child process" again and then close the window, which will deactivate the extension.
Observe that `localhost:8080` remains running even though the deactivate function attempts to
kill the child process.
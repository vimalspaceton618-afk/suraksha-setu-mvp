@echo off
cd /d "%~dp0"
start "Suraksha Setu" http://localhost:8080/
py -m http.server 8080
pause

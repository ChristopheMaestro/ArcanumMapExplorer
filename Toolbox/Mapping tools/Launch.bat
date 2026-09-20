@echo off
cd /d "%~dp0"
powershell -Command "Start-Process python 'map_stitcher.py'"
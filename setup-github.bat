@echo off
REM Setup GitHub Repository and Push CI/CD Pipeline
REM Usage: setup-github.bat <github-username> <repository-name>

setlocal enabledelayedexpansion

echo.
echo ================================
echo Yati R&D Lab - GitHub Setup
echo ================================
echo.

if "%1"=="" (
    echo Usage: %0 ^<github-username^> ^<repository-name^>
    echo.
    echo Example:
    echo   %0 yatishbathla yati-rnd-lab
    echo.
    exit /b 1
)

set GITHUB_USERNAME=%1
set REPO_NAME=%2
set REPO_URL=https://github.com/!GITHUB_USERNAME!/!REPO_NAME!.git

echo Package Repository Details:
echo    Username: !GITHUB_USERNAME!
echo    Repository: !REPO_NAME!
echo    URL: !REPO_URL!
echo.

if not exist .git (
    echo X Git repository not found. Run 'git init' first.
    exit /b 1
)

echo Configure repository...
echo.

echo Add remote repository...
git remote add origin "!REPO_URL!" 2>nul || git remote set-url origin "!REPO_URL!"

echo Setup main branch...
git branch --set-upstream-to=origin/main main 2>nul

echo.
echo Repository configured successfully!
echo.
echo Next steps:
echo.
echo 1. Create repository on GitHub:
echo    Visit: https://github.com/new
echo    Repository name: !REPO_NAME!
echo    Description: Yati R&D Lab - Innovation in Research and Development
echo    Public/Private: Choose based on preference
echo.
echo 2. Push to GitHub:
echo    git push -u origin main
echo.
echo 3. Configure GitHub Pages:
echo    Go to: https://github.com/!GITHUB_USERNAME!/!REPO_NAME!/settings/pages
echo    Source: Deploy from a branch
echo    Branch: main / (root)
echo.
echo 4. Enable Actions:
echo    Go to: https://github.com/!GITHUB_USERNAME!/!REPO_NAME!/settings/actions
echo    Make sure Actions are enabled
echo.
echo 5. Verify Workflows:
echo    Go to: https://github.com/!GITHUB_USERNAME!/!REPO_NAME!/actions
echo    Check that workflows run on next push
echo.

#!/bin/bash
# Setup GitHub Repository and Push CI/CD Pipeline
# Usage: ./setup-github.sh <github-username> <repository-name>

set -e

echo "================================"
echo "Yati R&D Lab - GitHub Setup"
echo "================================"
echo ""

# Check if arguments are provided
if [ $# -lt 2 ]; then
    echo "Usage: $0 <github-username> <repository-name>"
    echo ""
    echo "Example:"
    echo "  $0 yatishbathla yati-rnd-lab"
    echo ""
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME=$2
REPO_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo "📦 Repository Details:"
echo "   Username: $GITHUB_USERNAME"
echo "   Repository: $REPO_NAME"
echo "   URL: $REPO_URL"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git repository not found. Run 'git init' first."
    exit 1
fi

echo "🔧 Setting up repository..."
echo ""

# Add remote
echo "📡 Adding remote repository..."
git remote add origin "$REPO_URL" || git remote set-url origin "$REPO_URL"

# Set branch tracking
echo "🌿 Setting up main branch..."
git branch --set-upstream-to=origin/main main 2>/dev/null || true

echo ""
echo "✅ Repository configured!"
echo ""
echo "Next steps:"
echo ""
echo "1. Create repository on GitHub:"
echo "   Visit: https://github.com/new"
echo "   Repository name: $REPO_NAME"
echo "   Description: Yati R&D Lab - Innovation in Research and Development"
echo "   Public/Private: Choose based on preference"
echo ""
echo "2. Push to GitHub:"
echo "   git push -u origin main"
echo ""
echo "3. Configure GitHub Pages:"
echo "   Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages"
echo "   Source: Deploy from a branch"
echo "   Branch: main / (root)"
echo ""
echo "4. Enable Actions:"
echo "   Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/actions"
echo "   Make sure Actions are enabled"
echo ""
echo "5. Verify Workflows:"
echo "   Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME/actions"
echo "   Check that workflows run on next push"
echo ""

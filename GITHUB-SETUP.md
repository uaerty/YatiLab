# GitHub Push Instructions

## Quick Start

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository with these settings:
   - **Repository name**: `yati-rnd-lab`
   - **Description**: Yati R&D Lab - Innovation in Research and Development
   - **Visibility**: Public or Private
   - **Initialize repository**: Leave unchecked (already initialized locally)

### Step 2: Add Remote Repository

```bash
# On Windows (PowerShell)
cd C:\Users\yatis\yati-rnd-lab

# Add remote (replace with your GitHub username)
git remote add origin https://github.com/your-username/yati-rnd-lab.git

# Or use SSH (if configured)
git remote add origin git@github.com:your-username/yati-rnd-lab.git
```

### Step 3: Push to GitHub

```bash
# Push main branch
git push -u origin main

# Or using GitHub CLI
gh repo create yati-rnd-lab --source=. --public --push
```

## Automated Setup Scripts

### Windows (Batch)
```bash
.\setup-github.bat your-username yati-rnd-lab
git push -u origin main
```

### Linux/Mac (Bash)
```bash
bash setup-github.sh your-username yati-rnd-lab
git push -u origin main
```

## GitHub Pages Configuration

1. Go to: `Settings → Pages`
2. Select:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Click Save

The site will be deployed to:
```
https://your-username.github.io/yati-rnd-lab/
```

## GitHub Actions Configuration

### Enable Actions

1. Go to: `Settings → Actions`
2. Ensure "All actions and reusable workflows" is selected

### Verify Workflows

1. Go to: `Actions` tab
2. You should see three workflows:
   - Build and Test
   - Deploy to Production
   - Code Quality

### Workflow Triggers

- **Build and Test**: Push/PR to `main` or `develop`
- **Deploy**: Push to `main` branch
- **Code Quality**: Push/PR to `main` or `develop`

## Branches Setup

Create additional branches for development:

```bash
# Create develop branch
git checkout -b develop
git push -u origin develop

# Merge develop to main before deployment
git checkout main
git pull origin main
git merge develop
git push origin main
```

## Personal Access Token (for API access)

If needed for deployment or API access:

1. Go to: `Settings → Developer settings → Personal access tokens → Tokens (classic)`
2. Click "Generate new token"
3. Select scopes:
   - `repo` - Repository access
   - `workflow` - Actions access
4. Copy the token and store securely

## SSH Setup (Optional)

For passwordless pushes:

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Add to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Add to GitHub
# Settings → SSH and GPG keys → New SSH key
```

## Troubleshooting

### Remote already exists
```bash
git remote set-url origin https://github.com/your-username/yati-rnd-lab.git
```

### Push permission denied
- Check SSH keys are configured
- Or use HTTPS with Personal Access Token
- Ensure you have push permissions

### Workflows not running
1. Check if Actions are enabled
2. Verify workflows exist in `.github/workflows/`
3. Check branch name matches trigger rules
4. View logs in Actions tab

## CI/CD Pipeline Status

After pushing, check:

1. **Build Status**: Actions → Build and Test
2. **Deployment**: Actions → Deploy to Production
3. **Code Quality**: Actions → Code Quality
4. **Coverage**: Codecov reports (if configured)

## Next Steps

1. ✅ Push to GitHub
2. ✅ Configure GitHub Pages
3. ✅ Monitor workflow runs
4. ✅ Set up branch protection rules
5. ✅ Add collaborators
6. ✅ Create project board

## Resources

- [GitHub Documentation](https://docs.github.com/en/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [GitHub Pages](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

# CI/CD Pipeline Documentation

## Overview

The Yati R&D Lab project uses GitHub Actions for continuous integration and deployment. This document outlines the CI/CD pipeline configuration and workflow.

## Workflows

### 1. Build and Test (`build-and-test.yml`)

**Triggers**: 
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Jobs**:
- **Build**: Tests on Node.js 18.x and 20.x
  - Checkout code
  - Setup Node.js
  - Install dependencies
  - Run ESLint
  - Build application
  - Run tests with coverage
  - Upload coverage reports to Codecov
  - Archive build artifacts

- **Security**: npm audit and vulnerability checks
  - Audit dependencies
  - Generate audit report
  - Upload audit report as artifact

### 2. Deploy to Production (`deploy.yml`)

**Triggers**:
- Push to `main` branch
- Manual workflow dispatch

**Jobs**:
- Build and deploy to GitHub Pages
  - Checkout code
  - Setup Node.js
  - Install dependencies
  - Build application
  - Deploy to GitHub Pages
  - Create Release on GitHub

### 3. Code Quality (`code-quality.yml`)

**Triggers**:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Jobs**:
- **Quality**: Code quality and linting checks
  - ESLint analysis with SARIF report upload
  
- **Dependencies**: Dependency vulnerability scanning
  - OWASP Dependency Check

## Dependabot Configuration

Automatic dependency updates are configured in `.github/dependabot.yml`:

- **npm**: Weekly dependency updates
- **GitHub Actions**: Weekly action updates

Pull requests are automatically created for security and version updates.

## Status Badges

Add these badges to your README.md:

```markdown
[![Build and Test](https://github.com/yourusername/yati-rnd-lab/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/yourusername/yati-rnd-lab/actions/workflows/build-and-test.yml)
[![Deploy to Production](https://github.com/yourusername/yati-rnd-lab/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/yati-rnd-lab/actions/workflows/deploy.yml)
[![Code Quality](https://github.com/yourusername/yati-rnd-lab/actions/workflows/code-quality.yml/badge.svg)](https://github.com/yourusername/yati-rnd-lab/actions/workflows/code-quality.yml)
```

## GitHub Pages Deployment

The project is configured to deploy to GitHub Pages automatically:

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. On merge to `main`, the build is deployed

**URL**: `https://yourusername.github.io/yati-rnd-lab`

## Environment Variables

No sensitive environment variables are currently required. For future use:

1. Go to Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add your secrets with appropriate prefixes

Example:
```
DEPLOY_API_KEY=your_secret_value
```

## Local Development vs CI

### Local:
```bash
npm install
npm start
npm test
npm run build
```

### CI Pipeline:
Automatically runs all checks on:
- Every push
- Every pull request
- Manual triggers

## Troubleshooting

### Workflow Failures

1. **Build fails**: Check Node.js version compatibility
2. **Tests fail**: Ensure all tests pass locally
3. **Deployment fails**: Check GitHub Pages settings
4. **Security alerts**: Review npm audit output

### Viewing Logs

1. Go to Actions tab in GitHub
2. Click on failed workflow run
3. Expand any job to see detailed logs

### Debugging

For local debugging:
```bash
npm ci  # Clean install (like CI does)
npm run build
npm test -- --coverage
```

## Best Practices

1. **Commit Messages**: Follow Conventional Commits format
2. **Pull Requests**: Provide clear descriptions
3. **Testing**: Write tests for new features
4. **Dependencies**: Keep dependencies updated
5. **Security**: Address security alerts promptly

## Migration to Other CI/CD Platforms

### GitLab CI
- Use `.gitlab-ci.yml` in root
- Similar YAML structure

### Jenkins
- Use Jenkinsfile in root
- Requires Jenkins server setup

### Azure Pipelines
- Use `azure-pipelines.yml` in root
- Integrate with Azure DevOps

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)
- [CodeQL Documentation](https://codeql.github.com/)

## Support

For questions or issues:
1. Check existing GitHub Issues
2. Create a new Issue with detailed information
3. Contact the maintainers

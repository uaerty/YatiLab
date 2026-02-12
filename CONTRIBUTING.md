# Contribution Guidelines

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yati-rnd-lab.git
   cd yati-rnd-lab
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Development Workflow

### Branches
- `main` - Production-ready code
- `develop` - Development branch for feature integration
- `feature/*` - Feature branches for new functionality
- `bugfix/*` - Bugfix branches

### Making Changes

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: description of your changes"
   ```

3. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request to the `develop` branch

### Commit Message Format

Follow the Conventional Commits format:
- `feat: add new feature`
- `fix: fix a bug`
- `docs: update documentation`
- `style: fix formatting`
- `refactor: restructure code`
- `test: add/update tests`
- `chore: update dependencies`

## Testing

Before submitting a PR, ensure:

```bash
# Run tests
npm test

# Build the project
npm run build

# Check for linting issues
npm run lint --if-present
```

## CI/CD Pipeline

The project uses GitHub Actions for CI/CD:

- **Build and Test**: Runs on every push and PR
- **Code Quality**: Checks linting and code formatting
- **Security**: Performs npm audit and vulnerability checks
- **Deploy**: Automatically deploys to GitHub Pages on main branch merge

## Pull Request Requirements

- All checks must pass
- Code must be reviewed and approved
- No conflicts with base branch
- Clear description of changes

## Issues and Bug Reports

- Search existing issues before creating a new one
- Provide clear description and reproduction steps
- Include environment details

## Questions or Need Help?

Contact the maintainers or open a discussion in the repository.

# Development Setup Guide

## Option 1: Local Development with Ruby (Recommended)

### Prerequisites
1. **Install Ruby**: Download and install Ruby from [RubyInstaller for Windows](https://rubyinstaller.org/)
   - Choose the "Ruby+Devkit" version (3.1.x or later)
   - Run the installer and follow the setup wizard
   - Make sure to run `ridk install` when prompted

2. **Verify Installation**:
   ```powershell
   ruby --version
   gem --version
   ```

3. **Install Bundler**:
   ```powershell
   gem install bundler
   ```

### Running the Site
1. **Install Dependencies**:
   ```powershell
   bundle install
   ```

2. **Serve the Site**:
   ```powershell
   bundle exec jekyll serve --livereload
   ```

3. **View the Site**: Open [http://localhost:4000](http://localhost:4000)

## Option 2: GitHub Codespaces (Easiest)

1. Go to the GitHub repository
2. Click the "Code" button
3. Select "Codespaces" tab
4. Click "Create codespace on main"
5. Wait for the environment to load
6. Run:
   ```bash
   bundle install
   bundle exec jekyll serve --host 0.0.0.0
   ```

## Option 3: Docker (Alternative)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  jekyll:
    image: jekyll/jekyll:latest
    command: jekyll serve --watch --force_polling --host 0.0.0.0
    ports:
      - 4000:4000
    volumes:
      - .:/srv/jekyll
    environment:
      - JEKYLL_ENV=development
```

Run with:
```powershell
docker-compose up
```

## Quick Start for GitHub Pages

The site is already configured for automatic deployment to GitHub Pages. Simply:

1. Push your changes to the `main` branch
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as the source
4. The site will be available at: `https://javeed-writer.github.io/Tech-writing-portfolio`

## Customization

### Updating Content
- Edit files in `_developer_guides/`, `_user_guides/`, `_knowledge_base/`
- Modify pages in `_pages/`
- Update site settings in `_config.yml`

### Styling
- Main CSS file: `assets/main.css`
- Layouts: `_layouts/`

### Navigation
- Configure navigation in `_config.yml` under the `navigation` section

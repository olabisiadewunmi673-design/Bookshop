const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting GitHub Pages deployment preparation...\n');

// Step 1: Build the project
console.log('📦 Step 1: Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Create DEVELOPMENT folder and backup everything
console.log('📁 Step 2: Backing up development files...');
const devFolder = path.join(__dirname, 'DEVELOPMENT');
if (!fs.existsSync(devFolder)) {
  fs.mkdirSync(devFolder);
}

const filesToBackup = [
  'index.html',
  'App.vue',
  'main.js',
  'style.css',
  'vite.config.js',
  'app.js',
  'PROJECT_SUMMARY.md',
  'SETUP_GUIDE.md',
  'QUICK_START.md',
  'DEPLOY_TO_GITHUB.md',
  '.gitignore',
  'env.example'
];

filesToBackup.forEach(file => {
  const sourcePath = path.join(__dirname, file);
  if (fs.existsSync(sourcePath)) {
    const destPath = path.join(devFolder, file);
    try {
      const stat = fs.statSync(sourcePath);
      if (stat.isDirectory()) {
        if (fs.existsSync(destPath)) {
          fs.rmSync(destPath, { recursive: true, force: true });
        }
        fs.cpSync(sourcePath, destPath, { recursive: true });
      } else {
        const destDir = path.dirname(destPath);
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        fs.copyFileSync(sourcePath, destPath);
      }
      console.log(`   ✓ Backed up: ${file}`);
    } catch (error) {
      console.log(`   ✗ Error backing up ${file}:`, error.message);
    }
  }
});

console.log('✅ Development files backed up\n');

// Step 3: Copy dist contents to root
console.log('📤 Step 3: Preparing GitHub Pages files...');
const distFolder = path.join(__dirname, 'dist');
if (fs.existsSync(distFolder)) {
  const distFiles = fs.readdirSync(distFolder);
  
  distFiles.forEach(file => {
    const sourcePath = path.join(distFolder, file);
    const destPath = path.join(__dirname, file);
    
    try {
      const stat = fs.statSync(sourcePath);
      if (stat.isDirectory()) {
        if (fs.existsSync(destPath)) {
          fs.rmSync(destPath, { recursive: true, force: true });
        }
        fs.cpSync(sourcePath, destPath, { recursive: true });
      } else {
        if (fs.existsSync(destPath)) {
          fs.unlinkSync(destPath);
        }
        fs.copyFileSync(sourcePath, destPath);
      }
      console.log(`   ✓ Deployed: ${file}`);
    } catch (error) {
      console.log(`   ✗ Error deploying ${file}:`, error.message);
    }
  });
  
  console.log('✅ GitHub Pages files ready\n');
} else {
  console.error('❌ Dist folder not found! Build failed.');
  process.exit(1);
}

// Step 4: Create .nojekyll file
const noJekyllPath = path.join(__dirname, '.nojekyll');
if (!fs.existsSync(noJekyllPath)) {
  fs.writeFileSync(noJekyllPath, '');
  console.log('✅ Created .nojekyll file\n');
}

// Step 5: Create README for GitHub
const readmePath = path.join(__dirname, 'README_DEPLOY.md');
const readmeContent = `# Learning Hub - Deployed to GitHub Pages

This is the deployed version of the Learning Hub application.

## Development Files

All development files have been backed up to the DEVELOPMENT folder.

## Access the App

Visit: https://yourusername.github.io/learning-hub

## To Continue Development

Files are in the DEVELOPMENT folder. Restore them when needed.

## Backend

The backend is separate and should be deployed to Render.com or AWS.
`;

if (!fs.existsSync(readmePath)) {
  fs.writeFileSync(readmePath, readmeContent);
  console.log('✅ Created deployment README\n');
}

console.log('🎉 Deployment preparation complete!\n');
console.log('📝 Next steps to push to GitHub:');
console.log('   1. git add .');
console.log('   2. git commit -m "Deploy to GitHub Pages"');
console.log('   3. git push origin main');
console.log('\n📚 Then enable GitHub Pages in your repository settings!');


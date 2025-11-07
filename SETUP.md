# Portfolio Website Setup Guide

This guide will help you set up and run the portfolio website on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- A code editor like **Visual Studio Code** - [Download here](https://code.visualstudio.com/)

## Step-by-Step Installation

### Step 1: Clone the Repository

Open your terminal/command prompt and run:

```bash
git clone <your-repository-url>
cd <repository-folder-name>
```

Replace `<your-repository-url>` with your actual GitHub repository URL.

### Step 2: Install Dependencies

Install all required packages using npm:

```bash
npm install
```

This command will download and install all dependencies listed in `package.json`.

### Step 3: Run the Development Server

Start the development server:

```bash
npm run dev
```

The application will start running on `http://localhost:5173` (or another port if 5173 is busy).

### Step 4: Open in Browser

Open your web browser and navigate to:

```
http://localhost:5173
```

You should now see your portfolio website running locally!

## Project Structure

```
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   ├── Hero.tsx    # Hero section
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Publications.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   ├── pages/          # Page components
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.tsx        # Entry point
├── public/             # Public assets
├── index.html          # HTML template
└── package.json        # Project dependencies
```

## Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint for code quality checks

## Customization Guide

### Update Profile Image

Replace the profile image in `src/assets/profile-image.jpg` with your own photo.

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, title, location, email, phone
   - Update GitHub and LinkedIn URLs

2. **Education Section** (`src/components/Education.tsx`):
   - Modify education details and timeline

3. **Experience Section** (`src/components/Experience.tsx`):
   - Update work experience and projects

4. **Publications Section** (`src/components/Publications.tsx`):
   - Add/modify research papers and publications

5. **Projects Section** (`src/components/Projects.tsx`):
   - Update project details, descriptions, and links

6. **Skills Section** (`src/components/Skills.tsx`):
   - Modify technical skills and proficiency levels

7. **Certifications Section** (`src/components/Certifications.tsx`):
   - Add/update certifications and achievements

8. **Contact Section** (`src/components/Contact.tsx`):
   - Update email address for contact form

### Update Design System

Modify colors and styling in:
- `src/index.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The build output will be in the `dist/` folder. You can deploy this folder to any static hosting service like:

- **Vercel** - [Deploy Guide](https://vercel.com/)
- **Netlify** - [Deploy Guide](https://www.netlify.com/)
- **GitHub Pages** - [Deploy Guide](https://pages.github.com/)
- **AWS S3** - [Deploy Guide](https://aws.amazon.com/s3/)

## Preview Production Build Locally

After building, you can preview the production build:

```bash
npm run preview
```

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the correct URL.

### Dependencies Installation Issues

If you encounter issues during `npm install`:

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Build Errors

If you encounter build errors:

1. Ensure all dependencies are installed
2. Check that Node.js version is 18 or higher: `node --version`
3. Clear build cache: `npm run build -- --force`

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Accessible UI components
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Support

For issues or questions:
- Check the [documentation](https://docs.lovable.dev/)
- Open an issue on GitHub
- Contact: ompatil.uk@gmail.com

## License

This project is created for personal portfolio use.

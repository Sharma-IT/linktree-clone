# Linktree Clone

A clean, customisable, and accessible link-in-bio solution built with React, TypeScript, and Tailwind CSS.

![Demo Screenshot](https://github.com/Sharma-IT.png)

## 🌟 Features

- 🎨 Clean, mnimalistic modern UI with dark mode
- 📱 Fully responsive design
- ♿ Accessible components using shadcn/ui
- 📋 One-click contact info copying
- 🔄 System-aware theme switching
- ⚡ Optimised performance
- 🎯 SEO friendly

## 🚀 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Sharma-IT/linktree-clone.git
cd modern-linktree-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🛠️ Customisation

1. Open `src/components/LinktreeProfile.tsx`
2. Update the following information:
   - Profile picture URL
   - Name and bio
   - Contact information
   - Social media links
   - Skills badges
   - Tech stack details

Example:
```tsx
const LinktreeProfile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center space-y-4 pt-6">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="YOUR_GITHUB_PROFILE_URL"
              alt="Your Profile Picture"
            />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">Your Name</h1>
          // ... rest of the customisation
        </CardContent>
      </Card>
    </div>
  );
};
```

## 🚀 Deployment

1. Create a Netlify account
2. Connect your repository
3. Deploy with a single click

Or use the quick deploy button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Sharma-IT/linktree-clone)

## ⚡ Performance

- Lighthouse Score: 98+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.2s
- Accessibility Score: 100

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📄 License

GNU V.3 License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Lucide Icons](https://lucide.dev/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [React](https://reactjs.org/) for the UI framework
- [Vite](https://vitejs.dev/) for the build tool

## 📧 Contact

For questions or feedback, please open an issue or reach out to me:

- GitHub: [@Sharma-IT](https://github.com/Sharma-IT)
- LinkedIn: [Shubham Sharma](https://linkedin.com/in/Sharma-IT)

---

Made with ❤️ by Shubham Sharma
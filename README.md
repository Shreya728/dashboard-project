Dashboard Project - Setup & Dependencies
live url= https://dashboard-project-psi-two.vercel.app/login
credentials
email= admin@example.com
password= password123
🧰 Step 1: Create/Clone the App
If starting fresh:
npx create-next-app@latest dashboard-project
cd dashboard-project
OR if cloning from GitHub:
git clone https://github.com/Shreya728/dashboard-project.git
cd dashboard-project
📦 Install Dependencies (After Cloning)
Run this command to install all project dependencies:
npm install
✅ This will install:
- next
- react
- react-dom
- tailwindcss
- postcss
- autoprefixer
- next-themes
- shadcn/ui
- clsx
- lucide-react
- axios
🎨 Step 2: Install TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Update tailwind.config.js:
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: { extend: {} },
  plugins: [],
}
Update globals.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
🌙 Step 3: Install next-themes
npm install next-themes
Create ThemeContext.tsx
💅 Step 4: Add ShadCN UI Components
npx shadcn-ui@latest init
Then install required components:
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add table skeleton 
🧩 Step 5: Install Helpful Libraries
npm install clsx lucide-react axios
🏁 Step 6: Run the App Locally
npm run dev
☁️ Step 7: Deploy to Vercel
npx vercel
📁 
🔑 Admin Login (Demo)
Field	Value
Email	admin@example.com
Password = password123

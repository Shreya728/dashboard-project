A responsive admin dashboard built with Next.js 14, Tailwind CSS, and React Hooks. Includes authentication, theme toggling (light/dark), pagination, search, and modular components like Header, Sidebar, PostTable, Settings, and Profile.
🚀 Features
•	✅ Admin login authentication
•	🌗 Light/Dark theme toggle (persists across pages)
•	🔍 Search & filter posts
•	📄 Pagination
•	📱 Mobile responsive design
•	⚙️ Settings page with theme toggle
•	👤 Profile page with back navigation
•	⏳ Loading spinners for data fetching
📦 Tech Stack
•	Next.js 14
•	Tailwind CSS
•	React Hooks
•	Context API for Theme


🔑 Admin Login (Demo)
Field	Value
Email	admin@example.com
Password	password123


🛠️ Setup Instructions
1. Clone the repo:
git clone https://github.com/Shreya728/dashboard-project.git
cd dashboard-project

2. Install dependencies:
npm install

3. npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

4. Update globals.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
)

5. Install:
   npm install next-themes
6. : Add ShadCN UI Components
npx shadcn-ui@latest init

Then install:
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add table input switch skeleton

7Helpful Libraries
npm install clsx lucide-react axios

8. Create .env.local file at the root with:
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com/posts
ADMIN_USERNAME=admin@example.com
ADMIN_PASSWORD=password123

9. Run locally:
npm run dev
Now visit: http://localhost:3000
🧪 Admin Login
Username: admin@example.com
Password:password123

🌐 Deployment
1. Push the project to GitHub.
2. Visit https://vercel.com
3. Import your GitHub project.
4. Add the same environment variables in Vercel settings.
5. Deploy — done!
📁 Folder Structure
components/
  ├── Header.tsx
  ├── Sidebar.tsx
  ├── PostTable.tsx
  ├── Spinner.tsx
  ├── BackButton.tsx
  ├── ThemeContext.tsx
app/
  ├── login/
  ├── dashboard/
  ├── profile/
  ├── settings/
  ├── page.tsx
📜 License
This project is licensed under the MIT License.


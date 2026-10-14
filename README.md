# Blog app

A small blog with client-side routes. The nav stays on every page. Posts are a fixed list, and the admin page is only available after you log in.

## Screenshots

**Home.** The current link is blue.

![Home page with a link to the blog posts](docs/screenshots/home.png)

**Posts.** Five posts. A narrow window shows one column, a medium window shows two, and a wide window shows five. Each card links to `/blog/` plus that post’s slug.

![List of five blog posts in two columns](docs/screenshots/blog-list.png)

**One post.** The address is the slug, for example `/blog/demystifying-the-modern-full-stack`. Blogs List stays highlighted because the address still starts with `/blog`. Back returns to the previous page.

![The full-stack architecture post with its cover image and text](docs/screenshots/post.png)

**Login.** The form has an email, a password, Login, and Reset.

![Login form with email and password fields](docs/screenshots/login.png)

**Admin.** After login, the nav shows Admin and Log Out. The dashboard shows the email you entered.

![Admin dashboard signed in as reader@example.com](docs/screenshots/admin.png)

**Unknown URL.** A path that matches no route says the page was not found.

![Page not found, with a link back home](docs/screenshots/not-found.png)

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/blog` | The list of posts |
| `/blog/:slug` | That post, or “Post not found” if the slug is not in the list |
| `/login` | Login form |
| `/admin` | Admin dashboard |
| anything else | Page not found |

Opening `/admin` while signed out sends you to `/login`. After a successful login you return to the page you were trying to open, or to `/admin`.

## Login

The password is not checked. The email you type is saved as the signed-in name and shown on the admin page. Reset clears both fields. Log Out returns to Home.

The sign-in lasts only while the page stays open. A refresh signs you out.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually `http://localhost:5173/`.

| Command | What it does |
| --- | --- |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Serve the production build |
| `npm run lint` | Run ESLint |

## Built with

- React 19 and TypeScript
- React Router
- Vite
- Tailwind CSS

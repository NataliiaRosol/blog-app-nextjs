interface BlogType {
  slug: string;
  content: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const SampleBlogs: BlogType[] = [
  {
    slug: "mastering-react-components",
    title: "Mastering React Components",
    description: "An in-depth guide to understanding and creating React components.",
    content: `React has revolutionized the way we build web applications by introducing a component-based architecture. Components are the building blocks of React, enabling developers to create reusable, maintainable, and dynamic user interfaces. If you're ready to take your React skills to the next level, mastering components is the key. Let’s dive into the essentials of React components and how to leverage their full potential.`
  },
  {
    slug: "tailwind-css-beginners",
    title: "Tailwind CSS for Beginners",
    description: "Learn how to quickly style your web applications using Tailwind CSS.",
    imageUrl: "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: `Tailwind CSS is a utility-first CSS framework that simplifies styling your website. Instead of writing custom CSS, you use pre-built classes to style elements directly in your HTML. For example, you can apply bg-blue-500 for a blue background or text-center to center your text. Tailwind is highly customizable and makes creating responsive designs fast and efficient. It’s perfect for beginners who want a structured, straightforward approach to styling.`
  },
  {
    slug: "javascript-closures",
    title: "Understanding JavaScript Closures",
    description: "A comprehensive explanation of closures in JavaScript with examples.",
    content: `Closures are a powerful feature of JavaScript that allow a function to access variables from its outer scope, even after that scope has closed. For example, if you create a function inside another function, the inner function can still use variables from the outer one. Closures are essential for creating private variables and callback functions. Understanding closures will improve your coding skills and help you write more efficient JavaScript.`
  },
  {
    slug: "power-of-flexbox",
    title: "The Power of Flexbox in CSS",
    description: "How to use Flexbox to create flexible and responsive layouts.",
    content: `Flexbox is a CSS layout model that simplifies creating flexible and responsive designs. With Flexbox, you can align items horizontally or vertically, distribute space evenly, and handle items of different sizes in a container. For example, properties like justify-content: center; and align-items: flex-start; make positioning intuitive. Flexbox is especially useful for modern layouts and works seamlessly across most browsers.`
  },
  {
    slug: "introduction-to-nextjs",
    title: "Introduction to Next.js",
    description: "Get started with Next.js, a powerful React framework for building web applications.",
    content: `Next.js is a powerful React framework that enables server-side rendering, static site generation, and dynamic routing. It’s built for performance and SEO, making it an excellent choice for modern web applications. With Next.js, you can easily create scalable websites using features like file-based routing and API endpoints. Whether you’re building a blog, eCommerce site, or dashboard, Next.js simplifies development while enhancing the user experience.`
  },
  {
    slug: "advanced-git-tips",
    title: "Advanced Git Tips and Tricks",
    description: "Improve your Git skills with these advanced tips and best practices.",
    content: `Take your Git skills to the next level with these advanced tips! Learn how to use interactive rebase (git rebase -i) to clean up your commit history or git stash to save temporary changes without committing them. Use git cherry-pick to select and apply specific commits from other branches. Mastering these techniques will make your workflow more efficient and help you tackle complex version control scenarios with ease.`
  }
];

export default SampleBlogs
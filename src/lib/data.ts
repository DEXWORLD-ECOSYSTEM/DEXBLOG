import type { Post, Author, Category, Tag } from './types';

const authors: Author[] = [
  {
    id: '1',
    name: 'Jane Doe',
    avatarUrl: 'https://picsum.photos/seed/author1/100/100',
    imageHint: 'woman portrait',
    bio: 'Jane is a full-stack developer and a passionate writer, focusing on modern web technologies and productivity.',
  },
  {
    id: '2',
    name: 'John Smith',
    avatarUrl: 'https://picsum.photos/seed/author2/100/100',
    imageHint: 'man portrait',
    bio: 'John explores the intersection of design and technology, with a special interest in user experience and creative coding.',
  },
];

const categories: Category[] = [
  { id: '1', name: 'Technology', slug: 'technology' },
  { id: '2', name: 'Productivity', slug: 'productivity' },
  { id: '3', name: 'Lifestyle', slug: 'lifestyle' },
];

const tags: Tag[] = [
  { id: '1', name: 'React', slug: 'react' },
  { id: '2', name: 'Next.js', slug: 'next-js' },
  { id: '3', name: 'Design', slug: 'design' },
  { id: '4', name: 'AI', slug: 'ai' },
  { id: '5', name: 'Career', slug: 'career' },
];

const posts: Post[] = [
  {
    id: '1',
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Deep Dive',
    excerpt: 'Explore the full potential of React Hooks, from useState to custom hooks, and elevate your component logic.',
    content: `
## Introduction to React Hooks
React Hooks were introduced in React 16.8 and they let you use state and other React features without writing a class. This has revolutionized how we write React components, making them more concise and easier to reason about.

### The Power of useState
The most fundamental hook is \`useState\`. It allows you to add state to your functional components. Here's a simple example:
\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`
This simple counter component demonstrates the core of \`useState\`. It returns a pair: the current state value and a function that lets you update it.

### Understanding useEffect
The \`useEffect\` Hook lets you perform side effects in functional components. Data fetching, subscriptions, or manually changing the DOM in React components are all examples of side effects. It's the equivalent of \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` combined.
`,
    imageUrl: 'https://picsum.photos/seed/post1/600/400',
    imageHint: 'technology abstract',
    publishedAt: '2024-05-15T10:00:00Z',
    isFeatured: true,
    authorId: '1',
    categoryId: '1',
    tagIds: ['1', '2'],
  },
  {
    id: '2',
    slug: 'ai-in-web-development',
    title: 'The Rise of AI in Web Development',
    excerpt: 'Artificial intelligence is no longer science fiction. Learn how AI is transforming the way we build websites and applications.',
    content: `
## AI-Powered Tools
From code completion with GitHub Copilot to automated testing, AI is augmenting the developer workflow. These tools help us write better code, faster.

## Generative UI
Imagine describing a user interface in plain English and having an AI generate the component code for you. This is the promise of generative UI, and it's closer than you think. Tools like v0.dev are pioneering this space, allowing for rapid prototyping and development.

### The Future is Now
As AI models become more powerful, their integration into our development processes will only deepen. It's an exciting time to be a web developer.
`,
    imageUrl: 'https://picsum.photos/seed/post2/600/400',
    imageHint: 'laptop code',
    publishedAt: '2024-05-12T14:30:00Z',
    isFeatured: false,
    authorId: '1',
    categoryId: '1',
    tagIds: ['4'],
  },
  {
    id: '3',
    slug: 'finding-your-design-inspiration',
    title: 'How to Find Your Design Inspiration',
    excerpt: 'Feeling stuck in a creative rut? Here are some proven methods and resources to spark your next design idea.',
    content: `
## Look Beyond the Screen
Inspiration is everywhere. Look at architecture, nature, print magazines, and art. The principles of composition, color, and form are universal.

## Create a Mood Board
Collect images, color palettes, and typography that resonate with you. Tools like Pinterest or Milanote are great for this. A mood board helps solidify the visual direction before you start designing.

## Study the Greats
Analyze the work of designers you admire. What makes their work effective? Don't just copy, but deconstruct their choices to understand the 'why' behind them.
`,
    imageUrl: 'https://picsum.photos/seed/post3/600/400',
    imageHint: 'mountain landscape',
    publishedAt: '2024-05-10T09:00:00Z',
    isFeatured: false,
    authorId: '2',
    categoryId: '3',
    tagIds: ['3'],
  },
  {
    id: '4',
    slug: 'the-art-of-saying-no',
    title: 'Productivity Hacks: The Art of Saying No',
    excerpt: 'Your time is your most valuable asset. Learning to say "no" is crucial for protecting your focus and achieving your goals.',
    content: `
## Why Saying No is Hard
We are social creatures, and the desire to be helpful and liked is strong. However, saying yes to everything leads to burnout and mediocre work.

## A Framework for "No"
1.  **Be respectful but firm.**
2.  **Explain the "why" briefly.** (e.g., "I can't take this on right now as I need to focus on Project X.")
3.  **Offer an alternative if possible.** (e.g., "I can't help this week, but I might have time next week.")

Mastering this skill is a superpower for your career and well-being.
`,
    imageUrl: 'https://picsum.photos/seed/post4/600/400',
    imageHint: 'city night',
    publishedAt: '2024-05-08T11:00:00Z',
    isFeatured: false,
    authorId: '1',
    categoryId: '2',
    tagIds: ['5'],
  },
  {
    id: '5',
    slug: 'a-guide-to-minimalist-living',
    title: 'A Beginner\'s Guide to Minimalist Living',
    excerpt: 'Discover the freedom of living with less. Minimalism isn\'t about deprivation, but about making room for what truly matters.',
    content: 'Content for minimalist living...',
    imageUrl: 'https://picsum.photos/seed/post5/600/400',
    imageHint: 'coffee table',
    publishedAt: '2024-05-05T18:00:00Z',
    isFeatured: false,
    authorId: '2',
    categoryId: '3',
    tagIds: [],
  },
  {
    id: '6',
    slug: 'building-a-personal-brand',
    title: 'Why Every Developer Needs a Personal Brand',
    excerpt: 'In a crowded market, a strong personal brand can open doors to new opportunities. Here\'s how to start building yours.',
    content: 'Content for personal branding...',
    imageUrl: 'https://picsum.photos/seed/post6/600/400',
    imageHint: 'library books',
    publishedAt: '2024-05-02T12:00:00Z',
    isFeatured: false,
    authorId: '1',
    categoryId: '2',
    tagIds: ['5'],
  },
  {
    id: '7',
    slug: 'the-journey-of-learning-nextjs',
    title: 'The Journey of Learning Next.js',
    excerpt: 'From pages router to app router, my personal journey of mastering Next.js and its powerful features.',
    content: 'Content for learning Next.js...',
    imageUrl: 'https://picsum.photos/seed/post7/600/400',
    imageHint: 'forest road',
    publishedAt: '2024-04-28T16:45:00Z',
    isFeatured: false,
    authorId: '2',
    categoryId: '1',
    tagIds: ['1', '2'],
  },
];

// Data fetching functions
export function getPosts(args?: { page?: number; limit?: number; categorySlug?: string; tagSlug?: string }): Post[] {
  let filteredPosts = [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  if (args?.categorySlug) {
    const category = categories.find(c => c.slug === args.categorySlug);
    if (category) {
      filteredPosts = filteredPosts.filter(p => p.categoryId === category.id);
    }
  }

  if (args?.tagSlug) {
    const tag = tags.find(t => t.slug === args.tagSlug);
    if (tag) {
      filteredPosts = filteredPosts.filter(p => p.tagIds.includes(tag.id));
    }
  }

  if (args?.page && args?.limit) {
    const start = (args.page - 1) * args.limit;
    const end = start + args.limit;
    return filteredPosts.slice(start, end);
  }

  return filteredPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getFeaturedPost(): Post | undefined {
  return posts.find((post) => post.isFeatured);
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find((author) => author.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}


export function getTagsByIds(ids: string[]): Tag[] {
  return tags.filter((tag) => ids.includes(tag.id));
}

export function getTagBySlug(slug: string): Tag | undefined {
    return tags.find(t => t.slug === slug);
}

export function getAllTags(): Tag[] {
    return tags;
}

export function getAllCategories(): Category[] {
    return categories;
}

export function getAllAuthors(): Author[] {
    return authors;
}

export function getAllPosts(): Post[] {
    return posts;
}

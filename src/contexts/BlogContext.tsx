import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id' | 'date'>) => void;
  updatePost: (id: string, post: Omit<BlogPost, 'id' | 'date'>) => void;
  deletePost: (id: string) => void;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const ADMIN_EMAIL = 'gussisters@admin.com';
const ADMIN_PASSWORD = 'gus123';
const STORAGE_KEY = 'gus_blog_posts';
const AUTH_KEY = 'gus_admin_auth';

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Load posts from localStorage
    const storedPosts = localStorage.getItem(STORAGE_KEY);
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }

    // Check authentication
    const auth = localStorage.getItem(AUTH_KEY);
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    // Save posts to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_KEY);
  };

  const addPost = (post: Omit<BlogPost, 'id' | 'date'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
  };

  const updatePost = (id: string, updatedPost: Omit<BlogPost, 'id' | 'date'>) => {
    setPosts(posts.map(post => 
      post.id === id 
        ? { ...post, ...updatedPost } 
        : post
    ));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <BlogContext.Provider value={{ 
      posts, 
      addPost, 
      updatePost, 
      deletePost, 
      isAuthenticated, 
      login, 
      logout 
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

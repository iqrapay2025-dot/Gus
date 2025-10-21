import React, { useState } from 'react';
import { LogOut, Plus, Edit, Trash2, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlog, BlogPost } from '../contexts/BlogContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { RichTextEditor } from './RichTextEditor';

interface AdminPanelProps {
  onBack: () => void;
}

export const AdminPanel = ({ onBack }: AdminPanelProps) => {
  const { t } = useLanguage();
  const { posts, addPost, updatePost, deletePost, logout } = useBlog();
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: 'GUS Admin',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      updatePost(editingPost.id, formData);
      setEditingPost(null);
    } else {
      addPost(formData);
      setIsCreating(false);
    }
    setFormData({ title: '', content: '', author: 'GUS Admin' });
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      author: post.author,
    });
    setIsCreating(true);
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingPost(null);
    setFormData({ title: '', content: '', author: 'GUS Admin' });
  };

  const handleLogout = () => {
    logout();
    onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl" style={{ color: '#3C7A22' }}>
              {t.admin.title}
            </h1>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onBack}>
                <X className="w-4 h-4 mr-2" />
                Close
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                {t.admin.logout}
              </Button>
            </div>
          </div>

          {/* Create/Edit Form */}
          {isCreating ? (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>
                  {editingPost ? t.admin.editPost : t.admin.createPost}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="title">{t.admin.postTitle}</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                      placeholder="Enter post title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      required
                      placeholder="Author name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="content">{t.admin.postContent}</Label>
                    <RichTextEditor
                      value={formData.content}
                      onChange={(content) => setFormData({ ...formData, content })}
                      placeholder="Enter post content..."
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" style={{ backgroundColor: '#3C7A22' }}>
                      {t.admin.save}
                    </Button>
                    <Button type="button" variant="outline" onClick={handleCancel}>
                      {t.admin.cancel}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Button 
              onClick={() => setIsCreating(true)} 
              className="mb-8"
              style={{ backgroundColor: '#3C7A22' }}
            >
              <Plus className="w-4 h-4 mr-2" />
              {t.admin.createPost}
            </Button>
          )}

          {/* Posts List */}
          <div>
            <h2 className="text-2xl mb-4" style={{ color: '#3C7A22' }}>
              {t.admin.posts}
            </h2>
            {posts.length === 0 ? (
              <p className="text-gray-600">No posts yet. Create your first post!</p>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{post.title}</CardTitle>
                          <p className="text-sm text-gray-500 mt-2">
                            By {post.author} • {new Date(post.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(post)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => {
                              if (confirm('Are you sure you want to delete this post?')) {
                                deletePost(post.id);
                              }
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div 
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ 
                          __html: post.content.substring(0, 200) + '...' 
                        }}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

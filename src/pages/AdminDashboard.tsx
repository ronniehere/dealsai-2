
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { BlogPost } from '@/types/blog';
import { Plus, LogOut, Edit, Trash2, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: 'Admin'
  });
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }

    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      setBlogPosts(JSON.parse(storedPosts));
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: formData.title,
      content: formData.content,
      excerpt: formData.excerpt,
      author: formData.author,
      publishedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const updatedPosts = [newPost, ...blogPosts];
    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    setFormData({ title: '', content: '', excerpt: '', author: 'Admin' });
    setIsCreating(false);

    toast({
      title: "Blog Post Created",
      description: "Your blog post has been published successfully",
    });
  };

  const handleDelete = (id: string) => {
    const updatedPosts = blogPosts.filter(post => post.id !== id);
    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    toast({
      title: "Blog Post Deleted",
      description: "The blog post has been removed",
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 w-4 h-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Create New Post</h2>
              {!isCreating && (
                <Button onClick={() => setIsCreating(true)}>
                  <Plus className="mr-2 w-4 h-4" />
                  New Post
                </Button>
              )}
            </div>

            {isCreating && (
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="text-white">Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Enter blog post title"
                        required
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="excerpt" className="text-white">Excerpt</Label>
                      <Input
                        id="excerpt"
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        placeholder="Brief summary of the post"
                        required
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="author" className="text-white">Author</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        placeholder="Author name"
                        required
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="content" className="text-white">Content</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Write your blog post content here..."
                        rows={8}
                        required
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                        Publish Post
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setIsCreating(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">Published Posts</h2>
            <div className="space-y-4">
              {blogPosts.length === 0 ? (
                <p className="text-gray-400">No blog posts yet. Create your first post!</p>
              ) : (
                blogPosts.map((post) => (
                  <Card key={post.id} className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white text-lg">{post.title}</CardTitle>
                          <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

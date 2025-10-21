import React, { useState } from 'react';
import { Lock, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBlog } from '../contexts/BlogContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface AdminLoginProps {
  onSuccess: () => void;
  onBack: () => void;
}

export const AdminLogin = ({ onSuccess, onBack }: AdminLoginProps) => {
  const { t } = useLanguage();
  const { login } = useBlog();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = login(email, password);
    if (success) {
      onSuccess();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl" style={{ color: '#3C7A22' }}>
                {t.admin.title}
              </CardTitle>
              <CardDescription className="mt-2">
                Enter your credentials to access the admin panel
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onBack}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">{t.admin.email}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="gussisters@admin.com"
              />
            </div>
            <div>
              <Label htmlFor="password">{t.admin.password}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••"
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
            <Button 
              type="submit" 
              className="w-full"
              style={{ backgroundColor: '#3C7A22' }}
            >
              <Lock className="w-4 h-4 mr-2" />
              {t.admin.login}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

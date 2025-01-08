import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

type AuthMode = 'login' | 'signup';

export default function Auth() {
  const { login } = useAuth();
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      await login(email, password);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#111111] p-4">
      <div className="w-full max-w-4xl bg-[#1C1C1C] rounded-2xl shadow-2xl overflow-hidden flex">
        {/* Left Side - Image */}
        <div className="w-2/5 relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent" />
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
            alt="Ondas Abstratas"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Bem-vindo à nossa Plataforma</h2>
            <p className="text-gray-200 text-sm">Segura, Rápida e Confiável</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-3/5 p-8">
          <div className="w-72 mx-auto mb-12">
            <Logo />
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-100">
              {mode === 'login' ? 'Bem-vindo de volta' : 'Criar uma conta'}
            </h2>
            <p className="text-gray-400 mt-2">
              {mode === 'login' ? (
                <>
                  Novo na plataforma?{' '}
                  <button
                    onClick={() => setMode('signup')}
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Criar uma conta
                  </button>
                </>
              ) : (
                <>
                  Já possui uma conta?{' '}
                  <button
                    onClick={() => setMode('login')}
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Entrar
                  </button>
                </>
              )}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-300">Nome</Label>
                  <Input 
                    id="firstName" 
                    placeholder="João" 
                    className="bg-[#2C2C2C] border-gray-700 text-gray-100 placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-300">Sobrenome</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Silva" 
                    className="bg-[#2C2C2C] border-gray-700 text-gray-100 placeholder:text-gray-500"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="joao@exemplo.com"
                className="bg-[#2C2C2C] border-gray-700 text-gray-100 placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-[#2C2C2C] border-gray-700 text-gray-100 placeholder:text-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium text-gray-300"
                >
                  Lembrar-me
                </label>
              </div>
              {mode === 'login' && (
                <Button
                  variant="link"
                  className="text-blue-400 hover:text-blue-300 px-0"
                >
                  Esqueceu a senha?
                </Button>
              )}
            </div>

            <Button
              type="submit"
              className={cn(
                "w-full",
                "bg-blue-600 hover:bg-blue-700",
                "text-white font-medium py-2 px-4 rounded-lg",
                "transition-colors duration-200"
              )}
            >
              {mode === 'login' ? 'Entrar' : 'Criar conta'}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#1C1C1C] text-gray-400">
                  Ou continue com
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="w-full bg-[#2C2C2C] border-gray-700 hover:bg-[#3C3C3C] text-gray-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button
                variant="outline"
                className="w-full bg-[#2C2C2C] border-gray-700 hover:bg-[#3C3C3C] text-gray-300"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fill="currentColor"
                  />
                </svg>
                Facebook
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
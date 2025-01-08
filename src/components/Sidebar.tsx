import { useState, useEffect } from 'react';
import { Plus, Minus, LayoutDashboard, Users, Settings, BarChart2, FileText, LogOut, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

interface MenuItem {
  title: string;
  icon: JSX.Element;
  path?: string;
  submenu?: { title: string; path: string }[];
}

export default function Sidebar() {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>('Dashboard');
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentDate = currentTime.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const currentHour = currentTime.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Sao_Paulo'
  });

  // Rest of your menuItems array...

  return (
    <div className={cn(
      "bg-white dark:bg-[#1C1C1C] shadow-lg h-screen rounded-2xl flex flex-col transition-all duration-300",
      isExpanded ? "w-64" : "w-20"
    )}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-center">
          <Logo iconOnly={!isExpanded} />
        </div>
      </div>

      <div className="px-4 py-2 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        {isExpanded ? (
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{currentDate}</span>
            <span>•</span>
            <span>{currentHour}</span>
          </div>
        ) : (
          <span />
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isExpanded ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </Button>
      </div>

      {/* Rest of your component... */}
    </div>
  );
}
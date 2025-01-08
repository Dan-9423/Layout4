import NotificationBell from './NotificationBell';
import ThemeToggle from './ThemeToggle';
import UserProfile from './UserProfile';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import CalculatorComponent from '../Calculator';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function TopBanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-[#1C1C1C] rounded-lg shadow-lg dark:shadow-[#000000]/10 p-4 mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h2>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
            <Calculator className="h-5 w-5" />
          </Button>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Calculator</DialogTitle>
              </DialogHeader>
              <CalculatorComponent />
            </DialogContent>
          </Dialog>
          <NotificationBell />
          <ThemeToggle />
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
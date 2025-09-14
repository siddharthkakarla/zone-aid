'use client';

import { Badge } from "@/components/ui/badge";

type DeliveryStatus = 'Pending' | 'In Transit' | 'Delivered' | 'Failed';

interface DeliveryStatusBadgeProps {
  status: DeliveryStatus | string;
}

export default function DeliveryStatusBadge({ status }: DeliveryStatusBadgeProps) {
  const getVariant = () => {
    switch (status) {
      case 'Delivered':
        return 'default'; // default is green-ish in this theme
      case 'In Transit':
        return 'secondary'; // secondary is blue-ish
      case 'Pending':
        return 'outline'; // outline is grey
      case 'Failed':
        return 'destructive'; // destructive is red
      default:
        return 'outline';
    }
  };
  
  const getBadgeClass = () => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700';
      case 'Failed':
         return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500';
    }
  }


  return (
    <Badge className={getBadgeClass()}>{status}</Badge>
  );
}

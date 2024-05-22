import React from 'react';

type BadgeSize = 'sm' | 'md' | 'lg';
type BadgeType = 'neutral' | 'error' | 'warning' | 'success' | 'brand';

type Props = {
  size?: BadgeSize;
  type?: BadgeType;
  label: string;
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-0.5 text-sm',
  lg: 'px-2.5 py-1 text-sm',
};

const typeClasses: Record<BadgeType, string> = {
  neutral: 'border-neutral-200 bg-gray-50 text-neutral-600',
  error: 'border-red-200 bg-red-50 text-red-600',
  warning: 'border-amber-200 bg-amber-50 text-amber-600',
  success: 'border-green-200 bg-green-50 text-green-600',
  brand: 'border-indigo-200 bg-indigo-50 text-indigo-600',
};

export default function Badge({ size = 'md', type = 'neutral', label = 'Label' }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full border font-normal ${sizeClasses[size]} ${typeClasses[type]}`}
      role="status">
      {label}
    </span>
  );
}

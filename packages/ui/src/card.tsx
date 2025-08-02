import React from "react";

type CardProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export function Card({
  title,
  description,
  children,
  footer,
  className = "",
}: CardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-600 dark:text-white ${className}`}
    >
      {/* Background animation blur glow */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-1 blur-2xl bg-gradient-to-br from-indigo-300/20 via-pink-300/20 to-purple-300/20 rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {title && (
          <h2 className="text-2xl font-semibold mb-2 tracking-tight text-gray-800 dark:text-white">
            {title}
          </h2>
        )}

        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {children && <div className="mb-4">{children}</div>}

        {footer && (
          <div className="border-t border-gray-100 dark:border-gray-700 pt-4 text-sm text-gray-500 dark:text-gray-400">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}



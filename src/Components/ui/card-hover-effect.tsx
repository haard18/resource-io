import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description?: string;
    subjects?: string[];
    link: string;
    driveLink: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 py-10",
        "mobile:flex-row mobile:flex-wrap laptop:flex-row laptop:justify-center desktop:flex-row desktop:justify-center",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block w-full max-w-sm"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-50 to-gray-700 block rounded-3xl shadow-xl opacity-5"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <a href={item?.link}>
              <CardTitle>{item.title}</CardTitle>
            </a>
            {item.description && (
              <CardDescription>{item.description}</CardDescription>
            )}
            {item.subjects && (
              <div className="mt-6 text-center">
                <CardSubjects subjects={item.subjects} />
              </div>
            )}
            <div className="mt-6 flex justify-center">
              <DriveLinkButton driveLink={item.driveLink} />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center rounded-3xl h-full w-full p-6 overflow-hidden bg-gradient-to-r from-black to-gray-800 shadow-lg border border-gray-600 group-hover:shadow-2xl transform group-hover:scale-105 transition-transform duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-white font-bold tracking-wide mt-4 text-center text-lg",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-gray-300 tracking-wide leading-relaxed text-sm text-center",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSubjects = ({
  subjects,
  className,
}: {
  subjects: string[];
  className?: string;
}) => {
  return (
    <ul
      className={cn(
        "mt-4 text-gray-200 tracking-wide leading-relaxed text-sm text-center list-none",
        className
      )}
    >
      {subjects.map((subject, index) => (
        <li key={index} className="mt-1">
          {subject}
        </li>
      ))}
    </ul>
  );
};

export const DriveLinkButton = ({
  driveLink,
  className,
}: {
  driveLink: string;
  className?: string;
}) => {
  return (
    <a
      href={driveLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block px-4 py-2 mt-2 text-sm font-medium text-white bg-gradient-to-r from-black to-gray-700 rounded hover:bg-gradient-to-l hover:from-gray-700 hover:to-black transition-colors duration-300",
        className
      )}
    >
      Open Drive Link
    </a>
  );
};

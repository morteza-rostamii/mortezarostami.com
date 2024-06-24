'use client'

export function DotBackground({children}:any) {
  return (
    <div className="#h-[50rem] w-full dark:bg-black bg-dark-default  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-dark-default [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 py-8">
        {children}
      </div>
    </div>
  );
}

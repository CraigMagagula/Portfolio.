
import React from 'react';

// Note: These icons are styled to match the site's aesthetic.

export const JSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="currentColor" {...props}>
    <path d="M2,6v52a4,4,0,0,0,4,4H58a4,4,0,0,0,4-4V6a4,4,0,0,0-4-4H6A4,4,0,0,0,2,6Z"/>
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#13131A" fontSize="32" fontWeight="bold" fontFamily="Arial, sans-serif">JS</text>
  </svg>
);

export const NextJSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="currentColor" {...props}>
    <circle cx="32" cy="32" r="32"/>
    <path fill="#13131A" d="M38.7 20.3h6.1v23.5h-5.4L28.3 27.6v16.2h-6.1V20.3h5.4l11.1 16.2V20.3z"/>
  </svg>
);

export const HTML5Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="currentColor" {...props}>
    <path d="M6,2l5,54,21,6,21-6L58,2ZM47,16H17l1,12H44l-2,20-9,3-9-3-1-8h8l.5,4,5,1.5,5-1.5.5-8H18l-2-20Z"/>
  </svg>
);

export const CSS3Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="currentColor" {...props}>
    <path d="M6,2l5,54,21,6,21-6,5-54ZM42,48l-9,3-9-3-1-8h8l.5,4,5,1.5,5-1.5.5-8H20l-1-4H45l-1-12H15l-1-12H49Z"/>
  </svg>
);

export const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-11.5 -10.232 23 20.463" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <circle cx="0" cy="0" r="2.05"/>
    <g>
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

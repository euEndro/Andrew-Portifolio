const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconTerminal({ className = "", stroke = "currentColor" }) {
  return (
    <svg {...base} className={className} stroke={stroke}>
      <rect x="8" y="10" width="48" height="34" />
      <path d="M18 22l8 6-8 6" />
      <path d="M32 34h14" />
      <path d="M24 50h16" />
      <path d="M32 44v6" />
    </svg>
  );
}

export function IconServerRack({ className = "", stroke = "currentColor" }) {
  return (
    <svg {...base} className={className} stroke={stroke}>
      <rect x="10" y="8" width="44" height="12" />
      <rect x="10" y="26" width="44" height="12" />
      <rect x="10" y="44" width="44" height="12" />
      <circle cx="18" cy="14" r="1.6" fill={stroke} stroke="none" />
      <circle cx="18" cy="32" r="1.6" fill={stroke} stroke="none" />
      <circle cx="18" cy="50" r="1.6" fill={stroke} stroke="none" />
      <path d="M28 14h20" />
      <path d="M28 32h20" />
      <path d="M28 50h20" />
    </svg>
  );
}

export function IconCircuit({ className = "", stroke = "currentColor" }) {
  return (
    <svg {...base} className={className} stroke={stroke}>
      <rect x="22" y="22" width="20" height="20" />
      <path d="M12 16v8M12 24h10" />
      <path d="M12 48v-8M12 40h10" />
      <path d="M52 16v8M52 24H42" />
      <path d="M52 48v-8M52 40H42" />
      <circle cx="12" cy="16" r="2" fill={stroke} stroke="none" />
      <circle cx="12" cy="48" r="2" fill={stroke} stroke="none" />
      <circle cx="52" cy="16" r="2" fill={stroke} stroke="none" />
      <circle cx="52" cy="48" r="2" fill={stroke} stroke="none" />
    </svg>
  );
}

export function IconBooks({ className = "", stroke = "currentColor" }) {
  return (
    <svg {...base} className={className} stroke={stroke}>
      <rect x="8" y="40" width="30" height="8" />
      <rect x="10" y="32" width="26" height="8" />
      <rect x="8" y="24" width="30" height="8" />
      <path d="M44 46V16l8 4v26z" />
      <path d="M44 16l6-4 8 4-6 4" />
    </svg>
  );
}

export function IconCompass({ className = "", stroke = "currentColor" }) {
  return (
    <svg {...base} className={className} stroke={stroke}>
      <path d="M32 10v6" />
      <circle cx="32" cy="12" r="2.5" />
      <path d="M32 16L18 52" />
      <path d="M32 16L46 52" />
      <path d="M22 44h20" />
      <path d="M18 52l-3 4M46 52l3 4" />
    </svg>
  );
}

export function IconScroll({ className = "", stroke = "currentColor" }) {
  return (
    <svg {...base} className={className} stroke={stroke}>
      <path d="M14 14a4 4 0 000 8h4" />
      <path d="M50 50a4 4 0 000-8h-4" />
      <path d="M18 14h32v36H18z" />
      <path d="M24 24h20M24 32h20M24 40h12" />
    </svg>
  );
}

export function AndrewMonogram({ className = "", fill = "currentColor" }) {
  return (
    <svg viewBox="0 0 135 90" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={fill}
        d="M21.44 89.1522C21.44 89.2802 21.3973 89.3869 21.312 89.4722C21.2267 89.5575 21.0987 89.6002 20.928 89.6002H0.512C0.341333 89.6002 0.213333 89.5575 0.128 89.4722C0.0426667 89.3869 0 89.2802 0 89.1522C0 88.9815 0.064 88.8749 0.192 88.8322C0.32 88.7469 0.448 88.6829 0.576 88.6402L3.008 87.9362C4.37333 87.4669 5.73867 86.4855 7.104 84.9922C8.46933 83.4989 9.62133 81.1948 10.56 78.0802L31.232 7.74402C31.744 6.08001 31.7653 4.75734 31.296 3.77601C30.8267 2.75201 29.9307 1.96268 28.608 1.40801C28.1387 1.06667 27.776 0.853339 27.52 0.768007C27.264 0.68267 27.136 0.576003 27.136 0.448007C27.136 0.277337 27.1787 0.170667 27.264 0.127999C27.392 0.0426662 27.5627 0 27.776 0H52.736H82.684C90.4067 0 97.4467 1.13067 103.804 3.39201C110.204 5.61068 115.708 8.87469 120.316 13.184C124.967 17.4507 128.551 22.656 131.068 28.8001C133.585 34.9014 134.844 41.8561 134.844 49.6641C134.844 58.0695 132.945 65.2588 129.148 71.2322C125.351 77.1628 120.039 81.7068 113.212 84.8642C106.385 88.0215 89.2587 89.6002 80.128 89.6002H51.904C51.7333 89.6002 51.584 89.5575 51.456 89.4722C51.3707 89.3869 51.328 89.2802 51.328 89.1522C51.328 88.9815 51.392 88.8749 51.52 88.8322L52.096 88.6402L55.168 88.1922C56.192 87.8935 56.832 87.4669 57.088 86.9122C57.344 86.3575 57.3013 85.5469 56.96 84.4802L48.0369 56.3201H18.2624L11.776 78.3362C11.264 80.0428 11.2427 81.5575 11.712 82.8802C12.224 84.1602 13.0987 85.2269 14.336 86.0802C15.5733 86.9335 17.0453 87.6162 18.752 88.1282L20.8 88.6402C21.056 88.7255 21.2267 88.8109 21.312 88.8962C21.3973 88.9389 21.44 89.0242 21.44 89.1522ZM50.048 2.17601C50.304 1.74934 50.9227 1.47201 51.904 1.344L77.5 1.21601H82.684C87.8893 1.21601 92.54 2.24001 96.636 4.28801C100.732 6.29335 104.231 9.28002 107.132 13.248C110.033 17.1734 112.231 22.0374 113.724 27.8401C115.26 33.6001 116.028 40.2134 116.028 47.6801C116.028 57.1948 114.855 64.9601 112.508 70.9762C110.204 76.9495 107.025 81.3442 102.972 84.1602C98.9613 86.9762 94.396 88.3842 89.276 88.3842H79.932C79.932 88.3842 78.9741 88.1713 78.5 87.9999C78.0259 87.8284 77.504 87.5522 77.504 87.5522C76.864 87.0402 76.3733 86.2722 76.032 85.2482L50.304 4.48001C49.92 3.37068 49.8347 2.60267 50.048 2.17601ZM32.6079 7.62846L18.6206 55.1041H47.6516L32.6079 7.62846Z"
      />
    </svg>
  );
}

export function IconWrench({ className = "", stroke = "currentColor" }) {
  return (
    <svg {...base} className={className} stroke={stroke}>
      <path d="M40 12a10 10 0 00-13.6 12.2L10 40.6V50h9.4l16.4-16.4A10 10 0 0048 20l-8 8-6-6z" />
    </svg>
  );
}

export function DocalliMark({ className = "", stroke = "currentColor" }) {
  return (
    <svg viewBox="0 0 232 201" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M215.703 196H17.4444C5.9272 196 0.632723 178.605 9.28798 170.862C29.1133 153.125 50.3838 127.747 50.3838 100.5C50.3838 73.253 29.1133 47.8747 9.28796 30.1383C0.63271 22.3951 5.92719 5 17.4443 5L215.703 5.00001C221.939 5.00001 226.993 10.1514 226.993 16.506V49.5587C226.993 55.4517 222.306 60.2289 216.523 60.2289H216.214C210.602 60.2289 206.053 55.5927 206.053 49.8735C206.053 44.1544 201.504 39.5181 195.892 39.5181L139.125 39.5181C131.052 39.5181 125.55 47.9183 128.495 55.579C134.412 70.9696 142.316 92.9412 142.316 100.5C142.316 108.053 134.425 129.962 128.509 145.325C125.558 152.987 131.06 161.394 139.137 161.394L196.094 161.394C201.594 161.394 206.053 156.85 206.053 151.245C206.053 145.64 210.512 141.096 216.012 141.096H216.523C222.306 141.096 226.993 145.873 226.993 151.766V184.494C226.993 190.849 221.939 196 215.703 196Z"
        stroke={stroke}
        strokeWidth="10"
      />
    </svg>
  );
}

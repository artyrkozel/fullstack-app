import * as React from 'react';
const Market = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
        <path
            fillRule="evenodd"
            d="M15.923 3C18.96 3 21 5.132 21 8.304v7.392C21 18.87 18.96 21 15.923 21H8.077C5.04 21 3 18.869 3 15.696V8.304C3 5.132 5.04 3 8.077 3h7.846Zm0 1.256H8.077c-2.32 0-3.821 1.588-3.821 4.048v7.392c0 2.46 1.5 4.048 3.82 4.048h7.847c2.322 0 3.821-1.588 3.821-4.048V8.304c0-2.46-1.5-4.048-3.82-4.048ZM8.125 9.867c.346 0 .628.281.628.628v5.743a.628.628 0 0 1-1.256 0v-5.743c0-.346.281-.628.628-.628Zm3.907-2.75c.347 0 .628.282.628.629v8.492a.628.628 0 0 1-1.256 0V7.745c0-.347.281-.628.628-.628Zm3.843 5.785c.346 0 .628.281.628.628v2.708a.628.628 0 0 1-1.256 0V13.53c0-.347.281-.628.628-.628Z"
            clipRule="evenodd"
        />
    </svg>
);
export default Market;
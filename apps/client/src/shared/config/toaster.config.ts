import { DefaultToastOptions } from "react-hot-toast";

export const toastOptions : DefaultToastOptions ={
    style: {
        padding: '16px',
        borderRadius: '8px',
    },
    error: {
        style: {
            background: '#f87171',
            color: '#fff',
        },
    },
}
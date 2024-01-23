"use client"
import styles from './header.module.css';
import { useState } from 'react';

export default function Header() {

    const [border, useBorder] = useState("false");

    const handleBorder = (border: any) => {
        useBorder(border!);
    }

    return (
        <div className="my-4 flex text-white justify-between items-center w-full p-4">
            <div className="text-bold">AS</div>
            <div className="itmns flex gap-4">
                <div className={`${styles.borderBottom}`}>
                    Início
                </div>
                <div className={`${styles.borderBottom}`}>
                    Sobre mim
                </div>
                <div className={`${styles.borderBottom}`}>
                    Projetos
                </div>
            </div>

            <div>
                <div className="p-4 rounded-full bg-white"></div>
            </div>
        </div>
    );
}
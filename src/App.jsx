import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Smile } from "lucide-react";




export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600">
        Tailwind çalışıyor!
      </h1>
      <Smile className="text-green-600 w-8 h-8 mt-4" />
    </>
  );
}


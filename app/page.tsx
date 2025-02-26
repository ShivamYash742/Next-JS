import Image from "next/image";
import App from "./components/page";

export default function Home() {
  return (
    <>
      <h1 className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Next JS
      </h1>
      <App />
    </>
  );
}

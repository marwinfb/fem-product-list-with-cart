import { useEffect } from "react";

function Page({title, children}) {
  useEffect(() => { 
    document.title = title; 
  }, [title]);

  return (
    <main>
      {children}
    </main>
  )
}
export default Page
import AddNew from "@/components/AddNew";
import Header from "@/components/Header";
import Notes from "@/components/Notes";
import Image from "next/image";

export default function Home() {
  return (
     <div className="relative w-screen h-screen" >
       <Header/>
       <Notes/>

       <div className="absolute bottom-10 right-10 " >
                    <AddNew/>
            </div>
     </div>
  );
}

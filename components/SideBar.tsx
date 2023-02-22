'use client'
//since we using hooks now
import NewChat from "./NewChat"
import { useSession, signOut} from "next-auth/react"
import {useCollection} from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
function SideBar() {
  const { data: session, status } = useSession();
  const [chats,loading,error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!,'chats'), orderBy("createdAt", "asc"))
  );
  
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
   return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                {/* newchat */}
                <NewChat/>
                <div className="hidden sm:inline">
                    {/* Model selction */}
                    <ModelSelection/>
                </div>
                <div className=" flex flex-col space-y-2 my-2">
                  {
                    loading&&(
                      <div className="animate-pulse text-center text-white">
                        <p>
                          Loading Chats
                        </p>
                      </div>
                    )
                  }
                {chats?.docs.map((chat)=>(
                  <ChatRow key={chat.id} id = {chat.id}/>
                  
                )
                )}
                </div>
                {/* map through the charows */}
                
            </div>
        </div>
        <div>
          
        {session &&(
          <img 
          src={session.user?.image!}          
          alt="Profile pic" 
          className="h-15 w-15 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          />
                )}
          <button onClick={()=>signOut()} className="text-white border-gray-700 border chatRow text-center items-center ">Log out</button>

                </div>
  
    </div>
  )
}

export default SideBar
//className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
//v=src={session.user?.image!} 
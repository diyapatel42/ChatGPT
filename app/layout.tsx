
import SideBar from '@/components/SideBar';
import '../styles/globals.css';
import {SessionProvider1} from "@/components/SessionProvider";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';
import ClientProvider from '@/components/ClientProvider';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);//since this is a server component it can be aysnc only client ones cannot be
   return (
    <html>
      <head />
      <body>
        <SessionProvider1 session ={session}>
          {!session?(
          <div>
            <Login/></div>
            

          ):(
            <div className='flex'>    
        {/* <div className='bg-[#202123] max-w-sm h-screen md:min-w-[20rem] overflow-y-scroll '>   puts in a vertical line*/}
        <div className='bg-[#202123] max-w-sm h-screen md:min-w-[20rem]  '>  
        <SideBar/> 
      </div>
      <ClientProvider/>
          <div className='bg-[#343541] flex-1 h-screen w-screen'>


            {children}
          </div> 
          </div>

          )}
        
          </SessionProvider1>
        </body>
    </html>
  )
}

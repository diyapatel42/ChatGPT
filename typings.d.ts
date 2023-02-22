import { Firestore } from "firebase/firestore";

interface Message  {
    text:string;
    createdAt: admin.firestore.Timestamp;
    user: {
      _id: string;
      name: string;
      avatar: string;

    };}
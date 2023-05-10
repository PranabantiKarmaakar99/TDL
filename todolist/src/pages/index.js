
import react from "react";
import Header from "./components/header";
import Input from "./components/inputbox";
import Tabs from "./components/tab";
import Todolist from "./components/todolist";
import Searchbar from "./components/searchbar";




export default function Home() {
  return (
    <div >
      <Searchbar />
     <Header />
     <Input />
     <Tabs />
     <Todolist />

    </div>
   
  )
}

import { useState } from "preact/hooks";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

import * as Sidebar from "./components/ui/sidebar";
import * as Preact from "preact";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  const children: Sidebar.SidebarChildren = [(<div>"test"</div>),("testb")]

  //TODO update main start page
  return (
    <main>
      <Sidebar.Sidebar children={children}/>
      <div class="container">
        Test
      </div>
    </main>
  );
}

export default App;

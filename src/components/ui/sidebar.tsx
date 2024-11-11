import {LucideCirclePlus, LucideCog, LucidePhoneIncoming, LucideSettings} from "lucide-react"
import * as Preact from "preact"
import { PropsWithChildren } from "preact/compat"

function InkWell(props: PropsWithChildren<{index: number}>) {
    return (
        <span key={props.index} class=" hover:bg-slate-200 self-center p-5">
            {props.children}
        </span>
    )
}

function Sidebar(props: PropsWithChildren) {
    return (
        <div class="p-4">
        <div class="fixed z-10 h-dvh w-min pb-8">
            <div class="flex flex-wrap flex-col auto-cols-auto gap-5 h-full bg-slate-50 overflow-y-auto flex-nowrap mb-10">
                {Preact.toChildArray(props.children).map((child, index) => (
                    <InkWell index={index}>{child}</InkWell>
                ))}
                
                <span key="-2" class="hover:bg-slate-200 self-center p-5 w-full">
                    <LucideCirclePlus/>
                </span>
                <span key="-1" class="hover:bg-slate-200 self-center p-5 mt-auto">
                    <LucideSettings/>
                </span>
            </div>
            
        </div>
        </div>
    )
}

export { Sidebar }

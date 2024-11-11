import {LucideCirclePlus, LucideCog, LucidePhoneIncoming, LucideSettings} from "lucide-react"
import * as Preact from "preact"

type SidebarChildren = (Preact.VNode | string)[]

function Sidebar(props: {children: SidebarChildren}) {
    return (
        <div class="p-4">
        <div class="fixed z-10 h-dvh w-min pb-8">
            <div class="flex flex-wrap flex-col auto-cols-auto gap-5 h-full bg-slate-50">
                {props.children.map((child, index) => (
                    <span key={index} class="m-5 self-center">
                        {child}
                    </span>
                ))}
                <span key="-2" class="m-5 self-center">
                    <LucideCirclePlus/>
                </span>
                <span key="-1" class="m-5 self-center mt-auto">
                    <LucideSettings/>
                </span>
            </div>
        </div>
        </div>
    )
}

export { Sidebar }
export type { SidebarChildren }

import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory(){
    return (
                <div className="flex flex-1 flex-col gap-4">
                    <Link href='/' className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100">
                        <ChevronLeft className="h-4 w-4"/>
                        Voltar á timeline
                    </Link>
                    <form className="flex flex-1 flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <label htmlFor="midia" className=" flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
                                    <Camera className="w-4 h-4"/>
                                    Anexar mídia
                                </label>
                                <input type="file" id="midia" className="invisible h-0 w-0"/>
                                <label htmlFor="isPublic" className="flex items-center  gap-1.5 text-gray-200 hover:text-gray-100">
                                    <input type="checkbox" name="isPuclic" id="isPublic" value='true' className="h-4 w-4 rouded border-gray-400 bg-gray-700 text-purple-500"/>
                                    Tornar memórias Pública  
                                </label>

                            </div>
                          <textarea name="content" spellCheck={false} className="w-full flex-1 resize-none rounded border-0 p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 bg-transparent focus:ring-0"
                          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."/>
                    </form>
                </div>
        )   
}
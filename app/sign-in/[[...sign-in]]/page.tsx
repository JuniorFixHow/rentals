import MainProvider from "@/components/Main";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex h-[80vh] w-full items-center justify-center">
            <MainProvider>
                <SignIn />
            </MainProvider>
        </div>
    )
  }
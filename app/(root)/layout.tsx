import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col text-white-3">
        <main className="relative flex bg-black-3">
        <LeftSidebar />
            <section>
              <div>
                <div>
                  <Image src='/icons/logo.svg' alt='logo' width={30} height={30} />
                  MobileNav
                </div>
                <div>
                {children}
                </div>

              </div>
            </section>
            <RightSidebar />
        </main>
    </div>
  );
}

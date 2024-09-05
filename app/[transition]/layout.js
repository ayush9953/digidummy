export const metadata = {
    title: "Sliding Active Link - Cruip Tutorials",
    description: "Page description",
  };
  
import Background from "@/components/background";
import About from "./about/page";
  import NavProvider from "./nav-provider";
  import NavigationMenu from "./navigation-menu";
import Profile from "./page";
  import Section from "./section";
  
  
  
  export default function SlidingActiveLinkPage({params,children}) {
    const {transition}=params
    const sections = [
      {
        title: "Profile",
        slug: `/${transition}`,
        component: <Profile/>
      },
      {
        title: "About",
        slug: `/${transition}/about`,
        component: <About/>
      },
      {
        title: "Services",
        slug: `/${transition}/services`
      },
      {
        title: "Contact",
        slug: `/${transition}/contact`
      }
    ];  
    return (
      <>
        <main className="relative flex min-h-screen flex-col overflow-hidden">
          <NavProvider>
            <NavigationMenu links={sections} />
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 flex justify-center overflow-hidden">

              {children}
            </div> 
              <Background/>
          </NavProvider>
        </main>
  
        
      </>
    );
  }
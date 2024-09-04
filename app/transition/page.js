export const metadata = {
    title: "Sliding Active Link - Cruip Tutorials",
    description: "Page description",
  };
  
  import NavProvider from "./nav-provider";
  import NavigationMenu from "./navigation-menu";
  import Section from "./section";
  
  const sections = [
    {
      title: "Home",
      slug: "home"
    },
    {
      title: "Customers",
      slug: "customers"
    },
    {
      title: "Partners",
      slug: "partners"
    },
    {
      title: "Team",
      slug: "team"
    }
  ];  
  
  export default function SlidingActiveLinkPage() {
    return (
      <>
        <main className="relative flex min-h-screen flex-col overflow-hidden bg-slate-50">
          <NavProvider>
            <NavigationMenu links={sections} />
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
              {sections.map((section) => (
                <Section key={section.slug} section={section} />
              ))}
            </div> 
          </NavProvider>
        </main>
  
        
      </>
    );
  }
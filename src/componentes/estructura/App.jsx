// import AppHeader from "./AppHeader";
// import AppMain from "./AppMain";

// const App = ( { header, ...props } ) => {
//   return (
//     <div className="app">
//       <AppHeader>{ header }</AppHeader>
//       <AppMain { ...props } />
//     </div>
//   )
// }
// export default App;

import { SidebarInset, SidebarProvider } from '@shadcn/sidebar';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';

const App = ({ children }) => {
  return (
    <SidebarProvider style={{
      "--header-height": "3rem",
    }}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2 p-3">
            <div className="flex flex-col gap-4">
              { children }
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
export default App;
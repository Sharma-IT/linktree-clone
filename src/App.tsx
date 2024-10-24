import { ThemeProvider } from "@/components/theme-provider"
import LinktreeProfile from "@/components/LinktreeProfile"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LinktreeProfile />
    </ThemeProvider>
  )
}

export default App
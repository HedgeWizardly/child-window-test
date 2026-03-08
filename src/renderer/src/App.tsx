import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { Button, Stack } from '@mui/material'

function App(): React.JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const handleNewWindow = () => {
    window.api.openWindow()
  }

  return (
    <Stack alignContent="center" alignItems="center" gap={2}>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <Button variant="contained" onClick={handleNewWindow}>Open Child Window</Button>
    </Stack>
  )
}

export default App

import './styles/App.scss'
import TextEditor from '../TextEditor/TextEditor'
import { useRef } from 'react'

function App() {
  const ref = useRef<string>('')

  return (
    <div
      className={'flex justify-center items-center w-full h-screen'}
    >
      <TextEditor
        ref={ref}
        properties={{
          sizes: {
            w: 640,
            h: 200,
          },
          enableResize: true,
        }}
      />
    </div>
  )
}

export default App

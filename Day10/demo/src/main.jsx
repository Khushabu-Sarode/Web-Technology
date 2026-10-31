import { createRoot } from 'react-dom/client'
import Launcher from './launcher'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(<BrowserRouter>
                                                        <Launcher/>
                                                    </BrowserRouter>)

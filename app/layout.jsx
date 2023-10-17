import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "Promptswap",
    description: "Promptswap is a tool for creating and sharing chatgpt prompts.",
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
                <footer
                    className='flex flex-col justify-center items-center p-10 relative bg-black text-white text-center'
                >
                    <p>Copyright © PROMPTSWAP 2023. All rights reserved.</p>
                    <p>Made with 🤍 by <a href='https://linkedin.com/in/engr-sohaib' target='_blank' className='underline'>Engr. Sohaib</a></p>
                </footer>
            </body>
        </html>
    )
}

export default RootLayout
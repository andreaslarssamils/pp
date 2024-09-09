import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Property Pulse',
    keyWords: 'Property, Real Estate, Buy, Sell, Rent, Invest',
    description: 'Find your dream property with Property Pulse',
}

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}

export default MainLayout;
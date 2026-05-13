function Navbar() {
    return (
        <nav className="font-mono flex items-center justify-between px-8 py-4">
            
            <h1 className="text-xl font-semibold">
                Tony Lee
            </h1>

            <div className="flex gap-6">
                <a className="hover:font-bold" href="#home">Home</a>
                <a className="hover:font-bold" href="#about">About</a>
                <a className="hover:font-bold" href="/experience">Portfolio</a>
                <a className="hover:font-bold" href="/project">Experience</a>
                <a className="hover:font-bold" href="/contact">Contact</a>
            </div>

        </nav>
    )
}

export default Navbar;
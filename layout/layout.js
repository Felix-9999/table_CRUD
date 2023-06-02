export default function Layout( { children }){
    return (
           <div className="flex items-center justify-center min-h-screen bg-gray-100">
           <div className="relative flex flex-col m-6 space-y-8 bg-white-400 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>
            </div>
    )
}

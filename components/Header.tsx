
export default function Header(){

    

    return (
        <div className="w-screen h-20 border-b border-black bg-amber-50 flex justify-between px-20  items-center " >
            <div>
                title
            </div>

            <div className="flex gap-10 justify-between items-center" >
                    <input type="text" className="w-50 h-10 px-2  bg-red-500" placeholder="serach here" />


                <div className="w-15 h-15 rounded-full border border-black" >
                    profile
                </div> 
            </div>
        </div>
    )
}
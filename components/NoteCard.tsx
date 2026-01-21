export default function NoteCard() {
  return (
    <div className="flex flex-col bg-amber-500 justify-between border-2 p-5 rounded-md h-full">
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-3xl font-bold capitalize"> 
          title
        </h3>
        
        <div className="flex gap-5">
          <button className="text-xs text-black font-medium ">
            Edit
          </button>
          <button className=" text-xs text-black ">
            Del
          </button>
        </div>
      </div>

      <p className="text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque labore
        beatae aliquid odio incidunt ducimus quidem voluptatum nisi, voluptates
        deserunt qui omnis dolor!
      </p>
      
    
    </div>
  );
}
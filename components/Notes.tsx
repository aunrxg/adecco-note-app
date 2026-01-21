import AddNew from "./AddNew";
import NoteCard from "./NoteCard";

export default function Notes(){


    return (
        <div className="w-screen relative grid grid-cols-4 gap-5 p-10" >
            <NoteCard/>

            <NoteCard/>
            <NoteCard/>
            <NoteCard/>
            <NoteCard/>
            <NoteCard/>

        </div>
    )
}
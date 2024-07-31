import Sidebar from "./Components/Sidebar/Sidebar";
import ContentArea from "./Components/ContentArea/ContentArea";

const MyNotes = () =>{
    return (
        <div className="flex">
            <Sidebar />
            <ContentArea />
        </div>
    );
}

export default MyNotes;
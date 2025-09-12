import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
    console.log(data);
    
  return (
    <div id="tasklist" className="h-[55%] flex-nowrap overflow-x-auto w-full flex items-center justify-start gap-5 py-5 mt-10">
        {data.tasks.map((elem)=>{
            if (elem.active) {
                return <AcceptTask />
            }
            if (elem.NewTask) {
                return <NewTask />
            }
            if (elem.completed) {
                return <CompleteTask />
            }
            if (elem.failed) {
                return <FailedTask />
            }
        })}

    </div>
  )
}
export default TaskList
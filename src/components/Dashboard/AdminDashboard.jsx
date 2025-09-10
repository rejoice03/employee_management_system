import Header from "../other/Header"

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
        <Header />
        <div>
            <form className="flex items-start justify-between">
                <div>
                    <h3>Task Title</h3>
                    <input type="text" placeholder="Make UI design" />
                </div>
                <div>
                    <h3>Description</h3>
                    <textarea name="" id=""></textarea>
                </div>
                <div>
                    <h3>Due Date</h3>
                    <input type="date" />
                </div>
                <div>
                    <h3>Asign to</h3>
                    <input type="text" placeholder="Employee Name" />
                </div>
                <div>
                    <h3>Category</h3>
                    <input type="text" placeholder="design, dev, etc"/>
                </div>
                <button>Create Task</button>
            </form>
        </div>
    </div>
  )
}
export default AdminDashboard
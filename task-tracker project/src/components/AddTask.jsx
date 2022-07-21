

const AddTask = () => {
    return (
        <div className="container mt-4 bg-info">
      <h1 className="text-center text-danger font-weight-bold">TASK-TRACKER</h1>
      <form >
        <div className="mt-4 text">
          <label htmlFor="title" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Task"
           
          />
        </div>
        <div className="mt-3">
          <label htmlFor="desc" className="form-label">
            Day & Time
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            
          />
        </div>
        <button className="btn btn-danger mt-3 ">Save Task</button>
      </form>
    </div>
    )
};

export default AddTask
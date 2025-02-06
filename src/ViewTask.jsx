import PropTypes from "prop-types";
const ViewTask = ({ tasks, onDelete }) => {
  return (
    <div>
      <h2>View Tasks</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Task</th>
            <th>Task Description</th>
            <th>Task Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.task}</td>
              <td>{task.taskDescription}</td>
              <td>{task.taskType}</td>
              <td>
                <button onClick={() => onDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ViewTask.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Ensures id is a number
      task: PropTypes.string.isRequired,
      taskDescription: PropTypes.string.isRequired,
      taskType: PropTypes.string.isRequired,
    })
  ).isRequired, // Ensures tasks is an array of objects with required properties
  onDelete: PropTypes.func.isRequired,
};

export default ViewTask;

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export function ConsultList() {
  const handleDelete = () => {
    alert("Delete button clicked");
  };
  const handleEdit = () => {
    alert("Edit button clicked");
  };
  return (
    <div>
      <h1>Consult List</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">
              <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                Delete
              </button>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={handleEdit}
              >
                Edit
              </button>
            </th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="mb-3">
        <input class="btn btn-primary" type="submit" value="Submit"></input>

        <button type="button" class="btn btn-secondary">
          Secondary
        </button>
      </div>
    </div>
  );
}

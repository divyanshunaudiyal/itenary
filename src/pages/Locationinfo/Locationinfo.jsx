import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Locationinfo() {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Location:", location);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="my-5 form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="locationInput">
          <Form.Label>Location Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the location name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Locationinfo;

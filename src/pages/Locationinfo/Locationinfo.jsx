import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Locationinfo() {
  const [location, setLocation] = useState("");
  const [responseMessage, setResponseMessage] = useState(""); // Store API response here
  const [error, setError] = useState(null); // Store error if any

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiKey =
        "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"; // Replace with your actual OpenAI API key // Replace with your actual OpenAI API key
      const url = "https://api.openai.com/v1/chat/completions";

      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Provide information about the location ${location}`,
          },
        ],
        max_tokens: 100,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setResponseMessage(responseData.choices[0].message.content); // Display API response
    } catch (err) {
      setError(err.message); // Handle errors
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="my-5 form" onSubmit={handleSubmit}>
        {/* Location Input */}
        <Form.Group className="mb-3" controlId="locationInput">
          <Form.Label>Location Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the location name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>

        {/* Display API response */}
        {responseMessage && (
          <div className="mt-4">
            <h5>Location Information:</h5>
            <p>{responseMessage}</p>
          </div>
        )}

        {/* Display error if any */}
        {error && (
          <div className="mt-4">
            <p style={{ color: "red" }}>Error: {error}</p>
          </div>
        )}
      </Form>
    </div>
  );
}

export default Locationinfo;

import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Typeahead } from "react-bootstrap-typeahead";
import countryList from "react-select-country-list";

const Detaileditenary = () => {
  const countries = countryList().getData();

  const [visitCountry, setVisitCountry] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [tripDuration, setTripDuration] = useState(3);
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [kidsAges, setKidsAges] = useState([]);
  const [infants, setInfants] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const formData = {
      visitCountry,
      departureCity,
      tripDuration,
      adults,
      kids,
      kidsAges,
      infants,
    };
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="my-5 form" onSubmit={handleSubmit}>
        {/* Country of Visit */}
        <Form.Group className="mb-3">
          <Form.Label>Country of Visit</Form.Label>
          <Typeahead
            id="visit-country"
            options={countries.map((country) => country.label)}
            placeholder="Choose a country..."
            onChange={(selected) => setVisitCountry(selected[0] || "")}
          />
        </Form.Group>

        {/* Departure City */}
        <Form.Group className="mb-3">
          <Form.Label>Departure City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter departure city"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
          />
        </Form.Group>

        {/* Duration of the Trip */}
        <Form.Group className="mb-3">
          <Form.Label>Duration of the Trip (Days)</Form.Label>
          <InputGroup>
            <Button
              variant="outline-secondary"
              onClick={() => setTripDuration(Math.max(tripDuration - 1, 3))}
            >
              -
            </Button>
            <Form.Control
              type="number"
              value={tripDuration}
              min={3}
              max={30}
              style={{ textAlign: "center" }}
              readOnly
            />
            <Button
              variant="outline-secondary"
              onClick={() => setTripDuration(Math.min(tripDuration + 1, 30))}
            >
              +
            </Button>
          </InputGroup>
        </Form.Group>

        {/* Number of Travelers */}
        <Form.Group className="mb-3">
          <Form.Label>Number of Travelers - Adults</Form.Label>
          <InputGroup>
            <Button
              variant="outline-secondary"
              onClick={() => setAdults(Math.max(adults - 1, 1))}
            >
              -
            </Button>
            <Form.Control
              type="number"
              value={adults}
              style={{ textAlign: "center" }}
              readOnly
            />
            <Button
              variant="outline-secondary"
              onClick={() => setAdults(adults + 1)}
            >
              +
            </Button>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number of Travelers - Kids (Age 2-12)</Form.Label>
          <InputGroup>
            <Button
              variant="outline-secondary"
              onClick={() => {
                setKids(Math.max(kids - 1, 0));
                setKidsAges(kidsAges.slice(0, -1));
              }}
            >
              -
            </Button>
            <Form.Control
              type="number"
              value={kids}
              style={{ textAlign: "center" }}
              readOnly
            />
            <Button
              variant="outline-secondary"
              onClick={() => {
                setKids(kids + 1);
                setKidsAges([...kidsAges, ""]);
              }}
            >
              +
            </Button>
          </InputGroup>

          {kids > 0 && (
            <div className="mt-3">
              {kidsAges.map((age, index) => (
                <Form.Group key={index} className="mb-2">
                  <Form.Label>Age of Kid {index + 1}</Form.Label>
                  <Form.Control
                    type="number"
                    value={age}
                    placeholder="Enter age"
                    min={2}
                    max={12}
                    style={{ textAlign: "center" }}
                    onChange={(e) => {
                      const newAges = [...kidsAges];
                      newAges[index] = e.target.value;
                      setKidsAges(newAges);
                    }}
                  />
                </Form.Group>
              ))}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Number of Travelers - Infants (Below 2 years old)
          </Form.Label>
          <InputGroup>
            <Button
              variant="outline-secondary"
              onClick={() => setInfants(Math.max(infants - 1, 0))}
            >
              -
            </Button>
            <Form.Control
              type="number"
              style={{ textAlign: "center" }}
              value={infants}
              readOnly
            />
            <Button
              variant="outline-secondary"
              onClick={() => setInfants(infants + 1)}
            >
              +
            </Button>
          </InputGroup>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Detaileditenary;

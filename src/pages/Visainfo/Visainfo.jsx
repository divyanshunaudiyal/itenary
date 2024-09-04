import { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Form, Button } from "react-bootstrap";

function Visainfo() {
  const [visitCountry, setVisitCountry] = useState("");
  const [passportCountry, setPassportCountry] = useState("");

  const countries = countryList().getData(); // Get list of countries

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Visiting Country: ${visitCountry?.label} , Passport Issuing Country: ${passportCountry?.label}`
    );
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="form my-5" onSubmit={handleSubmit}>
        <Form.Group controlId="visitCountry">
          <Form.Label>Country to Visit</Form.Label>
          <Select
            options={countries}
            value={visitCountry}
            onChange={setVisitCountry}
            placeholder="Select a country"
          />
        </Form.Group>

        <Form.Group controlId="passportCountry">
          <Form.Label className="mt-4">Passport Issuing Country</Form.Label>
          <Select
            options={countries}
            value={passportCountry}
            onChange={setPassportCountry}
            placeholder="Select a country"
          />
        </Form.Group>

        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Visainfo;

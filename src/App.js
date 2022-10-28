// Library imports
import { useState, useEffect } from "react";

// Service imports
import { getCompanies } from "./Services/Companies";

// Component imports
import CompanyItem from "./Components/CompanyItem/CompanyItem";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import Error from "./Components/Error/Error";

function App() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCompanies = async () => {
    setLoading(true);
    const [response, err] = await getCompanies();
    setLoading(false);
    if (err) return setError("Something went Wrong!!!");
    return setCompanies(response);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <Header companiesNo={companies?.length} />

      {/* Loading */}
      {loading && <Loading />}

      {/* Error */}

      {error && !loading && <Error error={error} />}

      {/* Company List */}
      {companies?.map((company, idx) => (
        <div key={idx}>
          <CompanyItem company={company} />
        </div>
      ))}
    </div>
  );
}

export default App;

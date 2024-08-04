import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SearchCourse from "./SearchCourse";
import Courses from "./Courses";
import data from "../Data/course.json";

// Connecting backend to frontend
import api from "../Api/api";

// 4. Add BaseComponent which will host your course and searchCourse component.
const BaseComponent = () => {
  const [state, setState] = useState({
    courses: [],
    search_string: "",
    loaded: false,
  });

  // Define a fetchData function that uses the get() HTTP method to access the data from the backend, and then update the courses' details with it.
  const fetchData = async () => {
    try {
      const res = await api.get("/loadAllCourses");
      console.log(res);
      if (res.data.length > 0) {
        setState((prevState) => {
          return { ...prevState, courses: res.data, loaded: true };
        });
      } else {
        setState((prevState) => {
          return { ...prevState, loaded: true };
        });
      }
    } catch (error) {
      console.log("Error : " + error);
      setState((prevState) => {
        return { ...prevState, loaded: true };
      });
    }
  };

  // Finally, updating the useEffect hook inside the BaseComponent with the following code, which now calls the fetchData function inside it.
  useEffect(() => {
    // fetchData();
    console.log(
      "Remember to connect the fetchdata API with the backend to get the data."
    );
    setState((prevState) => {
      return { ...prevState, courses: data, loaded: true };
    });
  }, []);

  const handleSearchStringUpdate = (searchString) => {
    setState((prevState) => {
      return { ...prevState, search_string: searchString };
    });
  };

  return (
    <Container>
      <SearchCourse
        search_string={state.search_string}
        searchStringUpdated={handleSearchStringUpdate}
      />
      <Courses
        courses_data={state.courses}
        loaded_from_db={state.loaded}
        search_string={state.search_string}
      />
    </Container>
  );
};

export default BaseComponent;

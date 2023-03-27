import { Formik, Form } from "formik";
import { useQuery } from "react-query";
import SelectField from "../SelectField/SelectField";
import TextInputField from "../TextInputField/TextInputField";

import styles from "./MoviesFilter.module.css";
import { fetchGenres } from "../../api/genres/genres";
import { fetchYears } from "../../api/years/years";

type FormValues = {
  title: string;
  year: string[];
  genre: string[];
};

type moviesFilterProps = {
  handleValues: (values: FormValues) => void;
};

const MoviesFilter: React.FC<moviesFilterProps> = ({ handleValues }) => {
  const initialValues = {
    title: "",
    year: [],
    genre: [],
  };

  const { data: genresData } = useQuery(["genres"], fetchGenres);
  const { data: yearsData } = useQuery(["years"], fetchYears);

  const genres = genresData?.map((genre) => genre);
  const years = yearsData?.map((year) => year);

  const handleSubmit = (values: FormValues) => {
    handleValues(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ resetForm }) => (
        <Form className={styles.form}>
          <TextInputField
            placeholder="Search by title..."
            name="title"
            id="title"
            type="text"
          />
          <SelectField
            name="year"
            id="year"
            placeholder="Select release year.."
            options={years}
          />
          <SelectField
            name="genre"
            id="genre"
            placeholder="Select genre.."
            options={genres}
            isMulti
          />
          <button className={styles.button} type="submit">
            Search
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={() => {
              resetForm();
              window.location.reload();
            }}
          >
            Clear
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MoviesFilter;

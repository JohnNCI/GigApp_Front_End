import { useState } from "react";
import {
  GENRES_OPTIONS,
  VENUE_TYPES_OPTIONS,
} from "../../../../constants/base";
import Button from "../../../shared/buttons/Button";
import TypeOrSelect from "../../../shared/fields/TypeOrSelect";
import PageHeader from "../../../shared/headers/PageHeader";
import FormInput from "../../../shared/fields/FormInput";
import axios from "axios";

const initialState = {
  title: "",
  artist: "",
  coverImage: "",
  genres: [],
  venueTypes: [],
  titleErr: "",
  genresErr: "",
  venueTypesErr: "",
};

const AddSongMain = () => {
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      [name + "Err"]: "",
    }));
  };

  const isValid = () => {
    let titleErr = "";
    let genresErr = "";
    let venueTypesErr = "";

    if (!form.title) {
      titleErr = "Title is required.";
    }

    if (form.genres.length === 0) {
      genresErr = "Atleast one genre is required.";
    }

    if (form.venueTypes.length === 0) {
      venueTypesErr = "Atleast one venue type is required.";
    }

    if (titleErr || genresErr || venueTypesErr) {
      setForm((prev) => ({
        ...prev,
        titleErr: titleErr,
        genresErr: genresErr,
        venueTypesErr: venueTypesErr,
      }));

      return false;
    }

    return true;
  };

  const handleAddSong = () => {
    if (!isValid()) return;
    setIsLoading(true);

    axios
      .post(`http://localhost:3000/api/songs`, {
        title: form.title,
        artist: form.artist,
        coverImage: form.coverImage,
        genres: form.genres.map((el) => el.value),
        venueTypes: form.venueTypes.map((el) => el.value),
      })
      .then((res) => {
        setIsLoading(false);
        handleReset()
        console.log(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const handleReset = () => {
    setForm(initialState);
  };

  return (
    <>
      <PageHeader title={"Add song"} />
      <div>
        <form className="flex w-[50%] flex-col gap-6">
          <FormInput
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            isRequired
            placeholder="E.g. Shape of you"
            error={form.titleErr}
          />
          <FormInput
            label="Artist"
            name="artist"
            value={form.artist}
            onChange={handleChange}
          />
          <FormInput
            label="Cover Image"
            name="coverImage"
            value={form.coverImage}
            onChange={handleChange}
          />
          <TypeOrSelect
            label="Genres"
            name="genres"
            onChange={handleChange}
            value={form.genres}
            options={GENRES_OPTIONS}
            placeholder="Eg. Pop"
            error={form.genresErr}
            isClearable
            showRequiredLabel
            isMulti
          />
          <TypeOrSelect
            label="Venue Types"
            name="venueTypes"
            onChange={handleChange}
            value={form.venueTypes}
            options={VENUE_TYPES_OPTIONS}
            placeholder="Eg. Pub"
            error={form.venueTypesErr}
            isClearable
            showRequiredLabel
            isMulti
          />

          <div className="flex gap-2">
            <Button
              label={"Submit"}
              isLoading={isLoading}
              handleBtn={handleAddSong}
            />
            <Button label="Reset" color="secondary" handleBtn={handleReset} />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSongMain;

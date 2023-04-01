import React, { useRef, useState } from "react";

const Upload = () => {
  const [form, setForm] = useState({
    file: null,
    usernames: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    if (e.target.name === "file")
      setForm({ ...form, file: e.target.files[0] }), (ref.current.value = "");
    else setForm({ ...form, usernames: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.file || !form.usernames) setError("Please fill all the fields");
    else {
      const allUsernames = form.usernames.split(",");
      for (let i = 0; i < allUsernames.length; i++) {
        allUsernames[i] = allUsernames[i].trim();
      }
      setForm({
        file: null,
        usernames: "",
      });
    }
  };

  const ref = useRef();

  return (
    <div className="flex flex-col">
      <div className="text-4xl font-bold ">UPLOAD</div>
      <br />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[15px]">
          <label htmlFor="usernames">
            Enter usernames (comma separated)<sup>*</sup>
          </label>
          <input
            type="text"
            name="usernames"
            value={form.usernames}
            onChange={handleChange}
            className="border-[1px] border-[#858585] rounded-lg w-full text-md py-2 px-5 focus:outline-none"
          />
        </div>
        <br />
        <div className="flex flex-col gap-[15px]">
          <label htmlFor="file" className="text-lg">
            Upload File<sup>*</sup>
          </label>
          <div
            className={`w-full ${
              !form.file
                ? "border-dashed border-4 border-[#CCCCCC] justify-center"
                : "justify-between"
            } bg-[#F5F5F5] rounded-3xl h-[100px] cursor-pointer flex items-center py-4 px-[50px]`}
            onClick={() => ref.current?.click()}
          >
            <input
              ref={ref}
              type="file"
              name="file"
              id="file"
              className="hidden"
              onChange={handleChange}
            />
            {!form.file ? <div>Upload</div> : <div>{form.file.name}</div>}
          </div>
        </div>
        <br />
        <button className="border-2 border-gray-300 rounded-md p-2">
          Upload
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
};

export default Upload;

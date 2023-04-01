import React, { useRef, useState } from "react";

const Upload = () => {
  const [form, setForm] = useState({
    file: null,
    usernames: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm({
      file: null,
      usernames: "",
    });
  };

  const ref = useRef();

  return (
    <div className="flex flex-col">
      <div className="text-4xl font-bold ">UPLOAD</div>
      <br />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[15px]">
          <label htmlFor="usernames">
            Enter usernames<sup>*</sup>
          </label>
          <input
            type="text"
            name="usernames"
            value={form.usernames}
            onChange={(e) => setForm({ ...form, usernames: e.target.value })}
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
              onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
            />
          </div>
        </div>
        <br />
        <button className="border-2 border-gray-300 rounded-md p-2">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;

import { useState } from "react";

export default function AddFormFriend({ add, addFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function addValues() {
    const id = crypto.randomUUID();
    const newObj = {
      id,
      name,
      image,
      balance: Math.trunc(Math.random() * 100) + 1,
    };
    addFriends(newObj);
  }
  return (
    <div>
      {add && (
        <form className="form-add-friend">
          <label>👨Friend Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />

          <label>📸Image Url</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
          />
          <button onClick={() => addValues()} className="button">
            Add
          </button>
        </form>
      )}
    </div>
  );
}

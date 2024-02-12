import React, { useState } from "react";

const BoxGenerator = (props) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState({ width: '', height: '' });

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleSizeChange = (e) => {
    const { name, value } = e.target;
    setSize((prevSize) => ({
      ...prevSize,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      const newBox = { color, size };
      props.addBox(newBox);
      setColor("");
      setSize({ width: '', height: '' });
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input
            type="text"
            value={color}
            onChange={handleColorChange}
            placeholder="color"
            required
          />
        </label>
        <label>
          Width:
          <input
            type="text"
            name="width" 
            value={size.width}
            onChange={handleSizeChange}
            placeholder="width"
            required
          />
        </label>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={size.height}
            onChange={handleSizeChange}
            placeholder=" height"
            required
          />
        </label>
        <button type="submit">Add Box</button>
      </form>
    </div>
  );
};

export default BoxGenerator;

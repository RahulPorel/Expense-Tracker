import { useEffect, useState } from "react";

function MyComponent() {
  const [shuffledPersons, setShuffledPersons] = useState([]);

  const persons = [
    { name: "Salary", rollNo: "2000" },
    { name: "Transport", rollNo: "-350" },
    { name: "Medical", rollNo: "-1200" },
    { name: "Entertainment", rollNo: "400" },
    { name: "Personal", rollNo: "-200" },
    { name: "Miscellaneous", rollNo: "-125" },
    { name: "Dividends", rollNo: "1500" },
    { name: "Travel", rollNo: "-1000" },
    { name: "Inheritances", rollNo: "25500" },
    { name: "Utility bills", rollNo: "-100" },
  ];

  useEffect(() => {
    shuffleArray(persons);
    setShuffledPersons([...persons]);
  }, []);

  // Function to shuffle the array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <div>
      {shuffledPersons.map((person, index) => (
        <div key={index}>
          <p>Name: {person.name}</p>
          <p>Roll No: {person.rollNo}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;

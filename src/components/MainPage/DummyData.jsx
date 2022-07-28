function DummyData() {
  const dummyArray = new Array(5).fill({});
  const dummyData = dummyArray.map((arr) => {
    return {
      question: "",
      correct_answer: "",
      incorrect_answers: new Array(4),
    };
  });
  return dummyData;
}

export default DummyData;

function Options(props) {
    let { setAnswers, answers, count, questions } = props;
    return (
        questions[count].options.map((q, i) => {
            return (
                <label key={i}>
                    {q}
                    <input type="radio" name="mcq" checked={answers[count] === i} onChange={() => {
                        answers[count] = i;
                        setAnswers([...answers]);
                    }} />
                </label>)
        })
    );
}
export default Options;
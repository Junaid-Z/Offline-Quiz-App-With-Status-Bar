function StatusBar(props) {
	let { questions, count } = props;
	return (
		<div className="statusBar">
			{
				questions.map((v, i) => {
					if (i < count) {
						if (i === count - 1) {
							if (i === 0) {
								return (
									<div className="bar start end fill" style={{ width: `calc(100% / ${questions.length})` }}></div>
								)
							}
							else {
								return (<div className="bar end fill" style={{ width: `calc(100% / ${questions.length})` }}></div>)
							}
						}
						else if (i === 0) {
							return (
								<div className="bar start fill" style={{ width: `calc(100% / ${questions.length})` }}></div>
							)
						}
						else {
							return (
								<div className="bar fill" style={{ width: `calc(100% / ${questions.length})` }}></div>
							)
						}
					}
					else {
						if (i === questions.length - 1) {
							return (
								<div className="bar end noFill" style={{ width: `calc(100% / ${questions.length})` }}></div>
							)
						}
						else if (i === 0) {
							return (
								<div className="bar start noFill" style={{ width: `calc(100% / ${questions.length})` }}></div>
							)
						}
						else {
							return (
								<div className="bar noFill" style={{ width: `calc(100% / ${questions.length})` }}></div>
							)
						}
					}
				})
			}
		</div>
	)
}
export default StatusBar;
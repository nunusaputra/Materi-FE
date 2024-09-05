class introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Wisnu"
        }
    }
    render() {
        return (
            <h1>Hello, {this.state.name} 👋</h1>
        )
    }
}
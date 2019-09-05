var Counter = React.createClass({

    getDefaultProps() {
        console.log('domyslne wartosci propsow');
    },

    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount() {
        console.log('metoda wywolywana w momencie inicjalizacji')
    },


    render: function () {
        return React.createElement('div', {
            className: 'box'
        },
            React.createElement('div', {
                className: 'counter'
            }, this.state.counter),
            React.createElement('button', {
                onClick: this.decrement
            }, '-'),
            React.createElement('button', {
                onClick: this.increment
            }, '+'),
        );
    },

    componentDidMount() {
        console.log('faza inicjalizacji, wczytywanie danych z serwera')
    },

    componentWillUpdate() {
        console.log('faza aktualizacji, przestarzala metoda wywolywania, nie wolno modyfikowac stanu w tym momencie')
    },

    componentDidUpdate() {
        console.log('komponent zaktualizowany przyklad: manipulacja DOM')
    }
});


var element = React.createElement('div', { className: 'items' },
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
);

ReactDOM.render(element, document.getElementById('app'));
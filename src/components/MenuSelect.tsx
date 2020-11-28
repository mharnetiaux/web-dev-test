import * as React from "react";
import Select from 'react-select';

class MenuSelect extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            placeholder: '-- select --',
            selectable: false,
            list: [],
            store: [
                { value: 'blues', label: 'Blues' },
                { value: 'rock', label: 'Rock' },
                { value: 'jazz', label: 'Jazz' },
                { value: 'orchestra', label: 'Orchestra' }
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.submitItem = this.submitItem.bind(this);
        this.removeOption = this.removeOption.bind(this);
    }
    public handleChange(selectable: any) : void {
        this.setState({
            placeholder: selectable.value,
            selectable: true,
        });
    }
    public submitItem(event: any) : void {
        event.preventDefault();
        const arr = this.state.list;
        arr.push(this.state.placeholder);
        this.setState({
            selectable: false,
            list: arr,
            placeholder: '-- select --'
        });
    }
    public closeMenu() : void {
        this.setState({ showMenu: true })
    }
    public removeOption(event: any, id: any) : void {
        event.preventDefault();
        let arr = this.state.list;
        if (id > -1) {
            arr.splice(id,1);
        }
        this.setState({list: arr});
    }
    render() {
        return (
            <section>
                <Select
                    className={'select-menu'}
                    onChange={ this.handleChange }
                    value={ this.state.selectable }
                    options={ this.state.store }
                    placeholder={ this.state.placeholder }
                    onMenuClose={ this.closeMenu }
                />
                <button onClick={ event => this.submitItem(event) } disabled={ (!this.state.selectable) }>Add to List</button>
                <ul>
                    { this.state.list.map((item, id) => <li key={ id }>{ item }<button className='delete' onClick={ event => this.removeOption(event,id) }>X</button></li>) }
                </ul>
            </section>
        );
    };
}
export default MenuSelect;
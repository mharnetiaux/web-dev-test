import * as React from "react";
import MenuSelect from "./components/MenuSelect";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <main>
                <MenuSelect/>
            </main>
        );
    };
}
export default App;
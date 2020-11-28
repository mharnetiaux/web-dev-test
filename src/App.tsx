import * as React from "react";
import MenuSelect from "./components/MenuSelect";
import {defineMessage, FormattedMessage, IntlProvider} from 'react-intl';

const mainHeadingMessage = defineMessage({
    id: 'mainHeading',
    description: 'A message', // Description should be a string literal
    defaultMessage: 'I like to listen to {variable}', // Message should be a string literal
});

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
           <IntlProvider locale={'en'}>
               <main>
                   <h1>
                       {/* Add dynamic data to Values Object */}
                       <FormattedMessage
                           {...mainHeadingMessage}
                           values={{
                               variable: 'rock',
                           }}
                       />
                   </h1>
                   <MenuSelect/>
               </main>
           </IntlProvider>
        );
    };
}
export default App;
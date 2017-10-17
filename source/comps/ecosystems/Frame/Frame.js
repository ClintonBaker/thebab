import React from 'react';
import { Navbar } from '@comps/organisms';
import './styles/Frame.css';

class Frame extends React.Component {
    componentWillMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div styleName="Frame">
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default Frame;

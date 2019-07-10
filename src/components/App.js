import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language: language });
    };

    render() {
        return (
            <div className='ui container'>
                <div>
                    Select a language:
                    <i className='flag us' onClick={() => this.onLanguageChange('english')} />
                    <i className='flag nl' onClick={() => this.onLanguageChange('dutch')} />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value='red'>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
};

export default App;
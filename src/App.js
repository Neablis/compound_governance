import React from 'react';
import Application from "./scenes/Application";
import { Container } from '@material-ui/core';

import './App.css';

function App() {
    return (
        <div className="App">
            <Container className="App" maxWidth="xl">
                <Application />
            </Container>
        </div>
    );
}

export default App;

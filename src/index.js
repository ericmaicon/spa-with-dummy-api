import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import AppForm from 'features/app/components/AppForm';

axios.defaults.baseURL = 'http://localhost:3000';

ReactDOM.render(<AppForm />, document.getElementById('app'));
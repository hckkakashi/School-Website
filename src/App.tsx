import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import AdmissionsPage from './pages/admissions';
import StudentLifePage from './pages/student-life';
import ContactPage from './pages/contact';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/admissions" component={AdmissionsPage} />
        <Route path="/student-life" component={StudentLifePage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Layout>
  );
}

export default App;
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd';
const { Header:AntdHeader, Footer:AntdFooter, Content:AntdContent } = Layout;

import Home from '../components/Home'
import Header from '../components/Header'
import IssueList from '../components/IssueList'
import IssueDetail from '../components/IssueDetail'
import NotFoundPage from '../components/NotFound'

const AppRouter = () => (
    <BrowserRouter>
        <Layout className="app-container">
            <AntdHeader>
                <Header />
            </AntdHeader>

            <AntdContent className="app-content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/issues' component={IssueList}/>
                    <Route exact path="/issues/:issue" component={IssueDetail} />
                    <Route exact component={NotFoundPage}/>
                </Switch>
            </AntdContent>

            <AntdFooter className="app-footer" >&copy; CERN</AntdFooter>
        </Layout>
    </BrowserRouter>
);

export default AppRouter;
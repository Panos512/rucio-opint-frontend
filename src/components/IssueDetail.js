import React from "react";
import { connect } from 'react-redux';
import { fetchIssueById } from '../creators/issues';
import IssueDetailAction from './IssueDetailAction'
import IssueDetailFeedback from './IssueDetailFeedback'

class IssueDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {issue: undefined, clicked:false}
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.issue;
        this.props.dispatch(fetchIssueById(id));
    }

    shouldComponentRender() {
        const {pending} = this.props.pending;
        if(pending === false) return false;
        return true;
    }

    handleClick = () => {this.setState(() => ({ clicked:true }))}
s
    render(){
        if(!this.shouldComponentRender()) return (<div></div>)
        const ret = (  
            <div>
                Possible Reason<br/>
                Proposed actions<br/>
                Source =>
                Destination<br/>
                Took Actions Button<br/>
                <br/>
                Share/Ticket buttons (?)<br/>
            </div>
    );
        return(
            this.state.clicked ? 
                <IssueDetailFeedback issue={this.props.issue} />
                : 
                <IssueDetailAction issue={this.props.issue} handleClick={this.handleClick}/>
        )
    }
}

const mapStateToProps = (state) => (
    {issue: state.issues.issue,
     pending: state.issues.pending
    });

export default connect(mapStateToProps)(IssueDetail);

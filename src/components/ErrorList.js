import React from "react";
import ErrorListItem from './ErrorListItem'


class ErrorList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            errors: [
                {
                  "id": "1",
                  "category_id": "1",
                  "message": "TRANSFER [110] TRANSFER  Operation timed out",
                  "src_site": "WT2",
                  "dst_site": "UKI-SOUTHGRID-OX-HEP",
                  "amount": "223",
                  "failure_type": "transfer-failure",
                  "created_at": "2019-06-05 14:11:49.133219"
                },
                {
                  "id": "2",
                  "category_id": "2",
                  "message": "The requested service is not available at the moment.\nDetails: An unknown exception occurred.\nDetails: globus_ftp_client: the server responded with an error 530 530-globus_xio_gssapi_ftp.c:globus_l_xio_gssapi_ftp_server_read_cb:1392:  530-Server side crede",
                  "src_site": "UNKNOWN",
                  "dst_site": "ANLASC",
                  "amount": "1866",
                  "failure_type": "deletion-failure",
                  "created_at": "2019-06-05 14:11:49.337664"
                }
              ],
            ...props}
    }

    render(){
        return (
            <div className='error-list'>
                <h1 className='error-list-title'>List of recent errors</h1>
                    {this.state.errors.map((error) => (
                        <ErrorListItem key={error.message} {...error}/>
                    ))}
            </div>
        );
    }
}

export default ErrorList;
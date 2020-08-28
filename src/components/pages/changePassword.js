import React from "react";

class ChangePassword extends React.Component {
    render() {
        return (
            <div className="ChangePassword">
                <h1>ARENA</h1>
                <div className="content">
                    <form>
                        <div>
                            <input placeholder="NEW  PASSWORD" type="password" />
                            <input placeholder="CONFIRM  PASSWORD" type="password" />
                        </div>
                        <button>Reset password</button>
                    </form>
                </div>
                <div className="copyright">© 2020 ARENA.All rights reserved.</div>
            </div>
        );
    }
}

export default ChangePassword;


export default function SignUp() {
   
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="container mt-4">

            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form className="form-control" onSubmit={(e) => handleSubmit(e)}>
                        <h3>Registration Form</h3>
                        <br />
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" name="name"  />
                                 
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col-md-4">
                                    <label>Gender</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="radio" className="form-check-input" name="gender" value="male" />
                                    <label>Male</label>
                                    <input type="radio" className="form-check-input" name="gender" value="female" />
                                    <label>Female</label>
                                </div>
                            </div>
                            <br />
                         
                            <div className="row">
                                <div className="col-md-4">
                                    <label>DOB</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="date" name="dob" class="form-control"/>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-4">
                                    <label>Email</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="email" className="form-control" name="email"  />
                                   
                                </div>
                            </div>
                            <br />

                            <div className="row">
                                <div className="col-md-4">
                                    <label>Password</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="password" className="form-control" name="password"  />
                                    
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div>
                                    <button type="submit" class="btn btn-dark"
                                   >SignUp</button>

                                </div>
                              

                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}

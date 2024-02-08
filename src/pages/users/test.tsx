<form  action="" style={{ width: '100%' }} onSubmit={loginUser}>

                

                <div className="d-flex justify-content-center align-items-center">
             
                <div className="form-outline login position-relative mb-4 " style={{width:'30rem'}}>
                <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="emailField" style={{fontSize:'.8rem'}}>Email</label>
                <input
                    type="email"
                    name="email"
                    id="emailField"
                    className="form-control form-control-lg pl-3"  // Added padding to the left
                    placeholder="Your Email Address"
                    style={{ paddingTop: '1.5rem', fontSize:'.8rem', color:'#ABAFB1' }}
                />
                </div>

                </div>

           

        

                <div className='d-flex justify-content-center align-items-center'>
      <div className="form-outline position-relative mb-4" style={{width:'30rem', marginBottom:'0rem'}}>
        <label className="form-label position-absolute top-0 start-0 px-3" htmlFor="password" style={{fontSize:'.8rem'}}>
          Password
        </label>
        <div className="input-group">
          <span className="input-group-text" style={{ backgroundColor: '#fff', borderRight: 0 }}>
            <BsLock size={20} color="#ABAFB1" /> {/* Padlock icon */}
          </span>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="form-control form-control-lg pl-3"  // Added padding to the left
            placeholder="********"
            style={{ paddingTop: '1.5rem', fontSize:'1rem', color:'#ABAFB1', borderLeft: 0 }}
          />
          <span className="input-group-text" style={{ backgroundColor: '#fff', borderLeft: 0 }}>
            {/* Toggle switch */}
            <button
              type="button"
              className="btn btn-link"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible size={20} color="#ABAFB1" /> : <AiFillEye size={20} color="#ABAFB1" />}
            </button>
          </span>
        </div>
      </div>
    </div>




    


  


    

    <div className="container">
    <div className="row">
        {/* Remember Me Checkbox Column */}
        <div className="col-md-6 d-flex align-items-center justify-content-center mb-3 mb-md-0">
            <div className="">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="acceptAgreementCheckbox"
                        style={{ marginRight: '0.5rem' }}
                    />
                    <label className="form-check-label remember-txt" htmlFor="acceptAgreementCheckbox" style={{ fontSize: '.9rem', marginLeft: '0.5rem' }}>
                        Remember me?
                    </label>
                </div>
            </div>
        </div>

        {/* Forgot Password Link Column */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <a href="#">Forgot password?</a>
            </div>
        </div>
    </div>
</div>

    


    


    
                
<div className='d-flex justify-content-center align-items-center'>
      <div className="form-outline position-relative mb-3" style={{width:'30rem', marginBottom:'0rem'}}>
                <div className="pt-3 mb-1 text-center">
                  
                  <Link to="/"><button className="btn btn-primary" type="" style={{width:'100%'}}>Login</button></Link>
                
                </div>
                </div>
                </div>
                


                

                <div className='d-flex justify-content-center align-items-center'>
      <div className="form-outline position-relative mb-0" style={{width:'30rem', marginTop:'0rem'}}>
                <div className='text-center'>
                <p style={{color:'#71717A'}}>Don't have an account? <Link to="/user/signup"><a href="#!" className="link-info">Signup</a></Link></p>

                </div>
              </div>
              </div>


              </form>
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handlegoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handlegoogleSignIn} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
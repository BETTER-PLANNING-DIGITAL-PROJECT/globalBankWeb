import React, { Suspense, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Outlet, Route, Routes, useLocation, useNavigate, useParams} from 'react-router-dom';
import Hello from "./app/pages/hello";


function MainLayout(){
    return (
        <div id="main-wrapper" >
            <div className="content-body" >
                <Outlet />
            </div>
        </div>
    )
}

export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}



function App () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {

    }, []);

    let routeBloc = (
        <Routes>
                <Route  element={<MainLayout />} >
                   <Route path='/hello' element={<Hello />} />
                </Route>
        </Routes>
    );

            return (
                <>
                    <Suspense fallback={
                        <div id="preloader">
                            <div className="sk-three-bounce">
                                <div className="sk-child sk-bounce1"></div>
                                <div className="sk-child sk-bounce2"></div>
                                <div className="sk-child sk-bounce3"></div>
                            </div>
                        </div>
                    }>
                        {routeBloc}
                    </Suspense>
                </>
            )
}


export default withRouter(App);


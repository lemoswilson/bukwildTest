import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { routes, page } from '../../App';
import Redirect from '../Redirect';
import { getPage } from '../LayoutUI';

interface RouteComponentsProps {
	pages: page[],
}

const RouteComponents: React.FC<RouteComponentsProps> = ({pages}) => {
	const location = useLocation();
	return (
		<>
		<Switch location={location} key={location.pathname}>
			{ routes.map(route => (
				<Route key={route.name} path={route.path} render={ () => <route.Component BLOCK={0} PAGE={getPage(route.path)} pages={pages}/>}/>
			))}
			<Route component={Redirect} />
		</Switch>
		</>
	)
}

export default RouteComponents;
import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const Redirect: React.FC = () => {
	const history = useHistory();

	useEffect(() => {
		history.push('/industries');
	}, [history])

	return (
		<>
		</>
	)
}

export default Redirect;
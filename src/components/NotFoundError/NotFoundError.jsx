import './NotFoundError.css'
import {Link} from 'react-router-dom'

function NotFoundError(){
    return (
    <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - Esta página no se encuentra disponible.</h2>
			</div>
			<Link to='/'>Pagina principal</Link>
		</div>
	</div>
    )
}

export default NotFoundError;
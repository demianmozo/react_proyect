import './NotFoundError.css'

function NotFoundError(){
    return (
    <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - Esta página no se encuentra disponible.</h2>
			</div>
			<a>Pagina principal</a>
		</div>
	</div>
    )
}

export default NotFoundError;
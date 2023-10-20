import "./Header.css";
export function Header() {
	return (
		<div className="Header">
			<div className="container">
				<div>
					<a href="/">LOGO</a>
				</div>
				<div>
					<a href="/Login">Login</a>
				</div>
				<div>
					<a href="/">Decks</a>
				</div>
			</div>
		</div>
	);
}

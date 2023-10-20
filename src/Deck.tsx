import { useState, useEffect } from "react";
import "./Deck.css";
import { useParams } from "react-router-dom";
import { createCard } from "./api/createCard";
import { getDeck } from "./api/getDeck";
import { deleteCard } from "./api/deleteCard";

function Deck() {
	const [deck, setDeck] = useState<TDeck | undefined>({});
	const [text, setText] = useState("");
	let { deckId } = useParams();
	const [cards, setCard] = useState<string[]>([]);

	async function handleCreateDeck(e: React.FormEvent) {
		e.preventDefault();
		const { cards: serverCards } = await createCard(deckId!, text);
		setCard(serverCards);
		setText("");
	}

	async function handleDeleteCard(index: number) {
		console.log(index);
		if (!deckId) return;
		const newDeck = await deleteCard(deckId, index);
		setCard(newDeck.cards);
	}

	useEffect(() => {
		async function fetchDesk() {
			if (!deckId) return;
			const newDeck = await getDeck(deckId);
			setDeck(newDeck);
			setCard(newDeck.cards);
		}
		fetchDesk();
	}, [deckId]);

	return (
		<div className="Deck">
			<ul className="cards">
				{cards.map((card, index) => (
					<li key={index}>
						<button
							onClick={() => {
								handleDeleteCard(index);
							}}
						>
							X
						</button>
						{card}
					</li>
				))}
			</ul>

			<form onSubmit={handleCreateDeck}>
				<label htmlFor="card-text">Card Text</label>
				<input
					id="card-text"
					value={text}
					type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setText(e.target.value);
					}}
				/>
				<button>Create Card</button>
			</form>
		</div>
	);
}

export default Deck;

import { API_URL } from "./config";

export type TDeck = {
	title: string;
	_id: string;
};

export async function getDeck(deckId:string): Promise<TDeck[]> {
	const response = await fetch(`${API_URL}/decks/${deckId}`);
	return response.json();
}

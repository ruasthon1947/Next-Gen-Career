from typing import Dict, Any
import requests


def format_response(results, default_msg="No relevant results found.") -> Dict[str, Any]:
    """
    Format search results into a single one-liner textual answer.
    """
    if results:
        # Take only the first result snippet
        top_result = results[0]
        snippet = top_result.get("snippet", "").strip()

        return {
            "search_answer": snippet,
            "search_results": []  # We skip raw links for one-liner answers
        }

    return {"search_answer": default_msg, "search_results": []}


def search(query: str):
    """
    Perform a Google Custom Search for the given query.
    Returns a one-liner answer from the first search result.
    """
    top_k_results = 1
    search_engine_api_key = ""  # <--- Add your Google API key here
    google_cse_id = ""  # <--- Add your Custom Search Engine ID here

    url = "https://www.googleapis.com/customsearch/v1"
    params = {
        "key": search_engine_api_key,
        "cx": google_cse_id,
        "q": query
    }

    try:
        r = requests.get(url, params=params)
        r.raise_for_status()
        data = r.json()
        results = data.get("items", [])
        response = format_response(results[:top_k_results])
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        response = {"search_answer": "No relevant results found.", "search_results": []}

    return {"response": response}


if __name__ == "__main__":
    query = "What is HTML?"
    result = search(query)

    # Print only the clean one-liner answer
    print(result["response"]["search_answer"])

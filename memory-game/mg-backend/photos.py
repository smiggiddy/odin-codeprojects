import requests


class Pictures:
    def __init__(self, token) -> None:
        self.url = "https://api.pexels.com"

        self.parameters = {"orientation": "square", "size": "small"}
        self.headers = {"Authorization": f"{token}"}

    def search(self, topic):

        search_path = "/v1/search"
        search_params = {**self.parameters, "query": topic}

        r = requests.get(
            url=self.url + search_path, params=search_params, headers=self.headers
        )

        return r.json()
